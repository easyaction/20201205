import React, { useEffect } from 'react'
import {ReactComponent as IconTalk} from '../../img/ic_talk.svg';
import './Share.css'

const KakaoShareButton = () => {
  useEffect(() => {
    createKakaoButton()
  }, [])
  const createKakaoButton = () => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao
      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init("62b2362e3323dc058e7baa14ea4f2f63")
      }
      kakao.Link.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        container: '#kakao-link-btn',
        objectType: 'feed',
        content: {
          title: '💒부부의 탄생🎉',
          description: '🤵김세영💖👰황선아',
          imageUrl: 'IMAGE_URL', // i.e. process.env.FETCH_URL + '/logo.png'
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      })
    }
  }
  return (
    <div className="kakao-share-button">
      {/* Kakao share button */}
      <button id="kakao-link-btn">
        <IconTalk />
      </button>
    </div>
  )
}
export default KakaoShareButton;