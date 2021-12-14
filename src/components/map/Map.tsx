import * as React from "react";
import MapBuilder from "./MapBuilder";
import TileMaps from "./TileMaps";

// * - (mapWidth * mapLength) becomes the mapDimensions in pixels
// * - (x * tileSize) becomes the mapWidth in pixels
// * - (y * tileSize) becomes the mapLength in pixels
// Rows = 5 * 64 pixels and then Columns = 10 * 64 pixels
const mapWidth = 640; // Columns
const mapLength = 320; // Rows

export default class Map extends React.Component {
  // * x becomes columns
  // * y becomes rows
  x: number;
  y: number;
  tileSize: number;
  tiles: number[];
  canvasRef: any;
  state: any;
  store: any;
  dispatch: any;
  static cycleSet: number;
  static floorSet: number;
  static game: any;
  static flag: boolean;
  
  constructor(props: number) {
    super(props);

    this.state = {
      isGameRunning: false,
      setMap: new TileMaps(),
      floor: 0,
      cycle: 0,
    };
    console.log(props)
    this.canvasRef = React.createRef();

    // * (x * y) becomes the mapSize
    this.x = 10;
    this.y = 5;

    Map.cycleSet = 0;
    Map.flag = false;

    // * (2 ** n) becomes the tileSize in pixels
    // ? Exponent Legend: (( n=3: 8-bit, n=4: 16-bit, n=5: 32-bit, n=6: 64-bit ))
    this.tileSize = 2 ** 6;

    // ? TileSet Legend: (( 1: Water, 2: Floor, 3: Item, 4: Store, 5: Event, 6: Enemy, 7: Boss, 8: Player ))
    this.tiles = this.state.setMap.tileMaps[this.state.floor][this.state.cycle];
  }

  
  // * j becomes index of x
  // * k becomes index of y
  getTile(j: any, k: any) {
    return this.tiles[k * this.x + j];
  }

  static move = (c: number, f: number) => {
    Map.cycleSet = c;
    Map.floorSet = f;
    Map.game.call(Map.cycleSet, Map.floorSet);
  }

  static getMap = () => {
    return this;
  }

  renderGame = () => {
      Map.game.render();
  };

  getContext = () => this.canvasRef.current.getContext("2d");

  start = async () => {
    if (!this.state.isGameRunning) {
      Map.game = new MapBuilder(this.getContext());
      await Map.game.init();
      this.renderGame();
    }
    this.setState(function (state: any) {
      return {
        isGameRunning: !state.isGameRunning,
      };
    });
    Map.flag = true;
  };

  componentDidMount = () => {
    this.start();
  };

  handleClickUp = () => {
    Map.game.callUp(Map.cycleSet);
  };

  handleClickDown = () => {
    Map.game.callDown(Map.cycleSet);
  };

  render() {
    return (
      <div>
        <div
          style={{
            // Map styling properties
            background:
              "linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%)",
            backgroundBlendMode: "multiply",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "50px",
            height: "100%",
            margin: "50px"
          }}
        >
          <canvas
            style={{
              padding: "10px",
            }}
            ref={this.canvasRef}
            width={mapWidth}
            height={mapLength}
          />
        </div>
      </div>
    );
  }
}