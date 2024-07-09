import React from 'react';
import styles from './VideoCard.module.css'
import Modal from 'react-modal';
import ReactModal from 'react-modal';
import EditModal from '../../EditModal';

function VideoCard({category, imgLink, description}){
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }

    function closeModal() {
      setIsOpen(false);
    }

    return(
        <div className={styles.videoCard}>
            <img src={imgLink} alt={description} />
            <div className={styles.bar}>
                <button class="btn" ><i class="fa fa-trash fa-2x"></i> DELETAR</button>
                <button class="btn" onClick={openModal}><i class="fa fa-pencil-square-o fa-2x"></i> EDITAR</button>
                <ReactModal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Modal de exemplo"
                    className={styles.modal}
                    overlayClassName={styles.overlay}
                >
                    <EditModal closeModalFunction={closeModal}/>
                </ReactModal>
            </div>
        </div>
    )
}

export default VideoCard