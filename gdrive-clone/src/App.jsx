import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <div className="app-body">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  )
}

export default App