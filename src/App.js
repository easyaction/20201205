import "./App.css";
import { Component } from "react";
import { Helmet } from "react-helmet";
import Title from "./component/title/Title";
import Contents from "./component/contents/Contents";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          ></meta>
        </Helmet>
        <Title />
        <Contents />
      </div>
    );
  }
}

export default App;
