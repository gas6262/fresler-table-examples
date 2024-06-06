import { useState } from 'react';
import './App.css';
import { FreslerTable } from '@fresler/fresler-table';
import '@fresler/fresler-table/css';
import { data } from './data';
import { columns } from './columns.jsx';

// You must remove <React.StrictMode> to allow drag and drop to work
function App() {
  return (
    <div style={{ width: '90vw', height: '90vh' }}>
      Loading may take a few seconds.
      <FreslerTable
        initData={data}
        initCols={columns}
        initGroupBy={columns[1]}
        initDisplayTableMapping={true}
      />
    </div>
  );
}

export default App;
