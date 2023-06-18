const ModalAlert = ({ isOpen, onClose, modalText }) => {
  const modalStyle = {
    display: isOpen ? 'flex' : 'none',
    position: 'fixed',
    zIndex: 1,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
    fontSize: '25px'
  };

  const contentStyle = {
    backgroundColor: '#fefefe',
    padding: '20px',
    border: '1px solid #888',
    width: '50%',
    textAlign: 'center',
    borderRadius: '4px',
    position: 'relative'
  };

  const buttonStyle = {
    marginRight: '5px'
  };

  const handleComplete = () => {
    alert('완료되었습니다.');
    //onClose();
  };

  const handleCancel = () => {
    alert('취소되었습니다.');
    //onClose();
  };

  return (
    <div style={modalStyle} onClick={onClose}>
      <div style={contentStyle} onClick={e => e.stopPropagation()}>
        <span style={closeButtonStyle} className="close" onClick={onClose}>&times;</span>
        <h2>{modalText}</h2>
        <button style={buttonStyle} onClick={handleComplete}>완료</button>
        <button onClick={handleCancel}>취소</button>
      </div>
    </div>
  );
};

export default ModalAlert;