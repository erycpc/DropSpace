import React from 'react'

function getIcon(type) {
  const icons = {
    pdf:    '📄',
    image:  '🖼️',
    video:  '🎬',
    folder: '📁',
    doc:    '📝',
  }
  return icons[type] || '📄'
}

function FileCard({ file, isSelected, onSelect, onRightClick, onOpen }) {
  return (
    <div
      className={`file-card ${isSelected ? 'selected' : ''}`}
      onClick={onSelect}
      onDoubleClick={onOpen}
      onContextMenu={(e) => {
        e.preventDefault()
        onRightClick(e.clientX, e.clientY)
      }}
    >

      {/* TOP — icon preview area */}
      <div className="file-card-preview">
        <span className="file-icon">{getIcon(file.type)}</span>
      </div>

      {/* BOTTOM — file info */}
      <div className="file-card-info">
        <span className="file-name">{file.name}</span>
        <span className="file-meta">{file.size} · {file.modified}</span>
      </div>

    </div>
  )
}

export default FileCard