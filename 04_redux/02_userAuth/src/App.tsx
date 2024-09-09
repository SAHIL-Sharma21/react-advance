import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import { RootState } from './store/store';
import LoginForm from './components/LoginForm';
import {logout} from './features/userAuthSlice'
function App() {

  const dispatch = useDispatch();
  const {isAutentiocated, user} = useSelector((state: RootState) => state.userAuth);

  return (
    <>
      <main>
        <h2>User authentication application</h2>
        <LoginForm />
        {isAutentiocated && (
          <>
            <p>User is logged in: {user}</p>
            <button onClick={() => dispatch(logout())}>Logout from the site</button>
          </>
        )}
      </main>
    </>
  )
}

export default App
