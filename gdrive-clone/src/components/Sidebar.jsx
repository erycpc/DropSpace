import { useState } from 'react'

const navItems = [
  { icon: '🗂️', label: 'My Drive' },
  { icon: '👥', label: 'Shared with me' },
  { icon: '🕒', label: 'Recent' },
  { icon: '⭐', label: 'Starred' },
  { icon: '💾', label: 'Offline' },
  { icon: '🗑️', label: 'Trash' },
]

function Sidebar() {
  const [activeItem, setActiveItem] = useState('My Drive')

  return (
    <aside className="sidebar">

      <button className="new-btn">
        <span className="new-btn-icon">+</span>
        <span>New</span>
      </button>

      <nav className="sidebar-nav">
        {navItems.map(item => (
          <div
            key={item.label}
            className={`sidebar-item ${activeItem === item.label ? 'active' : ''}`}
            onClick={() => setActiveItem(item.label)}
          >
            <span className="item-icon">{item.icon}</span>
            <span className="item-text">{item.label}</span>
          </div>
        ))}
      </nav>

    </aside>
  )
}

export default Sidebar