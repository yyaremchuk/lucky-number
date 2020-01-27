import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Draw } from '@lucky-number/models';

import './app.scss';
import DrawHistoryList from './features/navigation/draw-history-list';
import DashBoard from './features/dashboard/dashboard.component';

axios.interceptors.response.use(
  function(response) {
    if (!response.data) {
      return response;
    }

    if (!Array.isArray(response.data)) {
      return {
        ...response.data,
        date: new Date(Date.parse(response.data.date))
      };
    }

    const result = response.data.map((item: any) => ({
      ...item,
      date: new Date(Date.parse(item.date))
    }));
    return {
      ...response,
      data: result
    };
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

function App() {
  const [state, setState] = useState({
    draws: [],
    selected: -1
  });

  const loadData = () => {
    axios
      .get('/api/draws')
      .then(response => {
        setState({
          draws: response.data,
          selected: response.data.length ? 0 : -1
        });
      })
      .catch(e => {
        console.log(e);
        setState({
          draws: [],
          selected: -1
        });
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSelect = (index: number) => {
    setState({
      ...state,
      selected: index
    });
  };

  const handleAdd = (value: Draw) => {
    axios
      .post('/api/draws', value)
      .then(() => {
        loadData();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const handleUpdate = (updated: Draw) => {
    axios
      .put(`/api/draws/${updated._id}`, updated)
      .then(() => {
        loadData();
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="row">
      <div className="dashboard">
        {state.selected > -1 ? (
          <DashBoard
            draw={state.draws[state.selected]}
            onUpdate={handleUpdate}
          />
        ) : null}
      </div>
      <div className="nav-bar">
        <DrawHistoryList
          list={state.draws}
          onSelect={handleSelect}
          onAdd={handleAdd}
        />
      </div>
    </div>
  );
}

export default App;
