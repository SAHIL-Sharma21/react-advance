import './App.css'
import {useAuth} from './hooks/useAuth'
import UserProfile from './UserProfile';

function App() {

  const {loggedInUser, handleLogin , handleLogout} = useAuth();

  return (
    <>
        <main>
          <div>
            <h2>User Authentication with context api</h2>
            {loggedInUser ? (
              <>
                <h3>Welcome user: {loggedInUser}!</h3>
                <button onClick={handleLogout}>Logout</button>
              </>

            ) : (
              <p>You are not logged in</p>
            )}
            <form onSubmit={handleLogin}>
              <label htmlFor="username">Enter your name:</label>
              <input type="text" name="username"/>
              <button type='submit'>Login</button>
            </form>
            <aside>
              <UserProfile />
            </aside>
          </div>  
        </main>      
    </>
  )
}

export default App
