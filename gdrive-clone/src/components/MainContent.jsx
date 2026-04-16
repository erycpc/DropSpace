import FileCard from './FileCard'
import ContextMenu from './ContextMenu'
import { useState, useReducer } from 'react'

// Data lives OUTSIDE the component — easy to add/change later
const initialFiles = [
  { id: 1, name: 'Resume.pdf',     type: 'pdf',    size: '240 KB', modified: 'Apr 10' },
  { id: 2, name: 'Holiday Photos', type: 'folder', size: '1.2 GB', modified: 'Apr 8'  },
  { id: 3, name: 'Demo Video.mp4', type: 'video',  size: '84 MB',  modified: 'Apr 5'  },
  { id: 4, name: 'Notes.doc',      type: 'doc',    size: '18 KB',  modified: 'Mar 28' },
  { id: 5, name: 'Screenshot.png', type: 'image',  size: '2.1 MB', modified: 'Mar 22' },
]

function filesReducer(state, action) {
  switch (action.type) {
    case 'DELETE':
      return state.filter(f => f.id !== action.id)
    case 'RENAME':
      return state.map(f =>
        f.id === action.id ? { ...f, name: action.name } : f
      )
    case 'ADD':
      return [...state, action.file]
    default:
      return state
  }
  
}

function MainContent() {
  const [files, dispatch] = useReducer(filesReducer, initialFiles) // ✅ here
  const [selectedId, setSelectedId] = useState(null)
  const [contextMenu, setContextMenu] = useState(null)
  const [renameFile, setRenameFile] = useState(null)

  return (
    <main className="main-content" onClick={() => setContextMenu(null)}>
      <h2 className="section-title">My Drive</h2>
      <div className="files-grid">
        {files.map(file => (
          <FileCard
            key={file.id}
            file={file}
            isSelected={selectedId === file.id}
            onSelect={() => setSelectedId(file.id)}
            onRightClick={(x, y) => setContextMenu({ x, y, file })}
          />
        ))}
      </div>
      {contextMenu && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          file={contextMenu.file}
          onClose={() => setContextMenu(null)}
          onDelete={(id) => dispatch({ type: 'DELETE', id })}
          onRename={(file) => { setRenameFile(file); setContextMenu(null) }}
        />
      )}
      {renameFile && (
        <RenameModal
          file={renameFile}
          onClose={() => setRenameFile(null)}
          onRename={(id, name) => dispatch({ type: 'RENAME', id, name })}
        />
      )}
    </main>
  )
}

export default MainContent