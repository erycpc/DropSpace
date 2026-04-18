import { useState, useContext, useRef } from 'react'
import { FilesContext } from '../context/FilesContext'
import { Link, useLocation } from 'react-router-dom'
import { formatSize, getFileType } from '../utils/fileHelper'

const navItems = [
  { icon: '🗂️', label: 'My Drive',       path: '/'        },
  { icon: '👥', label: 'Shared with me', path: '/shared'  },
  { icon: '🕒', label: 'Recent',         path: '/recent'  },
  { icon: '⭐', label: 'Starred',        path: '/starred' },
  { icon: '💾', label: 'Offline',        path: '/offline' },
  { icon: '🗑️', label: 'Trash',          path: '/trash'   },
]

function Sidebar() {
  const { dispatch } = useContext(FilesContext)
  const location = useLocation()  // tells you current URL
  const inputRef = useRef(null)  // for focusing the new file name input

  const formatSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(0) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
  }

  const handleFileSelect = (e) => {
  const selectedFiles = Array.from(e.target.files)
  selectedFiles.forEach(file => {
    const url = URL.createObjectURL(file)
    dispatch({
      type: 'ADD',
      file: {
        id: Date.now() + Math.random(),
        name: file.name,
        size: formatSize(file.size),
        type: getFileType(file.type),
        modified: 'Today',
        url,
        mimeType: file.type
      }
    })
  })
  e.target.value = ''
}

  return (
    <aside className="sidebar">
      <input
        type="file"
        ref={inputRef}
        style={{ display: 'none' }}
        onChange={handleFileSelect}
        multiple
      />
      <button className="new-btn" onClick={() => inputRef.current.click()}>
        <span className="new-btn-icon">+</span>
        <span>New</span>
      </button>

      <nav className="sidebar-nav">
        {navItems.map(item => (
          <Link
            key={item.label}
            to={item.path}
            className={`sidebar-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <span className="item-icon">{item.icon}</span>
            <span className="item-text">{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar