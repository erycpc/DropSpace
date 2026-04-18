import { useState, useReducer } from 'react'
import { FilesContext } from './context/FilesContext'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import MyDrive from './pages/MyDrive'
import Starred from './pages/Starred'
import Trash from './pages/Trash'
import './App.css'

const initialFiles = [];

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
  const [query, setQuery] = useState('')

  return (
    <div className="app-shell">
      <FilesContext.Provider value={{ files, dispatch, query, setQuery }}>
        <Navbar />
        <div className="app-body">
            <Sidebar />
            <Routes>
              <Route path="/" element={<MyDrive />} />
              <Route path="/starred" element={<Starred />} />
              <Route path="/trash" element={<Trash />} />
            </Routes>
        </div>
      </FilesContext.Provider>
    </div>
  )
}

export default App