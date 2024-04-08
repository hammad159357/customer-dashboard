import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import deleteImage from '../../../assets/Icons/delete.svg'
import './style.css'

function DeleteModal({ show, handleClose, onDelete }) {

    return (
        <>
            <Modal className='delete-modal' centered show={show} onHide={handleClose}>
                <Modal.Header className='modal-header' closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className='delete-body'>
                        <img src={deleteImage} />
                        <div className='heading'>Are you sure?</div>
                        <p className='text'>Do you really want to delete this customer? This process can not be undone.</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-evenly", gap: "20px" }}>
                        <Button className='cancel-button' variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button className='delete-button' variant="primary" onClick={onDelete}>
                            Delete
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default DeleteModal;