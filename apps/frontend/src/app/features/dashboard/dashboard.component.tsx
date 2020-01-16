import React from 'react';

import { Draw } from '@lucky-number/models';

import DrawSummaryComponent from './draw-summary.component';
import PlayedCombinationsComponent from './played-combinations.component';
import SuggestedCombinationsComponent from './suggested-combinations.component';

function DashBoard(props: { draw: Draw; onUpdate: Function }) {
  return (
    <div>
      <h1>Selected Draw</h1>
      <DrawSummaryComponent draw={props.draw} onUpdate={props.onUpdate} />
      <div className="row">
        <div className="col mr-2">
          <PlayedCombinationsComponent draw={props.draw} />
        </div>
        <div className="col">
          <SuggestedCombinationsComponent
            draw={props.draw}
            onUpdate={props.onUpdate}
          />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
