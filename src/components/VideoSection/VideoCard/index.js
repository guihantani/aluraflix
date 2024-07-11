import React, { useContext } from 'react';
import styles from './VideoCard.module.css'
import Modal from 'react-modal';
import EditModal from '../../EditModal';
import { useVideoContext, VideoContext } from '../../../context/VideoContext';

function VideoCard({video}){
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const {deleteVideo} = useVideoContext();
    const {categorys} = useContext(VideoContext)

    const videoCategory = categorys.find(c => c.name === video.category)

    function openModal() {
      setIsOpen(true);
    }

    function closeModal() {
      setIsOpen(false);
    }

    return(
        <div className={styles.videoCard} style={{border: `solid 4px ${videoCategory.tagColor}`}}>
            <a href={video.url}>
                <img src={video.image} alt={video.title}/>
            </a>
            <div className={styles.bar} style={{borderTop: `solid 4px ${videoCategory.tagColor}`}}>
                <button className="btn" onClick={() => deleteVideo(video)}><i className="fa fa-trash fa-2x"></i> DELETAR</button>
                <button className="btn" onClick={openModal}><i className="fa fa-pencil-square-o fa-2x"></i> EDITAR</button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    ariaHideApp={false}
                    contentLabel="Modal de Edição"
                    className={styles.modal}
                    overlayClassName={styles.overlay}
                >
                    <EditModal closeModalFunction={closeModal} video={video}/>
                </Modal>
            </div>
        </div>
    )
}

export default VideoCard