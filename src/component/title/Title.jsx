import { Component } from "react";
import "./Title.css";
import { ReactComponent as XIcon } from "../../img/ic_main_x.svg";

class Title extends Component {
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
              <p>D-NN</p>
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
			<XIcon />
			<p>황선아</p>
		  </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Title;
