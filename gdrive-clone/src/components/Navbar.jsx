// src/components/Navbar.jsx
function Navbar() {
  return (
    <nav className="navbar">

      {/* LEFT — Logo */}
      <div className="navbar-logo">
        <img src="src/assets/Untitled design.png" alt="DropSpace Logo" />
        <span className="logo-text">DropSpace</span>
      </div>

      {/* CENTER — Search bar */}
      <div className="navbar-search">
        <span className="search-icon">🔍</span>
        <input type="text" placeholder="Search in DropSpace...." />
      </div>

      {/* RIGHT — User avatar */}
      <div className="navbar-user">
        <div className="avatar">K</div>
      </div>

    </nav>
  );
}

export default Navbar;