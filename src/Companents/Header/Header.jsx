import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <nav className="row navbar navbar-expand-lg align-items-center px-1 mb-4 nav-background">
        <div className="col-lg-9 order-lg-1 order-2">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <div className="responsive-ul links-hover">
              <ul className="list-unstyled navbar-nav d-flex gap-2 align-items-center justify-content-end position-relative fs-5 fw-semibold">
                <li className="nav-item active">
                  <Link to="/" className="nav-link span">Noxe</Link>
                </li>
                <li className="nav-item active">
                  <Link to="/home" className="nav-link">Movies</Link>
                </li>
                
                <li className="nav-item">
                  <Link to="/tv-shows" className="nav-link">TV Show</Link>
                </li>
                <li className="nav-item">
                  <Link to="/people" className="nav-link">People</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/networks" className="nav-link">Networks</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-12 order-lg-2 order-1 d-flex align-items-center">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <a href="#" className="iconz">
              <i className="fa-brands fa-facebook" />
            </a>
            <a href="#" className="iconz">
              <i className="fa-brands fa-spotify" />
            </a>
            <a href="#" className="iconz">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href="#" className="iconz">
              <i className="fa-brands fa-youtube" />
            </a>
              <Link to="/userfrom" className="iconz">SingUp</Link>
              <Link to="/login" className="iconz">SingIn</Link>
            <button className="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon toggle-pos"></span>
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}
