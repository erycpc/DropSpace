import logo from '../assets/Untitled design.png'

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <img src={logo} alt="DropSpace Logo" />
        <span className="logo-text">DropSpace</span>
      </div>

      <div className="navbar-search">
        <span className="search-icon">🔍</span>
        <input type="text" placeholder="Search in DropSpace" />
      </div>

      <div className="navbar-user">
        <div className="navbar-icon-btn" title="Support">❓</div>
        <div className="navbar-icon-btn" title="Settings">⚙️</div>
        <div className="navbar-icon-btn" title="Google apps">⊞</div>
        <div className="avatar">
          {/* <img src="src/assets/avatar.png" alt="User Avatar" /> */}
          <span>👤</span>
        </div>
      </div>

    </nav>
  )
}

export default Navbar