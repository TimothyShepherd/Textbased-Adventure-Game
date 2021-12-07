import MapLoader from "./MapLoader";
import TileMap from ".";
import MapProperties from "./MapProperties";

export default class MapBuilder extends MapProperties {

  constructor(ctx: any) {
    super();
    this.ctx = ctx;
    this.loader = new MapLoader();
    this.map = new TileMap(0);
  }

  drawPlayer = () => {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.fillStyle = '#000000';
    this.ctx.beginPath();
    this.ctx.arc(50, 100, 20 * Math.sin(this.frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    this.ctx.fill();
  }

  drawMap = () => {
    for (let j = 0; j < this.map.x; j++) {
      for (let k = 0; k < this.map.y; k++) {
        const tile = this.map.getTile(j, k);
        if (tile !== 0) {
          this.ctx.drawImage(
            this.atlas,
            (tile - 1) * this.map.tileSize,
            0,
            this.map.tileSize,
            this.map.tileSize,
            j * this.map.tileSize,
            k * this.map.tileSize,
            this.map.tileSize,
            this.map.tileSize
          );
        }
      }
    }
  };

  init = async () => {
    // ! TileSets should always be kept in a static directory such as 'public/assets/' and be referenced from here
    const tiles = await this.loader.loadImage("tiles", "../assets/TileSet.png");
    this.atlas = this.loader.getImage("tiles");
    this.images = {
      tiles,
    };
  };

  render() {
    this.drawMap();
  }
}