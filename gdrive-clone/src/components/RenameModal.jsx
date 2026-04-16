import { useState } from 'react'

function RenameModal({ file, onClose, onRename }) {
  const [name, setName] = useState(file.name)

  const handleSubmit = () => {
    if (name.trim()) {
      onRename(file.id, name.trim())
      onClose()
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3 className="modal-title">Rename</h3>
        <input
          className="modal-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          autoFocus
        />
        <div className="modal-actions">
          <button className="modal-btn-cancel" onClick={onClose}>Cancel</button>
          <button className="modal-btn-save" onClick={handleSubmit}>OK</button>
        </div>
      </div>
    </div>
  )
}

export default RenameModal