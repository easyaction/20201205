import { Component } from "react";
import "./Title.css";
import { ReactComponent as IconX } from "../../img/ic_main_x.svg";
class Title extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      dday: this.getDDay(),
    };
  }
  render() {
    return (
      <div className="main">
        <div className="container">
          <div className="header">
            <div className="title">
              <h1>
                부부의
                <br />
                탄생
              </h1>
            </div>
            <div className="d-day">
              <p>D-{this.state.dday}</p>
            </div>
          </div>
          <div className="footer">
            <div className="schedule">
              <p>
                2020.12.5
                <br />
                오후 12시
                <br />
                보성성당
              </p>
            </div>
            <div className="name">
              <p>김세영</p>
              <IconX />
              <p>황선아</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  getDDay(){
	var then = new Date(2020, 11, 5, 12, 0, 0, 0);
    var now = new Date();
    var diff = then.getTime() - now.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  }
}

export default Title;
