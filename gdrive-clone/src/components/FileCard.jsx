function getIcon(type) {
  const icons = {
    pdf:    '📄',
    image:  '🖼️',
    video:  '🎬',
    folder: '📁',
    doc:    '📝',
  }
  return icons[type] || '📄'   // fallback if type is unknown
}

function FileCard({ file }) {
  return (
    <div className="file-card">
      <h3>{file.name}</h3>
      <p>Size: {file.size} bytes</p>
      <p>Type: {file.type}</p>
      <p>Modified: {file.modified}</p>
    </div>
  );
}

export default FileCard;