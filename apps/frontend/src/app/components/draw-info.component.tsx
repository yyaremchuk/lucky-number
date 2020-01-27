import React from 'react';

import { Draw } from '@lucky-number/models';
import CombinationComponent from './combination.component';
import DateComponent from './date.component';

function DrawInfoComponent(props: { draw: Draw }) {
  const data = props.draw.result ? props.draw.result : '-.-.-.-.-.-.-';

  return (
    <div className="history-item">
      <DateComponent date={props.draw.date} />
      <div className="pt-1">
        <CombinationComponent data={data} />
      </div>
    </div>
  );
}

export default DrawInfoComponent;
