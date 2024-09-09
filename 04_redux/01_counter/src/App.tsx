import './App.css'
import {useSelector, useDispatch} from 'react-redux'
import {decrement, increment, incrementByAmount} from './features/countSlice'
import {RootState} from './store/store'

function App() {

  const count = useSelector((state: RootState) => state.count.count)
  const dispatch = useDispatch();

  return (
    <>
      <main>
        <h2>Counter</h2>
        <p>count value: {count}</p>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(incrementByAmount(3))}>Increment by anmount</button>
      </main>
    </>
  )
}

export default App
