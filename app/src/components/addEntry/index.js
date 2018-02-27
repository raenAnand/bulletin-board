import React, { Component} from 'react';
import { FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

class AddEntry extends Component {

  render() {

    return (
      <div>
        <h2>Add New Entry</h2>
        <form className="add-entry-form">

          <FormGroup>
            <ControlLabel>Segment Title</ControlLabel>
            <FormControl type="text" placeholder="segment title"/>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Owner</ControlLabel>
            <FormControl type="text" placeholder="owner"/>
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
          <Button bsStyle="primary" type="submit">Submit</Button>
        </form>
      </div>
    );
  }

}

export default AddEntry;
