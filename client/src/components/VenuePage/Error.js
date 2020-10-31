import React, {useState} from 'react';
import {Alert} from 'react-bootstrap';

export default function Error(props) {

  
    return (
      <Alert variant="danger" onClose={props.onClose} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          {props.message}
        </p>
      </Alert>
    );
  

}

