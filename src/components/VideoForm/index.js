import { useState } from 'react'
import Button from '../Button'
import styles from './VideoForm.module.css'
import { useVideoContext } from '../../context/VideoContext';
import { v4 as uuidv4 } from 'uuid';

function VideoForm(){
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [image, setImage] = useState('');

    const {addVideo} = useVideoContext();

    const submitForm = (evento) => {
        evento.preventDefault()
        const newVideo = {
            "id":uuidv4(),
            "title":title,
            "category":category,
            "description":description,
            "url": url,
            "image": image
        }

        addVideo(newVideo);
    }

    return(
        <>
            <div className={styles.text}>
                <h1>NOVO VÍDEO</h1>
                <p>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO</p>
            </div>
            <form id='new-video-form' onSubmit={submitForm} className={styles.form}>
                <h2>Criar Card</h2>
                <div className={styles.inputContainer}>
                    <div className={`${styles.input} ${styles.titulo}`} >
                        <label htmlFor='titulo'>Título</label>
                        <input type='text' id='titulo' name='titulo' placeholder='Digite o Título do vídeo' onChange={((event) => {
                            setTitle(event.target.value)
                        })} required/>   
                    </div>
                    <div className={`${styles.input} ${styles.categoria}`}>
                        <label htmlFor='categoria'>Categoria</label>
                        <select id="categoria" name="categoria" required onChange={((event) => {
                            setCategory(event.target.value)
                        })}>
                            <option value="" hidden>Selecione uma categoria</option>
                            <option value="frontend">Front End</option>
                            <option value="backend">Back End</option>
                            <option value="inovacao_gestao">Inovação e Gestão</option>
                        </select>
                    </div>
                </div>
                <div className={styles.inputContainer}>
                    <div className={`${styles.input} ${styles.image_link}`}>
                        <label htmlFor='imagem'>Imagem</label>
                        <input type='text' id='imagem' name='imagem' placeholder='Digite o Link da imagem do vídeo' onChange={((event) => {
                            setImage(event.target.value)
                        })} required/>
                    </div>
                    <div className={`${styles.input} ${styles.image_link}`}> 
                        <label htmlFor='link'>Vídeo</label>
                        <input type='text' id='link' name='link' placeholder='Digite o Link do Vídeo' onChange={((event) => {
                            setUrl(event.target.value)
                        })} required/>
                    </div>
                </div>
                <div className={`${styles.input} ${styles.image_link}`}>
                    <label htmlFor='descricao'>Descrição</label>
                    <textarea type='text' rows='10' id='descricao' name='descricao' placeholder='Sobre o que é esse vídeo?' onChange={((event) => {
                            setDescription(event.target.value)
                        })} required/>
                </div>
                <div className={styles.buttons}>
                    <Button type="submit" borderColor='#2271d1'>CONFIRMAR</Button>
                    <Button type='reset'>LIMPAR</Button>
                </div>
            </form>
        </>
    )
}

export default VideoForm