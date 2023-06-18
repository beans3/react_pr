import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ModalAlert from './ModalAlert'

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState('');

  const openModal = () => {
    if (modalText) {
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleInputChange = (e) => {
    setModalText(e.target.value);
  };

  const inputStyle = {
    width: '300px',
    padding: '10px',
    fontSize: '16px',
    display: 'block'
  };
  
  const buttonContainerStyle = {
    marginTop: '10px'
  };

  return (
    <div>
      <div>
        <input type='text' style={inputStyle} onChange={handleInputChange} />
        <button style={buttonContainerStyle} onClick={openModal}>입력</button>
      </div>
      <ModalAlert isOpen={isModalOpen} onClose={closeModal} modalText={modalText} />
    </div>
  );
};

export default App;