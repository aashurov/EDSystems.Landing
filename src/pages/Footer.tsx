import React, { Fragment } from "react";
import {Link} from 'react-router-dom'
function Footer(){
    return(
    <Fragment>
    <footer id="footer" className="footer"><div className="container"><div className="row gy-4"><div className="col-lg-5 col-md-12 footer-info"><a href="/" className="logo d-flex align-items-center"><span>Ethno Logistics</span></a>
                    <p></p>
                    <div className="social-links d-flex mt-4"><a href="https://www.facebook.com/fastdeliverytm/" className="facebook"><i className="bi bi-facebook"></i></a>
                        <a href="https://www.instagram.com/ethno.uz/" className="instagram"><i className="bi bi-instagram"></i></a></div></div>
                <div className="col-lg-2 col-6 footer-links"><h4>Полезные ссылки</h4>
                    <ul>
                        <li><Link to='/' className="active">Главная</Link></li>
                        <li><Link to='/about'>О нас</Link></li>
                        <li><Link to='/pricing'>Тарифы</Link></li>
                        <li><Link to='/contact'>Контакты</Link></li>
                        <li><Link to='/getaquote'>Оставить заявку</Link></li>
                        <li><Link to='/termscondition'>Условия использования</Link></li>
                        <li><Link to='/privacypolicy'>Политика конфиденциальности</Link></li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-12 footer-contact text-center text-md-start"><h4>Наши офисы</h4>
                    <p>
                        Российская Федерация, Московская обл, г. Москва,<br/>
                        Академический р-н, ул. Винокурова 7/5, корпус 3, индекс 117449, +79266800899
                    </p>
                    <p>
                        Республика Узбекистан, г. Ташкент,  <br/>
                        Юнусабадский р-н, пр-т Амира Темура 1, индекс 100001, +998990059559
                    </p>
                    <p>
                        Республика Казахстан, г. Алматы, <br/>
                        ул. Тургута Озала 245, почтовый индекс A15T3F1 (050046), +77073659559
                    </p>
                    <p>
                        Республика Кыргызстан, г. Бишкек,<br/>
                        Жибек-Жолу 443/1А, +996999441111
                    </p>
                    <p>
                        Турция, г. Стамбул, р-н Fatih, ул. Katip Kasim mah. Hadım Odaları Sk, индекс: 34130
                        9/101, +99245822720
                    </p></div></div></div></footer>
{/* <!-- End Footer --> */}
    </Fragment>
    )
}

export default Footer;