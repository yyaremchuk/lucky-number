import React from 'react';

import SequenceComponent from './sequence.component';

function EmptyCombinationComponent() {
  return (
    <div className="row">
      <SequenceComponent data={Array(5).fill('-')} />
      <div className="mr-2"></div>
      <SequenceComponent data={Array(2).fill('-')} />
    </div>
  );
}

export default EmptyCombinationComponent;
