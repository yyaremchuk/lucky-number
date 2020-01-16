import React from 'react';

function SequenceComponent(props: { data: Array<number | string> }) {
  return (
    <div className="row">
      {props.data.map((value: number | string, index: number) => (
        <div className="value mr-1 ptb-1 text-center" key={index}>
          {value}
        </div>
      ))}
    </div>
  );
}

export default SequenceComponent;
