import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  let navigate = useNavigate();

  const onclick = () => {
    localStorage.removeItem('token')
    navigate('/login');
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark my-0 ">
        <div className="container-fluid">
          <Link className="navbar-brand " to="/">iNotebook</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-5 mb-lg-0">
              <li className="nav-item">
                <Link className={'nav-link ${location.pathname==="/"?"active":""} '} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={'nav-link ${location.pathname==="/Contact us"?"active":""} '} to="/Contact us">Contact Us</Link>
              </li>
            

            </ul>
            {!localStorage.getItem('token') ? <from className="d-flex">
              <Link className="btn btn-primary mx-2" to="/login" role="button">login</Link>
              <Link className="btn btn-primary mx-1" to="/signup" role="button">Sign Up </Link>
            </from> : <button type="button" onClick={onclick} class="btn btn-primary">logout</button>}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar