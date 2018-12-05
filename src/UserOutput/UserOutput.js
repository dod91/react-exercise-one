import React from 'react';
import './UserOutput.css';

function UserOutput(props) {
  const inlineStyle = {
    color: 'red',
  };
  return (
    <div className="UserOutput">
      <p>Paragraph 1, my username is {props.username}</p>
      <p style={inlineStyle}>Paragraph 2 is red because of inline style</p>
    </div>
  );
}

export default UserOutput;
