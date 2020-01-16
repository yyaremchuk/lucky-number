import React from 'react';

import { Draw, Combination } from '@lucky-number/models';
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

  const handleSelect = (comb: Combination) => {
    props.onUpdate({
      ...props.draw,
      suggested: [...props.draw.suggested.filter(item => item.id !== comb.id)],
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
          key={comb.id}
        >
          <CombinationComponent data={comb} />
        </div>
      ))}
    </div>
  );
}

export default SuggestedCombinationsComponent;
