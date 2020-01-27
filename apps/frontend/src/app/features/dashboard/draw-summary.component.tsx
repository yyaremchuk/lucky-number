import React, { useState } from 'react';

import { Draw } from '@lucky-number/models';
import AddResultFormComponent from './add-result-form.component';
import DrawInfoComponent from '../../components/draw-info.component';

function DrawSummaryComponent(props: { draw: Draw; onUpdate: Function }) {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  const handleSubmit = (value: string) => {
    const numbers = value.split(' ').join('.');
    props.onUpdate({
      ...props.draw,
      result: numbers
    });
    setShowForm(false);
  };

  if (!props.draw.result && !showForm) {
    return (
      <div className="row">
        <DrawInfoComponent draw={props.draw} />
        <button className="m-2" onClick={handleClick}>
          Add result
        </button>
      </div>
    );
  } else if (!props.draw.result && showForm) {
    return (
      <AddResultFormComponent
        handleCancel={handleCancel}
        handleSubmit={handleSubmit}
      />
    );
  }

  return (
    <div className="row">
      <DrawInfoComponent draw={props.draw} />
    </div>
  );
}

export default DrawSummaryComponent;
