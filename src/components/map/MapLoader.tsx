import MapProperties from "./MapProperties";

export default class MapLoader extends MapProperties {

  constructor() {
    super();
    this.images = {}
  }

  loadImage = (key: any, src: any) => {
    const image = new Image();
    const promise = new Promise((resolve, reject) => {
      image.onload = () => {
        this.images[key] = image;
        resolve(image);
      };

      image.onerror = () => {
        reject("Could not load image: " + src);
      };
    });

    image.src = src;
    return promise;
  };

  getImage = (key: any) => {
    return key in this.images ? this.images[key] : null;
  };
}
