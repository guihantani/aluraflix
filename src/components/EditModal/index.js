import { useState } from 'react';
import Button from '../Button'
import styles from './EditModal.module.css'
import { useVideoContext } from '../../context/VideoContext';

function EditModal({closeModalFunction, video}){
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [image, setImage] = useState('');

    const {editVideo} = useVideoContext();

    const submitForm = (evento) => {
        evento.preventDefault()
        const newVideo = {
            "id":video.id,
            "title":(title === "" ? video.title : title),
            "category":(category === "" ? video.category : category),
            "description":(description === "" ? video.description : description),
            "url": (url === "" ? video.url : url),
            "image": (image === "" ? video.image : image)
        }

        editVideo(newVideo);
        closeModalFunction();
    }

    return(
        <div className={styles.editModal}>
            <div className={styles.buttonContainer}>
                <button onClick={closeModalFunction}><i className='fa fa-times-circle-o fa-2x'></i></button>
            </div>
            <div className={styles.content}>
                <h1>EDITAR CARD:</h1>
                <form id='new-video-form' onSubmit={submitForm} className={styles.form}>
                <div className={styles.inputContainer}>
                    <div className={`${styles.input} ${styles.titulo}`}>
                        <label htmlFor='titulo'>Título</label>
                        <input type='text' id='titulo' name='titulo' placeholder='Digite o Título do vídeo' defaultValue={video.title} onChange={((event) => {
                            setTitle(event.target.value)
                        })}/>   
                    </div>
                    <div className={`${styles.input} ${styles.categoria}`}>
                        <label htmlFor='categoria'>Categoria</label>
                        <select id="categoria" name="categoria" defaultValue={video.category} onChange={((event) => {
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
                        <input type='text' id='imagem' name='imagem' placeholder='Digite o Link da imagem do vídeo' defaultValue={video.image} onChange={((event) => {
                            setImage(event.target.value)
                        })}/>
                    </div>
                    <div className={`${styles.input} ${styles.image_link}`}> 
                        <label htmlFor='link'>Vídeo</label>
                        <input type='text' id='link' name='link' placeholder='Digite o Link do Vídeo' defaultValue={video.url} onChange={((event) => {
                            setUrl(event.target.value)
                        })}/>
                    </div>
                </div>
                <div className={styles.inputContainer}>
                    <div className={`${styles.input} ${styles.image_link}`}>
                        <label htmlFor='descricao'>Descrição</label>
                        <textarea type='text' rows='10' id='descricao' name='descricao' placeholder='Sobre o que é esse vídeo?' defaultValue={video.description} onChange={((event) => {
                            setDescription(event.target.value)
                        })}/>
                    </div>
                    <div className={styles.buttons} style={{width:'48%'}}>
                        <Button type="submit" borderColor='#2271d1'>CONFIRMAR</Button>
                        <Button type='reset'>LIMPAR</Button>
                    </div>
                </div>
            </form>
            </div>
        </div>
    )
}

export default EditModal