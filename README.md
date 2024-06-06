
# Get started
More information at [freslertable.com](https://freslertable.com)

## 1. Install FreslerTable

To install FreslerTable in your React app, use npm to install the package in the root of your React project.

```bash
npm install @fresler/fresler-table --save
```

## 2. Remove <React.StrictMode>

You must remove <React.StrictMode> from your index.js file. This is because FreslerTable uses a 
third-party library [*react-beautiful-dnd*](https://github.com/atlassian/react-beautiful-dnd/issues/2350) 
that is not compatible with React.StrictMode. StrictMode is likely to have been declared in your 
index.js file

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
);
```

## 3. Import FreslerTable

In your React component, import FreslerTable and use it as shown below:

```jsx
import React from 'react';
import { FreslerTable } from '@fresler/fresler-table';
```

## 4. Use FreslerTable

Use FreslerTable in your React component as shown below:

```jsx
import React, { useState } from 'react';
import './App.css';
import { FreslerTable } from '@fresler/fresler-table';
import '@fresler/fresler-table/css';

// You must remove <React.StrictMode> to allow drag and drop to work
function App() {
  const data = [
    { id: 1, name: 'John Doe', age: 25, email: 'johndoe@jgmail.com' },
    { id: 2, name: 'Jane Doe', age: 22, email: 'janedoe@jgmail.com' },
  ];

  const cols = [
    { diplayName: 'Name', field: 'name' },
    { diplayName: 'Age', field: 'age' },
    { diplayName: 'Email', field: 'email' },
  ];

  return (
    // You must remove <React.StrictMode> to allow drag and drop to work
    <div style={{ width: '90vw', height: '90vh' }}>
      <FreslerTable 
       initData={data} 
       initCols={cols} />
    </div>
  );
}

export default App;
```
