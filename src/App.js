import "./App.css";
import React, {Component, useRef, useEffect} from "react";
import Title from "./component/title/Title";
import Contents from "./component/contents/Contents";
import Gallery from './component/gallery/Gallery';

class App extends Component {
  constructor() {
    super();
    this.state = {isModalOpen: false, outModal:false, targetElement: null};
  }

  openModal = () => {
    this.setState({isModalOpen: true}, () => {
      setTimeout(()=> {
        const body = document.querySelector('.all');
        this.setState({scrollPosition : window.pageYOffset});
        body.style.overflow = 'hidden';
        body.style.pointerEvents = 'none';
        body.style.position = 'fixed';
        body.style.top = `-${this.state.scrollPosition}px`;
        body.style.left = '0';
        body.style.right = '0';
      }, 500)
    })

  }



  closeModal = () => {
    this.setState({outModal: true}, () => {
      setTimeout(() => {
        this.setState({isModalOpen: false, outModal:false });
      }, 500)});
    const body = document.querySelector('.all');
    body.style.removeProperty('overflow');
    body.style.removeProperty('pointer-events');
    body.style.removeProperty('position');
    body.style.removeProperty('top');
    body.style.removeProperty('left');
    body.style.removeProperty('right');
    window.scrollTo(0, this.state.scrollPosition);
  }

  componentDidMount() {
    // 2. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
    // Specifically, the target element is the one we would like to allow scroll on (NOT a parent of that element).
    // This is also the element to apply the CSS '-webkit-overflow-scrolling: touch;' if desired.
    let targetElement = document.querySelector('.gallery-detail');
    this.setState({targetElement:targetElement})
  }

  componentWillUnmount() {
    // 5. Useful if we have called disableBodyScroll for multiple target elements,
    // and we just want a kill-switch to undo all that.
    // OR useful for if the `hideTargetElement()` function got circumvented eg. visitor
    // clicks a link which takes him/her to a different page within the app.
  }

  render() {

    return (
      <div className="App">
        <div>
          <Gallery isOpen={this.state.isModalOpen} closeFunc={this.closeModal} outModal={this.state.outModal}/>
          <div className="all">
            <Title />
            <Contents open={this.openModal} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
