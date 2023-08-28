import React, { Fragment } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import CallToAction from "./CallToAction";

function Index(){
    return(
    <Fragment>
       <div>
       <Menu/>

{/* <!-- ======= Hero Section ======= --> */}
<section id="hero" className="hero d-flex align-items-center">
  <div className="container">
    <div className="row gy-4 d-flex justify-content-between">
      <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
        <h2 data-aos="fade-up">Ваш молниеносный партнер по доставке</h2>
        <p data-aos="fade-up" data-aos-delay="100" style={{fontSize: "18px"}}>Доставка документов, образцов и посылок из Узбекистана в стран СНГ и обратно от 3 дней.<br/> Организуем перевозку от начала до конца: получаем разрешения, оформляем документы, предоставляем сопровождение и страхование, осуществляем погрузку и разгрузку.</p>

        {/*<form action="" className="form-search d-flex align-items-stretch mb-3" data-aos="fade-up" data-aos-delay="200">*/}
        {/*  <input type="text" id="submit-text" className="form-control" placeholder="Номер посылки"/>*/}
        {/*  <button type="submit" id="submit-button" className="btn btn-primary">Поиск</button>*/}
        {/*</form>*/}

        {/* <div id="table" className="for-information-table bg-white">
           <div className="row text-danger p-2">
            <div className="col-2">Дата</div>
            <div className="col-3">Штрих-код</div>
            <div className="col-3">Направление</div>
            <div className="col-2">Отправитель</div>
            <div className="col-2">Статус</div>
           </div>
        </div> */}

        {/*<div className="row gy-4" data-aos="fade-up" data-aos-delay="400">*/}

        {/*  <div className="col-lg-3 col-6">*/}
        {/*    <div className="stats-item text-center w-100 h-100">*/}
        {/*      <span data-purecounter-start="0" id="clients"data-purecounter-end="232" data-purecounter-duration="1" >12782</span>*/}
        {/*      <p>Клиенты</p>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  /!* <!-- End Stats Item --> *!/*/}

        {/*  <div className="col-lg-3 col-6">*/}
        {/*    <div className="stats-item text-center w-100 h-100">*/}
        {/*      <span data-purecounter-start="0" id="projects" data-purecounter-end="521" data-purecounter-duration="1" >80349</span>*/}
        {/*      <p>Доставлено</p>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  /!* <!-- End Stats Item --> *!/*/}

        {/*  <div className="col-lg-3 col-6">*/}
        {/*    <div className="stats-item text-center w-100 h-100">*/}
        {/*      <span data-purecounter-start="0" id="support" data-purecounter-end="1453" data-purecounter-duration="1" >186</span>*/}
        {/*      <p>В пути</p>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  /!* <!-- End Stats Item --> *!/*/}

        {/*  <div className="col-lg-3 col-6">*/}
        {/*    <div className="stats-item text-center w-100 h-100">*/}
        {/*      <span data-purecounter-start="0" id="workers" data-purecounter-end="32" data-purecounter-duration="1" >28896</span>*/}
        {/*      <p>Всего</p>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  /!* <!-- End Stats Item --> *!/*/}

        {/*</div>*/}

      </div>

      {/*<div className="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">*/}
      {/*  <img src="assets/img/hero-img.svg" className="img-fluid mb-3 mb-lg-0" alt=""/>*/}
      {/*</div>*/}

    </div>
  </div>
</section>
{/* <!-- End Hero Section --> */}

<main id="main">

{/* <!-- ======= Services Section ======= --> */}
<section id="service" className="services pt-0">
    <div className="container" data-aos="fade-up">

      <div className="section-header">
        <span>НАШИ УСЛУГИ</span>
        <h2>НАШИ УСЛУГИ</h2>

      </div>

      <div className="row gy-4">

        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
          <div className="card">
            <div className="card-img">
              <img src="assets/img/avto.jpg" alt="" className="img-fluid"/>
            </div>
            <h3><a href="service-details.html" className="stretched-link">НАЗЕМНАЯ ДОСТАВКА</a></h3>
            <p>Один из самых удобных и экономичных видов доставки грузов-автомобильные грузоперевозки. Доставка автомобильным транспортом лидирует среди других видов транспортировки</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div className="card">
            <div className="card-img">
              <img src="assets/img/avia.jpg" alt="" className="img-fluid"/>
            </div>
            <h3><a href="service-details.html" className="stretched-link">АВИА ПЕРЕВОЗКИ</a></h3>
            <p>Компания "Ethno Logistics" предоставляет высококачественные услуги "авиаперевозки". Закажите авиаперевозку груза в нашей компании</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
          <div className="card">
            <div className="card-img">
              <img src="assets/img/upakovka.jpg" alt="" className="img-fluid"/>
            </div>
            <h3><a href="service-details.html" className="stretched-link">УПАКОВКА</a></h3>
            <p>Дополнительная упаковка обеспечивает наибольшую сохранность груза, а так же при необходимости мы можем сделать маркировку товара</p>
          </div>
        </div>
      </div>

    </div>
  </section>

    <section id="pricing" className="pricing">
        <div className="container aos-init aos-animate" data-aos="fade-up">
            <div className="section-header">
                <span>ТАРИФЫ</span>
                <h2>ТАРИФЫ</h2>
            </div>
            
            <div className="row gy-4">
                <div className="col-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                    <div className="pricing-item">
                        <h3>СТАНДАРТ</h3>
                        <h4><sup>$</sup>7<span> / кг</span></h4>
                        <ul>
                            <li><i className="bi bi-check"></i> 3-5 рабочих дней</li>
                            <li><i className="bi bi-check"></i> рейс в среду и субботу</li>
                            <li><i className="bi bi-check"></i> мин. вес к отправке 1кг</li>
                        </ul>
                        <a href="/pricing" className="buy-btn">Подробно</a>
                    </div>
                </div> 

                <div className="col-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <div className="pricing-item featured">
                        <h3>ЭКСПРЕСС</h3>
                        <h4><sup>$</sup>12<span> / кг</span></h4>
                        <ul>
                            <li><i className="bi bi-check"></i> 2-4 рабочих дней</li>
                            <li><i className="bi bi-check"></i> рейс 3-4 раза в неделю</li>
                            <li><i className="bi bi-check"></i> мин. вес к отправке 2кг</li>
                        </ul>
                        <a href="/pricing" className="buy-btn">Подробно</a>
                    </div>
                </div> 

                <div className="col-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                    <div className="pricing-item">
                        <h3>УЛЬТРА</h3>
                        <h4><sup>$</sup>36<span> / кг</span></h4>
                        <ul>
                            <li><i className="bi bi-check"></i> 36 часов</li>
                            <li><i className="bi bi-check"></i> рейс 3-4 раза в неделю</li>
                            <li><i className="bi bi-check"></i> мин. вес 1кг</li>
                        </ul>
                        <a href="/pricing" className="buy-btn">Подробно</a>
                    </div>
                </div> 

            </div>

        </div>
    </section>
    
    
  {/* <!-- ======= About Us Section ======= --> */}
  <section id="about" className="about pt-0">
    <div className="container" data-aos="fade-up">

      <div className="row gy-4">
        {/*<div className="col-lg-6 position-relative align-self-start order-lg-last order-first">*/}
        {/*  <img src="assets/img/about.jpg" className="img-fluid" alt=""/>*/}
        {/*  <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn"></a>*/}
        {/*</div>*/}
        <div className="col-lg-12 content order-last  order-lg-first">
          <h3>О компании</h3>
          <p>
          Наша компания это сплоченный коллектив высококвалифицированных специалистов разного профиля, персональный подход к каждому клиенту и безукоризненная деловая репутация. Уровень наших услуг по доставке посылок всегда на высоте, что помогает нам организовывать и выполнять даже самые трудные работы. Мы давно и успешно занимаемся перевозками, но эта сфера деятельности не ограничивается экспедированием. Транспортировка товаров может включать в себя складское хранение, разработку предстоящих маршрутов, таможенное оформление и многое другое.
          </p>
          <ul>
            <li data-aos="fade-up" data-aos-delay="100">
              <i className="bi bi-diagram-3"></i>
              <div>
                <h5>ОРГАНИЗАЦИЯ</h5>
                <p>Благодаря работе квалифицированных экспедиторов, вы можете быть уверены, что груз будет доставлен точно в срок и в максимальной сохранности

</p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-fullscreen-exit"></i>
              <div>
                <h5>КОМПЕТЕНТНОСТЬ</h5>
                <p>Компания работает в соответствии с мировыми стандартами и стандартами Республики Узбекистана.</p>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-broadcast"></i>
              <div>
                <h5>ОПЫТ В СФЕРЕ ЛОГИСТИКИ</h5>
                <p>Наша компания работает на рынке логистических услуг с 2015 года и зарекомендовала себя как надежный Партнер</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </section>

  
<CallToAction/>

</main>

<Footer/>

</div>
    </Fragment>
    )
}

export default Index;