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
        <p data-aos="fade-up" data-aos-delay="100">Организуем перевозку от начала до конца: получаем разрешения, оформляем документы, предоставляем сопровождение и страхование, осуществляем погрузку и разгрузку</p>

        <form action="" className="form-search d-flex align-items-stretch mb-3" data-aos="fade-up" data-aos-delay="200">
          <input type="text" id="submit-text" className="form-control" placeholder="Номер посылки"/>
          <button type="submit" id="submit-button" className="btn btn-primary">Поиск</button>
        </form>

        <div id="table" className="for-information-table bg-white">
           <div className="row text-danger p-2">
            <div className="col-2">Дата</div>
            <div className="col-3">Штрих-код</div>
            <div className="col-3">Направление</div>
            <div className="col-2">Отправитель</div>
            <div className="col-2">Статус</div>
           </div>
        </div>

        <div className="row gy-4" data-aos="fade-up" data-aos-delay="400">

          <div className="col-lg-3 col-6">
            <div className="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" id="clients"data-purecounter-end="232" data-purecounter-duration="1" ></span>
              <p>Клиенты</p>
            </div>
          </div>
          {/* <!-- End Stats Item --> */}

          <div className="col-lg-3 col-6">
            <div className="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" id="projects" data-purecounter-end="521" data-purecounter-duration="1" ></span>
              <p>Доставлено</p>
            </div>
          </div>
          {/* <!-- End Stats Item --> */}

          <div className="col-lg-3 col-6">
            <div className="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" id="support" data-purecounter-end="1453" data-purecounter-duration="1" ></span>
              <p>В пути</p>
            </div>
          </div>
          {/* <!-- End Stats Item --> */}

          <div className="col-lg-3 col-6">
            <div className="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" id="workers" data-purecounter-end="32" data-purecounter-duration="1" ></span>
              <p>Всего</p>
            </div>
          </div>
          {/* <!-- End Stats Item --> */}

        </div>
      </div>

      <div className="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
        <img src="assets/img/hero-img.svg" className="img-fluid mb-3 mb-lg-0" alt=""/>
      </div>

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
              <img src="assets/img/storage-service.jpg" alt="" className="img-fluid"/>
            </div>
            <h3><a href="service-details.html" className="stretched-link">АВТОМОБИЛЬНЫЕ</a></h3>
            <p>Один из самых удобных и экономичных видов доставки грузов-автомобильные грузоперевозки. Доставка автомобильным транспортом лидирует среди других видов транспортировки</p>
          </div>
        </div>
        {/* <!-- End Card Item --> */}
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
          <div className="card">
            <div className="card-img">
              <img src="assets/img/logistics-service.jpg" alt="" className="img-fluid"/>
            </div>
            <h3><a href="service-details.html" className="stretched-link">АВИА ПЕРЕВОЗКИ</a></h3>
            <p>Компания "Ethno Logistics" предоставляет высококачественные услуги "авиаперевозки". Закажите авиаперевозку груза в нашей компании</p>
          </div>
        </div>
        {/* <!-- End Card Item --> */}

        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
          <div className="card">
            <div className="card-img">
              <img src="assets/img/cargo-service.jpg" alt="" className="img-fluid"/>
            </div>
            <h3><a href="service-details.html" className="stretched-link">УПАКОВКА</a></h3>
            <p>Дополнительная упаковка обеспечивает наибольшую сохранность груза, а так же при необходимости мы можем сделать маркировку товара</p>
          </div>
        </div>
        {/* <!-- End Card Item --> */}
{/* 
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
          <div className="card">
            <div className="card-img">
              <img src="assets/img/trucking-service.jpg" alt="" className="img-fluid"/>
            </div>
            <h3><a href="service-details.html" className="stretched-link">Trucking</a></h3>
            <p>Dicta quam similique quia architecto eos nisi aut ratione aut ipsum reiciendis sit doloremque oluptatem aut et molestiae ut et nihil</p>
          </div>
        </div>
        {/* <!-- End Card Item --> */}

        {/* <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
          <div className="card">
            <div className="card-img">
              <img src="assets/img/packaging-service.jpg" alt="" className="img-fluid"/>
            </div>
            <h3><a href="service-details.html" className="stretched-link">Packaging</a></h3>
            <p>Illo consequuntur quisquam delectus praesentium modi dignissimos facere vel cum onsequuntur maiores beatae consequatur magni voluptates</p>
          </div>
        </div> */}
        {/* <!-- End Card Item --> */}

        {/* <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
          <div className="card">
            <div className="card-img">
              <img src="assets/img/warehousing-service.jpg" alt="" className="img-fluid"/>
            </div>
            <h3><a href="service-details.html" className="stretched-link">Warehousing</a></h3>
            <p>Quas assumenda non occaecati molestiae. In aut earum sed natus eatae in vero. Ab modi quisquam aut nostrum unde et qui est non quo nulla</p>
          </div>
        </div>  */}
        {/* <!-- End Card Item --> */}

      </div>

    </div>
  </section>

  {/* <!-- ======= About Us Section ======= --> */}
  <section id="about" className="about pt-0">
    <div className="container" data-aos="fade-up">

      <div className="row gy-4">
        <div className="col-lg-6 position-relative align-self-start order-lg-last order-first">
          <img src="assets/img/about.jpg" className="img-fluid" alt=""/>
          <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn"></a>
        </div>
        <div className="col-lg-6 content order-last  order-lg-first">
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
                <p>Наша компания работает на рынке логистических услуг с 2005 года и зарекомендовала себя как надежный Партнер</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </section>
  {/* <!-- End About Us Section --> */}

  
<CallToAction/>

 

  {/* <!-- ======= Frequently Asked Questions Section ======= --> */}
  {/* <section id="faq" className="faq">
    <div className="container" data-aos="fade-up">

      <div className="section-header">
        <span>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</span>
        <h2>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>

      </div>

      <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200">
        <div className="col-lg-10">

          <div className="accordion accordion-flush" id="faqlist">

            <div className="accordion-item">
              <h3 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                  <i className="bi bi-question-circle question-icon"></i>
                  Non consectetur a erat nam at lectus urna duis?
                </button>
              </h3>
              <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                <div className="accordion-body">
                  Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h3 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                  <i className="bi bi-question-circle question-icon"></i>
                  Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?
                </button>
              </h3>
              <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                <div className="accordion-body">
                  Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h3 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                  <i className="bi bi-question-circle question-icon"></i>
                  Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?
                </button>
              </h3>
              <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                <div className="accordion-body">
                  Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h3 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                  <i className="bi bi-question-circle question-icon"></i>
                  Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                </button>
              </h3>
              <div id="faq-content-4" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                <div className="accordion-body">
                  <i className="bi bi-question-circle question-icon"></i>
                  Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h3 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
                  <i className="bi bi-question-circle question-icon"></i>
                  Tempus quam pellentesque nec nam aliquam sem et tortor consequat?
                </button>
              </h3>
              <div id="faq-content-5" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                <div className="accordion-body">
                  Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  </section> */}
  {/* <!-- End Frequently Asked Questions Section --> */}

</main>
{/* <!-- End #main --> */}

{/* <!-- ======= Footer ======= --> */}
<Footer/>

</div>
    </Fragment>
    )
}

export default Index;