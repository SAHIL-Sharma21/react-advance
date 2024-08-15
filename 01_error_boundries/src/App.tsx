import './App.css'
import ErrorBoundries from "./components/ErroBoundries";
import DataFetch from './components/DataFetch'


function App() {


  return (
    <>
    <div>
      <h2>Error Boundries in ReactJs</h2>
      <ErrorBoundries>
        <DataFetch />
      </ErrorBoundries>
    </div>
    </>
  )
}

export default App
