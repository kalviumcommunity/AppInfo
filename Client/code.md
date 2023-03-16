import React, { useRef } from 'react';

function MyForm() {
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // do your own handling of the form data here
  };

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit} action={process.env.REACT_APP_SERVER_URL} method="POST" encType="multipart/form-data">
        <label className="upload">
          // form inputs go here
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
