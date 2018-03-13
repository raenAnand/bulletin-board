import Modal from 'react-modal';
import React, { Component} from 'react';
import FontAwesome from 'react-fontawesome';
import { FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';


const modalStyle = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class AddEntry extends Component {

  constructor () {
    super();

    this.state = {
      modalIsOpen : false
    };

    this.openModal = this.openModal.bind(this); 
    this.afterOpenModal = this.afterOpenModal.bind(this); 
    this.closeModal = this.closeModal.bind(this); 
  }
  
  openModal () {
    this.setState({
      modalIsOpen: true
    });
  }

  afterOpenModal () {

  }

  closeModal () {
    this.setState({
      modalIsOpen: false
    });
  }

  render() {

    return (
      <div>
        <Button className="add-entry-button" bsStyle="primary" onClick={this.openModal}>
          <span>Add entry</span>
          <FontAwesome
            className="super-crazy-colors"
            name="plus"
            size="1x"
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          />
        </Button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestCLose={this.closeModal}
          style={modalStyle}
          content-label="add entry modal"
        >
          <h2>Add New Entry</h2>
          <form className="add-entry-form">

            <FormGroup>
              <ControlLabel>Segment Title</ControlLabel>
              <FormControl type="text" placeholder="segment title"/>
            </FormGroup>

            <FormGroup>
              <ControlLabel>Priority</ControlLabel>
              <FormControl type="text" placeholder="priority"/>
            </FormGroup>

            <FormGroup>
              <ControlLabel>Duration</ControlLabel>
              <FormControl type="text" placeholder="duration"/>
            </FormGroup>

            <FormGroup>
              <ControlLabel>Url</ControlLabel>
              <FormControl type="text" placeholder="url"/>
            </FormGroup>
            <Button className="submit-button" bsStyle="primary" type="submit">Submit</Button>
            <Button className="cancel-button" bsStyle="default" onClick={this.closeModal}>Cancel</Button>
          </form>

        </Modal>
        
      </div>
    );
  }

}

export default AddEntry;
