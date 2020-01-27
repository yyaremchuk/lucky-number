import React from 'react';

function CombinationComponent(props: { data: string; result?: string }) {
  const values: Array<string> = props.data.split('.');
  const resultValues = props.result ? props.result.split('.') : null;

  return (
    <div className="row mb-1">
      {values.map((value: string, index: number) => {
        const className = contains(value, index, resultValues)
          ? 'value mr-1 text-center won'
          : 'value mr-1 text-center';
        return (
          <div className={className} key={index}>
            {value}
          </div>
        );
      })}
    </div>
  );
}

function contains(
  value: string,
  index: number,
  resultValues: Array<string>
): boolean {
  if (!resultValues) {
    return false;
  }

  const foundIndex = resultValues.indexOf(value);

  if (foundIndex === -1) {
    return false;
  }

  return (index < 5 && foundIndex < 5) || (index > 4 && foundIndex > 4);
}

export default CombinationComponent;
