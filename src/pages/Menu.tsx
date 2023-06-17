import React, { Fragment } from "react";
import {Link} from 'react-router-dom'

function Menu(){
    return(
    <Fragment>
        {/* <!-- ======= Header ======= --> */}
  <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link to='/' className="logo d-flex align-items-center"> <h1>Ethno Logistics</h1></Link>
      <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <Link to='/' className="active">Главная</Link>
            </li>
            {/* _b30f320f9cf3e22ad5c70610bb3fd444.ethno.uz. CNAME _e9cb7e7b36783da9c5c52a343ddb1fb7.wmqxbylrnj.acm-validations.aws. */}

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