import React, { Fragment } from "react";
import Footer from "./Footer";
import Menu from "./Menu";

function Pricing(){
    return(
    <Fragment>
       <Menu/>
       <div id="main">

    {/* <!-- ======= Breadcrumbs ======= --> */}
    <div className="breadcrumbs">
      <div className="page-header d-flex align-items-center" style={{ backgroundImage:`url(${'assets/img/page-header.jpg'})` }}>
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <h2>Тарифы</h2>
              {/* <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p> */}
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div className="container">
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>Pricing</li>
          </ol>
        </div>
      </nav>
    </div>
    {/* <!-- End Breadcrumbs --> */}

    <section id="pricing" className="pricing"><div className="container aos-init aos-animate" data-aos="fade-up"><div className="row gy-4"><div className="col-lg-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100"><div className="pricing-item"><h3>Стандарт</h3>
                            <h4><sup>$</sup>7<span> / кг</span></h4>
                            <ul><li><i className="bi bi-check"></i> 5-7 рабочих дней</li>
                                <li><i className="bi bi-check"></i> Минимальный вес 1 кг </li></ul>
                            <a href="#" className="buy-btn">Заказать</a></div></div>

                    <div className="col-lg-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200"><div className="pricing-item featured"><h3>Экспрес</h3>
                            <h4><sup>$</sup>12<span> / кг</span></h4>
                            <ul><li><i className="bi bi-check"></i> 3-5 рабочих дней</li>
                                <li><i className="bi bi-check"></i> Минимальный вес 1 кг </li></ul>
                            <a href="#" className="buy-btn">Заказать</a></div></div>

                    <div className="col-lg-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300"><div className="pricing-item"><h3>Ультра</h3>
                            <h4><sup>$</sup>30<span> / кг</span></h4>
                            <ul><li><i className="bi bi-check"></i> 36 часов</li>
                                <li><i className="bi bi-check"></i> Минимальный вес 2 кг </li></ul>
                            <a href="#" className="buy-btn">Заказать</a></div></div>

                    <div className="col-lg-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300"><div className="pricing-item"><h3>Авто</h3>
                            <h4><sup>$</sup>5<span> / кг</span></h4>
                            <ul><li><i className="bi bi-check"></i> от 10 рабочих дней</li>
                                <li><i className="bi bi-check"></i> Минимальный вес 10 кг </li></ul>
                            <a href="#" className="buy-btn">Заказать</a></div></div></div></div></section>

  </div>
  {/* <!-- End #main --> */}
       <Footer/>
    </Fragment>
    )
}

export default Pricing;