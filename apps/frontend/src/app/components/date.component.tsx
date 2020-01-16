import React from 'react';

function DateComponent(props: { date: Date }) {
  return <div>Date: {props.date.toLocaleDateString()}</div>;
}

export default DateComponent;
