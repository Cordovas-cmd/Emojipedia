// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



// 1. Create Entry Component. *done*
// 2. Create props to replace hardcoded data.(s3 for starters)
// 3a. Import emojipedia const.
// 3b. Map through the emojipedia array/render Entry components.

import React from "react";
import './styles.css'
import Entry from "./components/Entry";

function App() {
  return (
    <div>
    <h1>
      <span>emojipedia</span>
    </h1>

    <dl className="dictionary">

        < Entry />
        < Entry />
        < Entry />
        
        </dl>
    </div>
  );
}

export default App;
