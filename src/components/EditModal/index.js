import Button from '../Button'
import styles from './EditModal.module.css'

function EditModal({closeModalFunction}){
    const aoSubmeter = (evento) => {
        evento.preventDefault()
        console.log('form enviado')
        closeModalFunction()
    }

    return(
        <div className={styles.editModal}>
            <div className={styles.buttonContainer}>
                <button onClick={closeModalFunction}><i class='fa fa-times-circle-o fa-2x'></i></button>
            </div>
            <div className={styles.content}>
                <h1>EDITAR CARD:</h1>
                <form id='new-video-form' onSubmit={aoSubmeter} className={styles.form}>
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
                    <div className={styles.input} style={{width:'48%'}}>
                        <label htmlFor='imagem'>Imagem</label>
                        <input type='text' id='imagem' name='imagem' placeholder='Digite o Link da imagem do vídeo' required/>
                    </div>
                    <div className={styles.input} style={{width:'48%'}}> 
                        <label htmlFor='link'>Vídeo</label>
                        <input type='text' id='link' name='link' placeholder='Digite o Link do Vídeo' required/>
                    </div>
                </div>
                <div className={styles.inputContainer}>
                    <div className={styles.input} style={{width:'48%'}}>
                        <label htmlFor='descricao'>Descrição</label>
                        <textarea type='text' rows='10' id='descricao' name='descricao' placeholder='Sobre o que é esse vídeo?' required/>
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