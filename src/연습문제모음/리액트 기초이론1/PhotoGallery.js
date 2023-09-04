import React, { Component } from 'react'

class PhotoGallery extends Component{
    state = {
        photos: []
    }

    //구현하기
    addPhoto = () => {
        const { photos } = this.state
        const photo = prompt("추가하려는 사진의 경로를 입력해주세요 !")
        this.setState({photos: this.state.photos.concat(photo)})
    }

    // 구현하기
    render(){
        const { photos } = this.state
        return(
            <>
            <button onClick={this.addPhoto}>사진추가하기</button>
            <h1>포토 갤러리</h1>
            ----------
            <div>
                {photos.map((photo, id)=> { return <img key = {id} src={photo}></img> })}
            </div>
            </>
        )
    }
}
export default PhotoGallery