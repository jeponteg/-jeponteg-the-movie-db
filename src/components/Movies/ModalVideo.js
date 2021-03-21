import React,{useContext} from 'react'
import { VideoContex } from '../../contexts/VideoContext'
import ModalVideo from 'react-modal-video'

const ModalVideos = () => {

    const handleState = () => {
        setOpen(false)
        setId(null)
    }

    const { isOpen, setOpen, setId, video }=useContext(VideoContex)
    
    return (
        <ModalVideo 
            channel='youtube' 
            autoplay isOpen={isOpen} 
            videoId={video}
            onClose={() =>handleState() } 
        />
    )
}
export default ModalVideos
