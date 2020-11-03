import "./App.css";
import React, {Component} from "react";
import {Helmet} from "react-helmet";
import Title from "./component/title/Title";
import Contents from "./component/contents/Contents";
import Gallery from './component/gallery/Gallery';

class App extends Component {
  constructor() {
    super();
    this.state = {isGallery: false};
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <div>
          <Title />
          <Contents />
          {/*<Gallery/>*/}
        </div>
      </div>
    );
  }
}

export default App;
