import React from 'react';

import './RemoveButton.css';

const RemoveButton = ({ deleteTask }) => {
  return (
    <button className="removeButton" onClick={deleteTask}>X</button>
  );
};

export default RemoveButton;
