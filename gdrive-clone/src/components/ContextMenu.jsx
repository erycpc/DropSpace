function ContextMenu({ x, y, file, onClose, onDelete, onRename }) {
  const menuItems = [
    { icon: '📥', label: 'Download', action: onClose },
    { icon: '✏️', label: 'Rename',   action: () => onRename(file) },
    { icon: '🗑️', label: 'Delete',   action: () => { onDelete(file.id); onClose() } },
  ]

  return (
    <div className="context-menu" style={{ top: y, left: x }}>
      <div className="context-menu-header">{file.name}</div>
      {menuItems.map(item => (
        <div key={item.label} className="context-menu-item" onClick={item.action}>
          <span>{item.icon}</span>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  )
}

export default ContextMenu