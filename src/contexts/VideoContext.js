import React,{useState, createContext, useEffect} from 'react'
import { getVideoById } from '../api/movie-api';
export const VideoContex = createContext();

const VideoContext = ({children}) => {
    
    const [isOpen, setOpen] = useState(false)
    const [video, setVideo] = useState([])
    const [id, setId] = useState(null)

    const dato = id ? true : false;
    
    useEffect(() => {
        if(id !== null){
            getVideoById(id).then((response)=>{
                let idvideo =null;
                if(response.results){
                    response.results.map((video)=>{
                        if(video.site==='YouTube' && !idvideo){
                            idvideo = video.key;
                        }
                        setVideo(idvideo)
                    })
                    setOpen(dato)
                }
            })
        }
    }, [id])

    return (
        <VideoContex.Provider
            value={{
                video,
                setVideo,
                id,
                setId,
                isOpen, 
                setOpen
            }}
        >
            {children}
        </VideoContex.Provider>
    )
}
export default VideoContext