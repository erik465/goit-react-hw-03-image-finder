import React from 'react'
import {StyledItem} from './ImageGalleryItem.styled'
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

class ImageGalleryItem extends React.Component {
   
  state = {
    modalOpen : false
  }
  
  openModal = () => {
    document.body.style.overflow = 'hidden';
    this.setState(prevState => {
      return {
        modalOpen : true
      }
    })
  }

 

  closeModal= () => {
    document.body.style.overflow = 'unset';
    this.setState(prevState => {
      return {
        modalOpen : false
      }
    })
  }


  render (){
  return (
    <StyledItem className="gallery-item">
        <img src={this.props.small} alt="" onClick={this.openModal}/>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img src={this.props.large} alt=""/>
        </Modal>
    </StyledItem>
  )
  }
}

export default ImageGalleryItem
