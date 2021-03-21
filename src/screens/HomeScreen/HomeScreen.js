import React from 'react'
import Movies from '../../components/Movies/general-movies/Movies'
import ModalVideos from '../../components/Movies/ModalVideo';
import 'react-modal-video/scss/modal-video.scss';
import './HomeScreen.styles.scss'

const HomeScreen = () => {
    return (
        <div>
            <div className="homeScreen">
                <Movies/>
                <ModalVideos/>
            </div>
        </div>
    )
}

export default HomeScreen
