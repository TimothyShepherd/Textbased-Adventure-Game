import * as React from "react";
import MapBuilder from './MapBuilder';

// * - (mapWidth * mapLength) becomes the mapDimensions in pixels
// * - (x * tileSize) becomes the mapWidth in pixels
// * - (y * tileSize) becomes the mapLength in pixels
const mapWidth = 640;
const mapLength = 320;

export default class TileMap extends React.Component {

  // * x becomes columns
  // * y becomes rows
  x: number;
  y: number;
  tileSize: number;
  tiles: number[];
  canvasRef: any;
  game: any;
  state: any;

  constructor(props: any) {
    
    super(props);

    this.state = {
      isGameRunning: false
    };
    this.canvasRef = React.createRef();

    // * (x * y) becomes the mapSize
    this.x = 10;
    this.y = 5;

    // * (2 ** n) becomes the tileSize in pixels
    // ? Exponent Legend: (( n=3: 8-bit, n=4: 16-bit, n=5: 32-bit, n=6: 64-bit ))
    this.tileSize = (2 ** 6);

    // ? TileSet Legend: (( 1: Water, 2: Floor, 3: Item, 4: Store, 5: Event, 6: Enemy, 7: Boss ))
    this.tiles = [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 2, 3, 2, 4, 2, 5, 2, 2, 1,
      1, 2, 2, 6, 2, 6, 2, 6, 7, 1,
      1, 2, 5, 2, 5, 2, 3, 2, 2, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ];
  }

  // * j becomes index of x
  // * k becomes index of y
  getTile(j: any, k: any) {
    return this.tiles[k * this.x + j];
  }

  renderGame = () => {
    requestAnimationFrame(() => {
      this.game.render();

      if (this.state.isGameRunning) {
        this.renderGame();
      };
    });
  };

  getContext = () => this.canvasRef.current.getContext("2d");

  start = async () => {
    if (!this.state.isGameRunning) {
      this.game = new MapBuilder(this.getContext());
      await this.game.init();
      this.renderGame();
    }
    this.setState(function (state: any) {
      return {
        isGameRunning: !state.isGameRunning
      };
    });
  };

  componentDidMount = () => {
    this.start();
  };

  render() {
    return (
      <div>
        <div style={{
          // Map styling properties
          background: 'linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%)',
          backgroundBlendMode: 'multiply',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '255px',
          height: '100%'
        }}>
          <canvas
            ref={this.canvasRef}
            width={mapWidth}
            height={mapLength}
          />
        </div>
      </div >
    );
  }
}