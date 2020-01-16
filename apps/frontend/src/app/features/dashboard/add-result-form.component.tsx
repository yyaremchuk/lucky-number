import React, { useState } from 'react';

function AddResultFormComponent(props: {
  handleCancel: () => void;
  handleSubmit: (obj: string) => void;
}) {
  const [result, setResult] = useState('');
  const handleSubmit = () => {
    event.preventDefault();

    if (!result) {
      return;
    }

    props.handleSubmit(result);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResult(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-1">
        <label>
          Result:
          <input
            type="text"
            name="result"
            value={result}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="mb-1">
        <input type="button" value="Cancel" onClick={props.handleCancel} />
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}

export default AddResultFormComponent;
