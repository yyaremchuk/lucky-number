import React, { useState } from 'react';

import { Draw } from '@lucky-number/models';

interface AddRawFormState {
  date: string;
}

function AddRawFormComponent(props: {
  handleCancel: () => void;
  handleSubmit: (obj: Draw) => void;
}) {
  const [formValue, setFormValue] = useState<AddRawFormState>({
    date: ''
  });
  const handleSubmit = () => {
    event.preventDefault();

    if (!formValue || !formValue.date) {
      return;
    }

    props.handleSubmit({
      date: new Date(formValue.date),
      result: null,
      played: [],
      suggested: []
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setFormValue({
      ...formValue,
      [name]: value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-1">
        <label>
          Date:
          <input
            type="text"
            name="date"
            value={formValue.date}
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

export default AddRawFormComponent;
