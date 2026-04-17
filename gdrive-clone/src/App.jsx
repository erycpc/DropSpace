import { useReducer } from 'react'
import { FilesContext } from './context/FilesContext'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import './App.css'

const initialFiles = [
  { id: 1, name: 'Resume.pdf',     type: 'pdf',    size: '240 KB', modified: 'Apr 10' },
  { id: 2, name: 'Holiday Photos', type: 'folder', size: '1.2 GB', modified: 'Apr 8'  },
  { id: 3, name: 'Demo Video.mp4', type: 'video',  size: '84 MB',  modified: 'Apr 5'  },
  { id: 4, name: 'Notes.doc',      type: 'doc',    size: '18 KB',  modified: 'Mar 28' },
  { id: 5, name: 'Screenshot.png', type: 'image',  size: '2.1 MB', modified: 'Mar 22' },
]

function filesReducer(state, action) {
  switch (action.type) {
    case 'DELETE': return state.filter(f => f.id !== action.id)
    case 'RENAME': return state.map(f => f.id === action.id ? { ...f, name: action.name } : f)
    case 'ADD':    return [...state, action.file]
    default:       return state
  }
}

function App() {
  const [files, dispatch] = useReducer(filesReducer, initialFiles)

  return (
    <div className="app-shell">
      <FilesContext.Provider value={{ files, dispatch }}>
        <Navbar />
        <div className="app-body">
          <Sidebar />
          <MainContent />
        </div>
      </FilesContext.Provider>
    </div>
  )
}

export default App