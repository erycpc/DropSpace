import { useState, useContext } from 'react'
import { FilesContext } from '../context/FilesContext'
import FileCard from './FileCard'
import ContextMenu from './ContextMenu'
import RenameModal from './RenameModal'

function MainContent() {
  const { files, dispatch } = useContext(FilesContext)
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