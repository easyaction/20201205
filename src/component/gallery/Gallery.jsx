import {Component} from "react";
import "./Gallery.css";
import {ReactComponent as IconDelete} from '../../img/btn_delete.svg';
import Image1 from '../../img/gallery/img_03_gallery_03_detail_01@2x.png';
import Image2 from '../../img/gallery/img_03_gallery_03_detail_02@2x.png';
import Image3 from '../../img/gallery/img_03_gallery_03_detail_03@2x.png';
import Image4 from '../../img/gallery/img_03_gallery_03_detail_04@2x.png';
import Image5 from '../../img/gallery/img_03_gallery_03_detail_05@2x.png';
import Image6 from '../../img/gallery/img_03_gallery_03_detail_06@2x.png';
import Image7 from '../../img/gallery/img_03_gallery_03_detail_07@2x.png';
import Image8 from '../../img/gallery/img_03_gallery_03_detail_08@2x.png';

class Gallery extends Component {
  render() {
    const {isOpen, closeFunc, outModal} = this.props;
    return (<>
      {isOpen ? (
        <div className={outModal ? "gallery-detail out" : "gallery-detail"} id="gallery">
        <div className="head">
          <div className="title">
            <p>사진첩</p>
          </div>
          <div className="icon-delete" onClick={closeFunc}>
            <IconDelete onClick={closeFunc}/>
          </div>
        </div>
        <div className="body">
          <img src={Image1} alt="" />
          <img src={Image2} alt="" />
          <img src={Image3} alt="" />
          <img src={Image4} alt="" />
          <img src={Image5} alt="" />
          <img src={Image6} alt="" />
          <img src={Image7} alt="" />
          <img src={Image8} alt="" />
        </div>
      </div>) : null}
    </>);
  }
}

export default Gallery;
