import React from "react";
import propTypes from 'prop-types'


function YoutubeVideo({ 
    videoId, 
    videoName,
    videoLength, 
    videoDescription,
    videoAuthor,
    children  // 고유값, 변경불가
}){
    return(
        <div id ={videoId}>
            <h1>{videoName} - {(parseInt(videoLength) / 1000 ).toFixed(1)} MB</h1>
            <h3>작성자 - {videoAuthor}</h3>
            <p>{videoDescription}</p>
            {children}
        </div>
    )
}

export default YoutubeVideo

// 데이터 타입검증
YoutubeVideo.propTypes = { // 내가 원하는 type이 아닐경우 오류를 반환, 실행은 됨
    videoId : propTypes.string, 
    videoName: propTypes.string,
    videoLength: propTypes.string, // videoLength: propTypes.number number를 원하나 string일 경우
    videoDescription : propTypes.string
}

// props 데이터 기본값 설정
YoutubeVideo.defaultProps  = {
    videoAuthor: '디폴트작성자' //videoAuthor : null 또는 undefined 일때
}