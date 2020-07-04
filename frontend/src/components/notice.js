import React, {useState, useEffect} from 'react';
import {Alert} from 'react-bootstrap'

const Notice = ({message, heading, variant}) => {
  const [showNotice, setShowNotice] = useState(true)


  if (showNotice) {
    return (
      <Alert variant={variant} onClose={() => {setShowNotice(false)}} dismissible>
        <Alert.Heading>{heading}</Alert.Heading>
        <p>
          {message}
        </p>
      </Alert>
    );
  }
  else {
    return null;
  }
}

export default Notice