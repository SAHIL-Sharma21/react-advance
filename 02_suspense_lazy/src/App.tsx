import './App.css'

import React, { Suspense } from 'react'

const LazyComponent = React.lazy(() => import('./components/MyComponents'));
function App() {


  return (
    <>
      <div>
        <h2>Suspense + lazy react</h2>
        <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
        </Suspense>
      </div>
    </>
  )
}

export default App
