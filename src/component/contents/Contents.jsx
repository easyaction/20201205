import {Component} from "react";
import "./Contents.css";
import ImageInvitation from '../../img/img_01_invitaion@2x.png';
import ImageGallery1 from '../../img/img_02_gallery_01@2x.png';
import {ReactComponent as IconLink} from "../../img/ic_link.svg";
import KakaoShareButton from '../share/Share';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import {ToastsContainer, ToastsContainerPosition, ToastsStore} from 'react-toasts';

class Contents extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    window.Kakao.init("62b2362e3323dc058e7baa14ea4f2f63")
    console.log(window.Kakao.isInitialized())
    let marker = new window.naver.maps.LatLng(34.770503, 127.084419);
    var mapOptions = {
      center: marker,
      zoom: 17,
    };

    var map = new window.naver.maps.Map('map', mapOptions);
    var mark = new window.naver.maps.Marker({
      map: map,
      position: marker
    });
  }

  render() {
    const {open} = this.props;
    return (
      <div>
        <div className="greeting">
          <div className="container">
            <div className="head">
              <p>인삿말</p>
            </div>
            <div className="body">
              <p>오랜 시간 사랑을 키워온 저희가<br/>하느님의 축복 속에 혼인 예식을 올립니다.<br/>저희의 소중한 시작에 많은 축하 부탁드립니다.</p>
            </div>
            <div className="image_invitation"><img src={ImageInvitation} alt="" /></div>
            <div className="name_section">
              <span className="others">
                <span className="name">김진옥</span> ∙ <span className="name">최오복</span>의 장남<span
                className="name">  세영</span>
                <br />
                <div className="christian-name">
                  <span>암브로시오</span><span>효주 아녜스</span><span>세영 알렉시오</span>
                </div>
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
              <div className="more" onClick={open}>
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
            <div className="map_image" id="map">
            </div>
            <div className="desc">
              <p>혼인예식 후 피로연을 준비했습니다.<br />부디 참석하시어 즐거운 시간 보내시기 바랍니다.</p>
            </div>
          </div>
        </div>
        <div className="account">
          <div className="container">
            <div className="title">
              <p>마음 전하실 곳</p>
            </div>
            <div className="body">
              <p><span className="bold">∙신랑측 혼주</span>김진옥 농협 621-01-452104-068</p>
              <p><span className="bold">∙신부측 혼주</span>황훈 하나은행 172-910144-50907</p>
            </div>
          </div>
        </div>
        <div className="share">
          <div className="container">
            <div className="title">
              <p>소식 전하기</p>
            </div>
            <div className="icons">
              <div className="circle" onClick={() => ToastsStore.info("링크 복사 완료👌")}>
                <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_CENTER}/>
                <CopyToClipboard text={window.location.href} >
                <IconLink />
                </CopyToClipboard>
              </div>
              <div className="circle">
                <KakaoShareButton/>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    )
  }
}

export default Contents;
