import { useEffect } from 'react';
import './App.css'
import { useTheme } from './hooks/useTheme'

function App() {

  const {theme, handleTheme} = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <div>
        <h2>Theme switcher</h2>
        <p>current theme: {theme}</p>
        <button onClick={handleTheme} style={{backgroundColor: theme === "dark" ? "#fff": "#000", color: theme === "dark"? "#000": "#fff"}}>Switch theme</button>
      </div>
    </>
  )
}

export default App
