import React, { Fragment } from "react";
import {Link} from 'react-router-dom'

function Menu(){
    return(
    <Fragment>
        {/* <!-- ======= Header ======= --> */}
  <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="index.html" className="logo d-flex align-items-center">
        {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
        {/* <!-- <img src="assets/img/logo.png" alt=""> --> */}
        <h1>Logis</h1>
      </a>

      <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <Link to='/' className="active">Главная</Link>
            </li>

          <li><Link to='/about'>О нас</Link></li>
          <li><Link to='/services'>Услуги</Link></li>
          <li><Link to='/pricing'>Тарифы</Link></li>
          <li><Link to='/contact'>Контакты</Link></li>
          <li><Link to='/getaquote'>Оставить заявку</Link></li>
          {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li> */}
        </ul>
      </nav>
      {/* <!-- .navbar --> */}

    </div>
  </header>
  {/* <!-- End Header --> */}
  {/* <!-- End Header --> */}
    </Fragment>
    )
}

export default Menu;