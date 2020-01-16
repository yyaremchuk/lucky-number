import React from 'react';

import { Draw } from '@lucky-number/models';
import CombinationComponent from '../../components/combination.component';

function PlayedCombinationsComponent(props: { draw: Draw }) {
  return (
    <div>
      <h2>Played</h2>
      {props.draw.played.map(comb => (
        <CombinationComponent data={comb} key={comb.id} />
      ))}
    </div>
  );
}

export default PlayedCombinationsComponent;
