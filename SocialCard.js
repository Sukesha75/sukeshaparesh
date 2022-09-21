import './SocialCard.css';
import Location from './Location';
import Phone from './Phone';
import { useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { TiEdit } from 'react-icons/ti';
import { TiTrash } from "react-icons/ti";

const SocialCard = ({ userData, removeitem }) => {
    const [modal, setModal] = useState(false);
    return (
        <div className="card">
            <div className="card__title">{userData.name}</div>
            <div className="card__body">
                <Location address={userData.address} />
                <Phone number={userData.phone} type="Home" />
                <Phone number={userData.email} type="Cell" />
            </div>
            <footer className='card-foot'>
                <span className="icons">
                    <TiEdit onClick={() => setModal(true)} />
                </span>
                <span><TiTrash onClick={() => removeitem(userData.id)} /></span>
            </footer>
            <Modal
                size='lg'
                isOpen={modal}
                toggle={() => setModal(!modal)}
            >
                <ModalHeader
                    toggle={() => setModal(!modal)}
                >
                    <h3>Basic Header</h3>
                </ModalHeader>
                <ModalBody>
                    <form>
                        <div className="modal-input">
                            <span>Name: </span>
                            <input type="text" />
                        </div>
                        <div className="modal-input">
                            <span>Email:  </span>
                            <input type="text" />
                        </div>
                        <div className="modal-input">
                            <span>Phone: </span>
                            <input type="text" />
                        </div>
                    </form>
                </ModalBody>
            </Modal>
        </div>
    )
};

export default SocialCard;