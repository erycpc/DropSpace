import FileCard from './FileCard'
import { useState } from 'react'

// Data lives OUTSIDE the component — easy to add/change later
const files = [
  { id: 1, name: 'Resume.pdf',      type: 'pdf',    size: '240 KB', modified: 'Apr 10' },
  { id: 2, name: 'Holiday Photos',  type: 'folder', size: '1.2 GB', modified: 'Apr 8'  },
  { id: 3, name: 'Demo Video.mp4',  type: 'video',  size: '84 MB',  modified: 'Apr 5'  },
  { id: 4, name: 'Notes.doc',       type: 'doc',    size: '18 KB',  modified: 'Mar 28' },
  { id: 5, name: 'Screenshot.png',  type: 'image',  size: '2.1 MB', modified: 'Mar 22' },
]

function MainContent() {
  const [selectedId, setSelectedId] = useState(null)
  const [contextMenu, setContextMenu] = useState(null)

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
    </main>
  )
}

export default MainContent