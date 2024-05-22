// "use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.css";
import Modal from '../Modal';
import Cart from './Cart';
import { useCart } from '../components/ContextReducer';

const Navbar = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  const items = useCart();
  const [cartView, setCartView] = useState(false);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem('authToken');
    }
    window.location.reload();
  };

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary  fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand me-auto font-weight-bold" href="/"><b>AniZza's Slices</b></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {window.localStorage.getItem("authToken") ?
                  <li className="nav-item">
                    <Link className="nav-link active mx-3" aria-current="page" href="/MyOrder">My Order</Link>
                  </li> : null
                }
                {window.localStorage.getItem("authToken") ?
                  <li className="nav-link active mx-3 " style={{ "cursor": "pointer" }}>
                    <span className=" position-relative" onClick={() => { setCartView(true) }}>My Cart{" "}
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {items?.length || 0}
                      </span>
                    </span>
                    {cartView ? <Modal onClose={() => { setCartView(false) }}><Cart /></Modal> : null}
                  </li> : null
                }
                <li className="nav-item dropdown mx-3">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Hey, User
                  </a>
                  <ul className="dropdown-menu">
                    {!window.localStorage.getItem("authToken") ? (
                      <>
                        <li><Link className="dropdown-item" href="/Signup">Sign Up</Link></li>
                        <li><Link className="dropdown-item" href="/Login">Sign In</Link></li>
                      </>
                    ) : (
                      <>
                        <li><a className="dropdown-item" href="#" onClick={handleLogout}>Sign Out</a></li>
                      </>
                    )}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
