import React from 'react';

import { Draw } from '@lucky-number/models';
import CombinationComponent from './combination.component';
import EmptyCombinationCompnent from './empty-combination.component';
import DateComponent from './date.component';

function DrawInfoComponent(props: { draw: Draw }) {
  const combinationComponent = props.draw.result ? (
    <CombinationComponent data={props.draw.result} />
  ) : (
    <EmptyCombinationCompnent />
  );

  return (
    <div className="history-item">
      <DateComponent date={props.draw.date} />
      <div className="pt-1">{combinationComponent}</div>
    </div>
  );
}

export default DrawInfoComponent;
