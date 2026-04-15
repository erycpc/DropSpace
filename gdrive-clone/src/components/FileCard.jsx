// src/components/FileCard.jsx
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

function FileCard({ file }) {
  return (
    <div className="file-card">

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