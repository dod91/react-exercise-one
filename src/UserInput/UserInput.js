import React from 'react';
import './UserInput.css';

function UserInput(props) {
  return (
    <div className="UserInput">
      <p>Insert your username</p>
      <input
        type="text"
        onChange={props.changed}
        value={props.username} />
    </div>
  );
};

export default UserInput;
