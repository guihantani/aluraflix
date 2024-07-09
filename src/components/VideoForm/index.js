import Button from '../Button'
import styles from './VideoForm.module.css'
import { Form } from "react-router-dom"

function VideoForm(){
    const aoSubmeter = (evento) => {
        evento.preventDefault()
        console.log('form enviado')
    }

    const clearForm = () =>{
        document.getElementById("new-video-form").reset();
    }

    return(
        <>
            <div className={styles.text}>
                <h1>NOVO VÍDEO</h1>
                <p>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO</p>
            </div>
            <form id='new-video-form' onSubmit={aoSubmeter} className={styles.form}>
                <h2>Criar Card</h2>
                <div className={styles.inputContainer}>
                    <div className={styles.input} style={{width:'40%'}}>
                        <label htmlFor='titulo'>Título</label>
                        <input type='text' id='titulo' name='titulo' placeholder='Digite o Título do vídeo' required/>   
                    </div>
                    <div className={styles.input} style={{width:'50%'}}>
                        <label htmlFor='categoria'>Categoria</label>
                        <select id="categoria" name="categoria">
                            <option value="Front End">Front End</option>
                            <option value="Back End">Back End</option>
                            <option value="Mobile">Mobile</option>
                        </select>
                    </div>
                </div>
                <div className={styles.inputContainer}>
                    <div className={styles.input} style={{width:'48.5%'}}>
                        <label htmlFor='imagem'>Imagem</label>
                        <input type='text' id='imagem' name='imagem' placeholder='Digite o Link da imagem do vídeo' required/>
                    </div>
                    <div className={styles.input} style={{width:'48.5%'}}> 
                        <label htmlFor='link'>Vídeo</label>
                        <input type='text' id='link' name='link' placeholder='Digite o Link do Vídeo' required/>
                    </div>
                </div>
                <div className={styles.input} style={{width:'48.5%'}}>
                    <label htmlFor='descricao'>Descrição</label>
                    <textarea type='text' rows='10' id='descricao' name='descricao' placeholder='Sobre o que é esse vídeo?' required/>
                </div>
                <div>
                    <Button type="submit" borderColor='#2271d1'>CONFIRMAR</Button>
                    <Button type='reset'>LIMPAR</Button>
                </div>
            </form>
        </>
    )
}

export default VideoForm