// src/components/Navbar.jsx
function Navbar() {
  return (
    <nav className="navbar">

      {/* LEFT — Logo */}
      <div className="navbar-logo">
        <span className="logo-icon">📁</span>
        <span className="logo-text">Drive</span>
      </div>

      {/* CENTER — Search bar */}
      <div className="navbar-search">
        <span className="search-icon">🔍</span>
        <input type="text" placeholder="Search in Drive...." />
      </div>

      {/* RIGHT — User avatar */}
      <div className="navbar-user">
        <div className="avatar">K</div>
      </div>

    </nav>
  );
}

export default Navbar;