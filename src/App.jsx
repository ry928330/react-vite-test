/*
 * @Author: ryyyyy
 * @Date: 2023-02-15 19:29:15
 * @LastEditors: ryyyyy
 * @LastEditTime: 2023-02-17 19:53:49
 * @FilePath: /react-vite-test/src/App.jsx
 * @Description: 
 * 
 */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
let release = `react-vite-test@v0.18.0`;

Sentry.init({
  dsn: "https://1cfce72835ac47d9a6faf4b5821c153c@o1149366.ingest.sentry.io/4504683848794112",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
  release
});

class ValidateError extends Error {
  constructor(message) {
    super(message);
    // this.name = `error: ${message} from ${import.meta.env.VITE_RELEASE}}`;
    this.name = `error: 20th ${message} from ${release}}`;
  }
}

function App() {
  const [count, setCount] = useState(0)

  function handleClickError(err) {
    throw new ValidateError(err);
  }
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1)
          handleClickError('test error')
        }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default Sentry.withProfiler(App)
