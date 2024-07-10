import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';

export const VideoContext = createContext();

export const VideoProvider = ({children}) => {
    const [error, setError] = useState();
    const [videos, setVideos] = useState([]);
    const [categorys, setCategorys] = useState([]);

    /*useEffect(() => {
        const fetchVideos = async() =>{
            try{
                const response = await fetch('http://localhost:8000/videos');
                const videos = (await response.json());
                setVideos(videos);
            } catch(e){
                setError(e);
            }

        };

        fetchVideos();
    }, []);

    useEffect(() => {
        const fetchCategorys = async() =>{
            try{
                const response = await fetch('http://localhost:8000/categorys');
                const categorys = (await response.json());
                setCategorys(categorys);
            } catch(e){
                setError(e);
            }
        };

        fetchCategorys();
    }, []);}*/

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
        <VideoContext.Provider value={{videos, categorys, error}}>
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
            })
            .catch(() => alert("Vídeo Adicionado com Sucesso"))
    }

    return{
        addVideo,
    }
}