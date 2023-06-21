import React from 'react';

const SuccessMessage = ({ msg }) => {
  console.log("Inside SuccessMessage error = ",  msg);
  return (
    <div className='alert alert-success' role='alert'>
      {msg}
    </div>
  );
};

export default SuccessMessage;
  