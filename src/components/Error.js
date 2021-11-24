import React from "react";

function Error() {
  return (
    <div>
      <h1 className='display-4'>
        <span className='text-danger'>ERROR 404 </span>Page Not Found
      </h1>
      <p className='lead'>Sorry, this page doesnot exists!</p>
    </div>
  );
}

export default Error;
