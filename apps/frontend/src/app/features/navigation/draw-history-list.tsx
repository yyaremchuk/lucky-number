import React, { useState } from 'react';

import { Draw } from '@lucky-number/models';
import DrawInfoComponent from '../../components/draw-info.component';
import AddRawFormComponent from './add-draw-form.component';

function DrawHistoryList(props: {
  list: Array<Draw>;
  onSelect: Function;
  onAdd: Function;
}) {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (value: Draw) => {
    props.onAdd(value);
    setShowForm(false);
  };

  const dynamicForm = showForm ? (
    <AddRawFormComponent
      handleCancel={handleClick}
      handleSubmit={handleSubmit}
    />
  ) : (
    <button className="m-2" onClick={handleClick}>
      Add
    </button>
  );
  return (
    <div>
      <h2>List of Draws</h2>
      {dynamicForm}
      {props.list.map((draw: Draw, index: number) => (
        <div
          className="clickable"
          onClick={() => props.onSelect(index)}
          key={draw._id}
        >
          <DrawInfoComponent draw={draw} />
        </div>
      ))}
    </div>
  );
}

export default DrawHistoryList;
