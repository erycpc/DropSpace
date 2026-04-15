function ContextMenu({ x, y, file, onClose }) {
  const menuItems = [
    { icon: '📥', label: 'Download' },
    { icon: '✏️', label: 'Rename' },
    { icon: '🗑️', label: 'Delete' },
  ]

  return (
    <div className="context-menu" style={{ top: y, left: x }} onClick={onClose}>
      <div className="context-menu-header">{file.name}</div>
      {menuItems.map(item => (
        <div key={item.label} className="context-menu-item" onClick={onClose}>
          <span>{item.icon}</span>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  )
}

export default ContextMenu