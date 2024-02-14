import { ThemeProvider } from './contexts/ThemeContext'
import Header from './Header'
import Content from './Content'
import './App.css'

function App() {

  return (
    <ThemeProvider>
      <Header/>
      <Content/>
    </ThemeProvider>
  )
}

export default App
