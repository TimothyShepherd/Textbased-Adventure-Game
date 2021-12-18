import MapLoader from "./MapLoader";
import TileMap from "./Map";
import MapProperties from "./MapProperties";
import * as React from 'react'
import TileMaps from "./TileMaps";

export default class MapBuilder extends MapProperties {
  x: number;
  y: number;
  tiles:any;
  cycle:number;
  floor: number;
  constructor(ctx: any) {
    super();
    this.ctx = ctx;
    this.loader = new MapLoader();
    //Map is actually index.tsx instantiated as a class
    this.map = new TileMap(0);
    this.cycle=0;
    this.floor=0;
    this.x=10;
    this.y=5;
    this.tiles = new TileMaps().tileMaps[0][this.cycle];
  }
  getTile(j: any, k: any) {
    return this.tiles[k * this.x + j];
  }
  drawMap = () => {
    for (let j = 0; j < this.x; j++) {
      for (let k = 0; k < this.y; k++) {
        const tile = this.getTile(j, k);
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
            this.map.tileSize,
          );
        }
      }
    }
  };

  clearMap = () => {
    this.ctx.clearRect(0, 0, 640, 320);
  }

  init = async () => {
    // ! TileSets should always be kept in a static directory such as 'public/assets/' and be referenced from here
    const tiles = await this.loader.loadImage("tiles", "./assets/TileSet.png");
    this.atlas = this.loader.getImage("tiles");
    this.images = {
      tiles,
    };
  };
  call = (c: number, f: number) => {
    console.log("call")
    this.cycle = c
    this.floor = f
    console.log(this.cycle)
    this.tiles = new TileMaps().tileMaps[this.floor][this.cycle];
    this.render();
  }
  callDown = (c: number, f: number) => {
    console.log("call")
    this.cycle = c
    this.floor = f
    console.log(this.cycle)
    this.tiles = new TileMaps().tileMaps[this.floor][this.cycle];
    this.render();
  }

  render() {
    this.drawMap();  
  }
}