import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';

export const VideoContext = createContext();

export const VideoProvider = ({children}) => {
    const [videos, setVideos] = useState([]);
    const [categorys, setCategorys] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:8000/videos')
            .then(response => {
                setVideos(response.data)
            })
    },[])

    useEffect(() =>{
        axios.get('http://localhost:8000/categorys')
            .then(response =>{
                setCategorys(response.data)
            })
    },[])

    return(
        <VideoContext.Provider value={{videos, setVideos, categorys}}>
            {children}
        </VideoContext.Provider>
    )
}

export function useVideoContext(){
    const{videos, setVideos} = useContext(VideoContext)

    function addVideo(video){
        axios
            .post('http://localhost:8000/videos',{
                "id":video.id,
                "title":video.title,
                "category":video.category,
                "description":video.description,
                "url": video.url,
                "image": video.image
            })
            .then((response)=>{
                setVideos([...videos, response.data])
                alert("Vídeo adicionado com sucesso!")
                window.location.reload();
            })
            .catch(() => alert("Falha ao adicionar o vídeo, tente novamente mais tarde"))
    }

    function deleteVideo(video){        
        axios
            .delete(`http://localhost:8000/videos/${video.id}`)
            .then(() =>{
                setVideos(videos.filter((currentVideo) => currentVideo.id !== video.id))
            })
            .catch(() => alert("Falha ao deletar o vídeo, tente novamente mais tarde"))
    }

    function editVideo(video){
        axios
            .put(`http://localhost:8000/videos/${video.id}`,{
                "id":video.id,
                "title":video.title,
                "category":video.category,
                "description":video.description,
                "url": video.url,
                "image": video.image
            })
            .then(()=>{
                setVideos(videos.map(thisVideo => thisVideo.id === video.id ? video : thisVideo))
                alert("Vídeo editado com sucesso!")
            })
            .catch(() => alert("Falha ao editar o vídeo, tente novamente mais tarde"))
    }

    return{
        addVideo,
        deleteVideo,
        editVideo,
    }
}