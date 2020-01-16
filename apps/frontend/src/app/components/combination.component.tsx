import React from 'react';

import { Combination } from '@lucky-number/models';
import SequenceComponent from './sequence.component';

function CombinationComponent(props: { data: Combination }) {
  return (
    <div className="row">
      <SequenceComponent data={props.data.mains} />
      <div className="mr-2"></div>
      <SequenceComponent data={props.data.lucky} />
    </div>
  );
}

export default CombinationComponent;
