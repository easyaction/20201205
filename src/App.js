import "./App.css";
import React, {Component} from "react";
import {Helmet} from "react-helmet";
import Title from "./component/title/Title";
import Contents from "./component/contents/Contents";
import Gallery from './component/gallery/Gallery';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';


class App extends Component {
  constructor() {
    super();
    this.state = {isModalOpen: false};
  }

  openModal = () => {
    this.setState({isModalOpen: true})
    disableBodyScroll(this.targetElement);

  }

  closeModal = () => {
    this.setState({isModalOpen: false})
    enableBodyScroll(this.targetElement);
  }
  targetElement = null;

  componentDidMount() {
    // 2. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
    // Specifically, the target element is the one we would like to allow scroll on (NOT a parent of that element).
    // This is also the element to apply the CSS '-webkit-overflow-scrolling: touch;' if desired.
    this.targetElement = document.querySelector('.App');
  }

  componentWillUnmount() {
    // 5. Useful if we have called disableBodyScroll for multiple target elements,
    // and we just want a kill-switch to undo all that.
    // OR useful for if the `hideTargetElement()` function got circumvented eg. visitor
    // clicks a link which takes him/her to a different page within the app.
    clearAllBodyScrollLocks();
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <div>
            <Title />
            <Contents open={this.openModal} />
          <Gallery isOpen={this.state.isModalOpen} close={this.closeModal} />
        </div>
      </div>
    );
  }
}

export default App;
