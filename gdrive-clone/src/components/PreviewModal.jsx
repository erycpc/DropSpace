function PreviewContent({ file }) {
  if (file.mimeType?.startsWith('image/'))
    return <img src={file.url} alt={file.name} className="preview-image" />
  if (file.mimeType === 'application/pdf')
    return <iframe src={file.url} className="preview-pdf" title={file.name} />
  if (file.mimeType?.startsWith('video/'))
    return <video src={file.url} controls className="preview-video" />
  return (
    <div className="preview-unsupported">
      <span>📄</span>
      <p>Preview not available</p>
    </div>
  )
}

function PreviewModal({ file, onClose }) {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = file.url
    link.download = file.name
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="preview-modal" onClick={e => e.stopPropagation()}>
        <div className="preview-header">
          {/* file name on left, download + close buttons on right */}
            <h3 className="preview-title">{file.name}</h3>
            <div className="preview-actions">
              <button className="preview-btn-download" onClick={handleDownload}>Download</button>
              <button className="preview-btn-close" onClick={onClose}>Close</button>
            </div>
        </div>
        <div className="preview-body">
          <PreviewContent file={file} />
        </div>
        <div className="preview-footer">
          {/* size and modified date */}
            <p>{file.size} {file.modified}</p>
        </div>
      </div>
    </div>
  )
}

export default PreviewModal