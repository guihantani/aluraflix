import React from 'react';
import styles from './VideoCard.module.css'
import Modal from 'react-modal';
import ReactModal from 'react-modal';
import EditModal from '../../EditModal';

function VideoCard({video}){
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }

    function closeModal() {
      setIsOpen(false);
    }

    return(
        <div className={styles.videoCard}>
            <a href={video.url}>
                <img src={video.image} alt={video.title} />
            </a>
            <div className={styles.bar}>
                <button className="btn" ><i className="fa fa-trash fa-2x"></i> DELETAR</button>
                <button className="btn" onClick={openModal}><i className="fa fa-pencil-square-o fa-2x"></i> EDITAR</button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    ariaHideApp={false}
                    contentLabel="Modal de Edição"
                    className={styles.modal}
                    overlayClassName={styles.overlay}
                >
                    <EditModal closeModalFunction={closeModal}/>
                </Modal>
            </div>
        </div>
    )
}

export default VideoCard