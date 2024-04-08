import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './style.css'

function AddModal({ show, handleClose, handleChange, selectedCustomer, handleSubmit, validated }) {
    const { name, email, avatar, first_name, last_name, id, filename } = selectedCustomer
    return (
        <>
            <div id='add-modal-container'>
                <Modal className='add-modal' centered show={show} onHide={handleClose}>
                    <Modal.Header className='modal-header' closeButton>
                        <Modal.Title>{selectedCustomer?.id ? 'Edit Customer' : 'Add New Customer'}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group className="mb-4 mt-5" >
                                <Form.Control
                                    type="text"
                                    placeholder="Customer Name"
                                    autoFocus
                                    required name='name' value={id ? name || `${first_name} ${last_name}` : name || ''} onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-4"
                            >
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    required name='email' value={email || ''} onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-4">
                                <Form.Label htmlFor="avatar" className="custom-file-upload">
                                    <span className='upload-image'>Upload Photo</span> {avatar && (filename ?? avatar.split('/').pop())}
                                </Form.Label>
                                <Form.Control
                                    type="file"
                                    size="sm"
                                    required={!avatar}
                                    id='avatar'
                                    name='avatar'
                                    onChange={handleChange}
                                    accept="image/*"
                                    placeholder="Upload Photo"
                                    style={{ display: "none" }}
                                />
                            </Form.Group>
                            <Button type='submit' className='add-button mt-3' variant="primary">
                                {selectedCustomer?.id ? 'Edit Customer' : 'Add Customer'}
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    );
}

export default AddModal;