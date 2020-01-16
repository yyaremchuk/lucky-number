import React, { useState } from 'react';

import { Draw } from '@lucky-number/models';

import './app.scss';
import DrawHistoryList from './features/navigation/draw-history-list';
import DashBoard from './features/dashboard/dashboard.component';
import { DRAWS } from './test.data';

function App() {
  const [draws, setDraws] = useState(DRAWS);
  const [selected, setSelected] = useState(0);

  const handleSelect = (index: number) => {
    setSelected(index);
  };

  const handleAdd = (value: Draw) => {
    setDraws([{ ...value, id: Date.now().toString() }, ...draws]);
  };

  const handleUpdate = (updated: Draw) => {
    console.log('UPDATED = ', updated);
    setDraws([updated, ...draws.filter(item => item.id !== updated.id)]);
  };

  return (
    <div className="row">
      <div className="dashboard">
        <DashBoard draw={draws[selected]} onUpdate={handleUpdate} />
      </div>
      <div className="nav-bar">
        <DrawHistoryList
          list={draws}
          onSelect={handleSelect}
          onAdd={handleAdd}
        />
      </div>
    </div>
  );
}

export default App;
