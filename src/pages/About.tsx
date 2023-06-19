import React, { Fragment } from "react";
import Footer from "./Footer";
import Menu from "./Menu";

function About(){
    return(
    <Fragment>
    
        <Menu/>
<div id="main">
  <div className="breadcrumbs">
    <div className="page-header d-flex align-items-center" style={{ backgroundImage:`url(${'assets/img/page-header.jpg'})` }}>
    
      <div className="container position-relative">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 text-center">
            <h2>О компании</h2>
            <p>«Ethno Logistics» появился на рынке Средней Азии и Российкой Федерации в 2005 году и сейчас является одним из крупнейших компании в сфере отправки почтовых сообшений.

</p>
          </div>
        </div>
      </div>
    </div>
    <nav>
      <div className="container">
        <ol>
          <li><a href="index.html">Главная</a></li>
          <li>О Нас</li>
        </ol>
      </div>
    </nav>
  </div>
  {/* <!-- End Breadcrumbs --> */}

  <section id="about" className="about">
    <div className="container" data-aos="fade-up">

      <div className="row gy-4">
        <div className="col-lg-6 position-relative align-self-start order-lg-last order-first">
          <img src="assets/img/about.jpg" className="img-fluid" alt=""/>
          <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn"></a>
        </div>
        <div className="col-lg-6 content order-last  order-lg-first">
          <h3>О Нас</h3>
          <p>
          Наша компания это сплоченный коллектив высококвалифицированных специалистов разного профиля, персональный подход к каждому клиенту и безукоризненная деловая репутация. Уровень наших услуг по доставке посылок всегда на высоте, что помогает нам организовывать и выполнять даже самые трудные работы. Мы давно и успешно занимаемся перевозками, но эта сфера деятельности не ограничивается экспедированием. Транспортировка товаров может включать в себя складское хранение, разработку предстоящих маршрутов, таможенное оформление и многое другое.
          </p>
          <ul>
            <li data-aos="fade-up" data-aos-delay="100">
              <i className="bi bi-diagram-3"></i>
              <div>
                <h5>Наши ценности</h5>
                <p>Мы создаём технологичный и надёжный мир отправки посылок, комфортных для каждого, сохраняя время для жизни, отдыха и ведения бизнеса.</p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-fullscreen-exit"></i>
              <div>
                <h5>Наша миссия</h5>
                <p>Наше будущее — это лидерство в сфере малотоннажных и крупнотоннажных перевозок.</p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-broadcast"></i>
              <div>
                <h5>Мы предлагаем</h5>
                <p>Мы прилагаем максимум усилий, чтобы быть полезными и удовлетворить потребности каждого клиента.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </section>

   

 

  

  </div>

{/* <!-- End #main --> */}
<Footer/>
 
    </Fragment>
    )
}

export default About;