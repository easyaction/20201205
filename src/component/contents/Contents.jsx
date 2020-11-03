import {Component} from "react";
import "./Contents.css";
import ImageInvitation from '../../img/img_01_invitaion@2x.png';
import ImageGallery1 from '../../img/img_02_gallery_01@2x.png';
import ImageMap from '../../img/img_03_map_01@2x.png';
import { ReactComponent as IconLink } from "../../img/ic_link.svg";
import { ReactComponent as IconTalk } from "../../img/ic_talk.svg";

class Contents extends Component {
  render() {
    return (
      <div>
        <div className="greeting">
          <div className="container">
            <div className="head">
              <p>인삿말</p>
            </div>
            <div className="body">
              <p>오랜 연인이었던 저희가 <br />부부가 되어 새로운 가정을 이룹니다.<br />저희의 소중한 시작을 함께 축하해 주세요!</p>
            </div>
            <div className="image_invitation"><img src={ImageInvitation} alt="" /></div>
            <div className="name_section">
              <span className="others">
                <span className="name">김진옥</span> ∙ <span className="name">최오복</span>의 장남<span
                className="name">  세영</span>
                <br />
                <span className="name">황 훈</span> ∙ <span className="name">김선경</span>의 장녀<span
                className="name">  선아</span>
              </span>
            </div>
          </div>
        </div>
        <div className="gallery">
          <div className="container">
            <div className="title">
              <p>사진첩</p>
            </div>
            <div className="images">
              <img src={ImageGallery1} alt="" />
              <div className="more">
                <p>더보기></p>
              </div>
            </div>
          </div>
        </div>
        <div className="maps">
          <div className="container">
            <div className="title">
              <p>오시는 길</p>
            </div>
            <div className="body">
              <p>2020년 12월 5일 오후 12시<br />전라남도 보성군 천주교 보성성당</p>
            </div>
            <div className="map_image">
              <img src={ImageMap} alt="" />
            </div>
            <div className="desc">
              <p>혼인성사 후 피로연을 준비했습니다.<br />부디 참석하시어 즐거운 시간 보내시기 바랍니다.</p>
            </div>
          </div>
        </div>
        <div className="account">
          <div className="container">
            <div className="title">
              <p>마음 전하실 곳</p>
            </div>
            <div className="body">
              <p ><span className="bold">∙신랑측 혼주</span>김진옥 농협 621-01-452104-068</p>
              <p ><span className="bold">∙신부측 혼주</span>황훈 하나은행 172-910144-50907</p>
            </div>
          </div>
       </div>
        <div className="share">
          <div className="container">
            <div className="title">
              <p>소식 전하기</p>
            </div>
            <div className="icons">
              <div className="circle">
                <IconLink/>
              </div>
              <div className="circle">
                <IconTalk/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contents;
