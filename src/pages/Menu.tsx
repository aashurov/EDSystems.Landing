
import React, {Fragment, useState} from "react";
import {Link, useLocation} from 'react-router-dom'
import { CheckMobileUtils } from "../utils/CheckMobileUtils";

function Menu() {
    const location = useLocation();
    const pathName = location.pathname;
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const isMobile = CheckMobileUtils();

    return (
        <Fragment>

            <header id="header" className="header d-flex align-items-center ">
                <div className="container-fluid container-xl d-flex align-items-start justify-content-between">
                    <Link to='/' className="logo d-flex align-items-center"><h1>Ethno Logistics</h1></Link>
                    <i className={`mobile-nav-show bi bi-list ${openMobileMenu && "d-none"}`} onClick={()=>setOpenMobileMenu(true)}></i>
                    <i className={`mobile-nav-hide bi bi-x ${!openMobileMenu && "d-none"} `} onClick={()=>setOpenMobileMenu(false)}></i>
                    <nav id="navbar" className="navbar" style={{
                        right: isMobile && !openMobileMenu? "-100%" : "0",
                    }}>
                        <ul className="">
                            <li><Link to='/' className={`${pathName === "/"? "active" : "" }`}>Главная</Link></li>
                            <li><Link to='/searching' className={`${pathName === "/searching"? "active" : "" }`}>Поиск</Link></li>
                            <li><Link to='/news' className={`${pathName === "/news"? "active" : "" }`}>Новости</Link></li>
                            <li><Link to='/pricing' className={`${pathName === "/pricing"? "active" : "" }`}>Тарифы</Link></li>
                            <li><Link to='/contact' className={`${pathName === "/contact"? "active" : "" }`}>Контакты</Link></li>
                            <li><Link to='/getaquote' className={`${pathName === "/getaquote"? "active" : "" }`}>Оставить заявку</Link></li>
                            <li><Link to='/calculate' className={`${pathName === "/calculate"? "active" : "" }`}>Расчет перевозки</Link></li>
                            <li><a className="get-a-quote" href="https://my-dev.ethno.uz/Identity/Account/Login">Вход</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

        </Fragment>
    )
}

export default Menu;