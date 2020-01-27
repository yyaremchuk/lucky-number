import React from 'react';

import { Draw } from '@lucky-number/models';
import CombinationComponent from '../../components/combination.component';
import getRandomData from '../../helpers/data.utils';

function SuggestedCombinationsComponent(props: {
  draw: Draw;
  onUpdate: Function;
}) {
  const handleGenerate = () => {
    const generated = getRandomData(20);
    props.onUpdate({
      ...props.draw,
      suggested: [...props.draw.suggested, ...generated]
    });
  };

  const handleSelect = (comb: string) => {
    props.onUpdate({
      ...props.draw,
      suggested: [...props.draw.suggested.filter(item => item !== comb)],
      played: [...props.draw.played, comb]
    });
  };

  const buttons = !props.draw.result ? (
    <div className="row">
      <button className="m-2">Add combination(s)</button>
      <button className="m-2" onClick={handleGenerate}>
        Generate
      </button>
    </div>
  ) : null;

  return (
    <div>
      <h2>Suggested</h2>
      {buttons}
      {props.draw.suggested.map(comb => (
        <div
          className="row pt-1 clickable"
          onClick={() => handleSelect(comb)}
          key={comb}
        >
          <CombinationComponent data={comb} result={props.draw.result} />
        </div>
      ))}
    </div>
  );
}

export default SuggestedCombinationsComponent;
