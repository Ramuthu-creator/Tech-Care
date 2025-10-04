import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Bell, User } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span>HelpDeskPro</span>
        </div>

        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/tickets">Tickets</Link>
          <Link to="/users">Users</Link>
          <Link to="/reports">Reports</Link>
        </div>

        <div className="navbar-icons">
          <Bell className="icon" />
          <User className="icon" />
          <button
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="icon" /> : <Menu className="icon" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          <Link to="/dashboard" onClick={() => setIsOpen(false)}>
            Dashboard
          </Link>
          <Link to="/tickets" onClick={() => setIsOpen(false)}>
            Tickets
          </Link>
          <Link to="/users" onClick={() => setIsOpen(false)}>
            Users
          </Link>
          <Link to="/reports" onClick={() => setIsOpen(false)}>
            Reports
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
