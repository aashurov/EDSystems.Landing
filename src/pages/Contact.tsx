import React, { Fragment } from "react";
import Footer from "./Footer";
import Menu from "./Menu";
 
const myComponentStyle = {  
    border: 0,  
    width: '100%',  
    height: '340px'  
 }  

function Contact(){
    
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
              <h2>Контакты</h2>
              {/* <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p> */}
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div className="container">
          <ol>
            <li><a href="index.html">Главная</a></li>
            <li>Контакты</li>
          </ol>
        </div>
      </nav>
    </div>
    {/* <!-- End Breadcrumbs --> */}

    {/* <!-- ======= Contact Section ======= --> */}
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div>
             </div>
        {/* <!-- End Google Maps --> */}

        <div className="row gy-4 mt-4">

            <div className="row">
                <div className="col-6">
                    
                    <div className="card mb-3 border">
                        <div className="p-3">
                            <div className="row mb-2">
                                <div className="col fw-bold">
                                    Адрес в Российской Федерации
                                </div>
                                <div className="col text-primary text-end">
                                    г. Москва,
                                </div>
                            </div>
                            <div className="text-muted">
                            Академический р-н, ул. Винокурова 7/5, корпус 3, индекс 117449
                            </div>
                            <div className="text-primary">
                                <a href="tel:+79266800899">
                                    +79266800899
                                </a>
                            </div>
                        </div>
                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe width="100%" height="220" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.0214457437337!2d37.583868899914265!3d55.68861490359949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54ca3435babeb%3A0x6a3a6f2711b92ae7!2z0YPQuy4g0JLQuNC90L7QutGD0YDQvtCy0LAsIDcvNSDQutC-0YDQv9GD0YEgMiwgMywg0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8sIDExNzQ0OQ!5e0!3m2!1sru!2s!4v1693243852939!5m2!1sru!2s" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0}>
                                </iframe>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3 border">
                        <div className="p-3">
                            <div className="row mb-2">
                                <div className="col fw-bold">
                                    Адрес в Республики Узбекистан
                                </div>
                                <div className="col text-primary text-end">
                                    г. Ташкент
                                </div>
                            </div>
                            <div className="text-muted">
                                Юнусабадский р-н, улица Богиравон 55, здание Modern Stroy
                            </div>
                            <div className="text-primary">
                                <a href="tel:+998555202020">+998 55 5202020</a>
                            </div>
                        </div>

                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe width="100%" height="220" loading="lazy" style={{border:0}} id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.266850222974!2d69.26393462766958!3d41.34655322130514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d54bbcf0563%3A0x7b31eea32bd03618!2sModern%20Stroy!5e0!3m2!1sru!2s!4v1693243972070!5m2!1sru!2s" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0}>
                                </iframe>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card mb-3 border">
                        <div className="p-3">
                            <div className="row mb-2">
                                <div className="col fw-bold">
                                    Адрес в Республики Казахстан
                                </div>
                                <div className="col text-primary text-end">
                                    г. Алматы
                                </div>
                            </div>
                            <div className="text-muted">
                                ул. Тургута Озала 245, почтовый индекс A15T3F1 (050046)
                            </div>
                            <div className="text-primary">
                                <a href="tel:+77073659559">+77073659559</a>
                            </div>
                        </div>

                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe width="100%" height="220" loading="lazy" style={{border:0}} id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.75600825244!2d76.87791769741854!3d43.23557499667354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3883690ff8bfcc5f%3A0x88346367bc52522!2z0YPQu9C40YbQsCDQotGD0YDQs9GD0YLQsCDQntC30LDQu9CwIDI0NSwg0JDQu9C80LDRgtGLIDA1MDAwMCwg0JrQsNC30LDRhdGB0YLQsNC9!5e0!3m2!1sru!2s!4v1693244062395!5m2!1sru!2s" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0}>
                                </iframe>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-6">

                    <div className="card mb-3 border">
                        <div className="p-3">
                            <div className="row mb-2">
                                <div className="col fw-bold">
                                    Адрес в Республики Казахстан
                                </div>
                                <div className="col text-primary text-end">
                                    г. Алматы
                                </div>
                            </div>
                            <div className="text-muted">
                                ул. Тургута Озала 245, почтовый индекс A15T3F1 (050046)
                            </div>
                            <div className="text-primary">
                                <a href="tel:+77073659559">+77073659559</a>
                            </div>
                        </div>

                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe width="100%" height="220" loading="lazy" style={{border:0}} id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.75600825244!2d76.87791769741854!3d43.23557499667354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3883690ff8bfcc5f%3A0x88346367bc52522!2z0YPQu9C40YbQsCDQotGD0YDQs9GD0YLQsCDQntC30LDQu9CwIDI0NSwg0JDQu9C80LDRgtGLIDA1MDAwMCwg0JrQsNC30LDRhdGB0YLQsNC9!5e0!3m2!1sru!2s!4v1693244062395!5m2!1sru!2s" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0}>
                                </iframe>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3 border">
                        <div className="p-3">
                            <div className="row mb-2">
                                <div className="col fw-bold">
                                    Адрес в Республики Кыргызстан
                                </div>
                                <div className="col text-primary text-end">
                                    г. Бишкек
                                </div>
                            </div>
                            <div className="text-muted">
                                Жибек-Жолу 443/1А
                            </div>
                            <div className="text-primary">
                                <a href="tel:+996999441111">+996999441111</a>
                            </div>
                        </div>

                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe width="100%" height="220" loading="lazy" style={{border:0}} id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.4472344277656!2d74.60293137770977!3d42.88450997114909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7ef4c9c6b79%3A0xcfa214232cc79b75!2zMdCwLCA0NDMg0L_RgNC-0YHQvy4g0JbQuNCx0LXQuiDQltC-0LvRgywg0JHQuNGI0LrQtdC6LCDQmtGL0YDQs9GL0LfRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1693244114064!5m2!1sru!2s" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0}>
                                </iframe>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3 border">
                        <div className="p-3">
                            <div className="row mb-2">
                                <div className="col fw-bold">
                                    Адрес в Турции
                                </div>
                                <div className="col text-primary text-end">
                                    г. Стамбул
                                </div>
                            </div>
                            <div className="text-muted">
                                р-н Fatih, ул. Katip Kasim mah. Hadım Odaları Sk, индекс: 34130 9/101,
                            </div>
                            <div className="text-primary">
                                <a href="tel:+99245822720">+99245822720</a>
                            </div>
                        </div>

                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe width="100%" height="220" loading="lazy" style={{border:0}} id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.8571392976346!2d28.953165077660838!3d41.006499971351026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9871fd2367b%3A0xfec6f6cc8d58b2dc!2zSGFkxLFtIE9kYWxhcsSxIFNrLiBPdG9wYXJrxLE!5e0!3m2!1sru!2s!4v1693244181857!5m2!1sru!2s" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0}>
                                </iframe>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
<div className="row">
    <div className="col-md-12">
        <div className="card bg-primary-light p-4 mb-3">
            <div className="mb-3">
                <h3>Напишите нам</h3>
                <div className="text-muted">Мы будем рады ответить на ваши вопросы, для этого заполните форму ниже.</div>
            </div>

            <form method="post" rel="submit" data-controller="contacts.send">

                <div className="alert alert-danger d-none" role="alert">
                    Произошла непредвиденная ошибка. Повторите попытку позже
                </div>

                <div className="alert alert-success d-none" role="alert">
                    Сообщение успешно отправлено! Наши менеджеры обязательно свяжутся с Вами и ответят на все Ваши вопросы.
                </div>


                <div className="mb-3">
                    <label htmlFor="name" className="form-label required">Имя</label>
                    <input type="text" name="name" className="form-control" placeholder="Ваше имя" />
                </div>

                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <label className="form-label required" htmlFor="input-phone">Номер телефона</label>
                            <input type="text" name="phone" id="input-phone" className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label required">E-mail</label>
                            <input type="email" name="email" className="form-control" placeholder="на который придет ответ" />
                            <div className="invalid-feedback">
                                Введите @-mail
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="message" className="form-label required">Сообщение</label>
                    <textarea id="message" name="message" className="form-control" rows={5} placeholder="Сообщения"></textarea>
                    <div className="invalid-feedback">
                        Введите сообщение
                    </div>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary btn-block">
                        <div className="text-progress">
                            <span className="spinner"></span>
                        </div>
                        <div className="text-complete">Отправить сообщение</div>
                    </button>                        </div>
                <input type="hidden" name="method" value="sendMessage"/>
            </form>
        </div>

        <div className="text-muted mb-5 text-md">
            <div>Хотите быстро получить ответ на свой вопрос?</div>
            <p>
                Изучите раздел сайта <a href="#" target="_blank">Вопросы-ответы</a>, в котором мы собрали ответы на самые популярные вопросы.
            </p>

            Если ваш вопрос связан с тем, когда внесут входящую посылку в систему, то напоминаем, что на внесение груза нам нужно 1-2 рабочих дня, в редких случаях чуть больше. Советуем писать по этому вопросу только если груз не внесен более 3-х дней.
        </div>
    </div>
</div>
         
          {/* <!-- End Contact Form --> */}

        </div>

      </div>
    </section>
    {/* <!-- End Contact Section --> */}

  </div>
  {/* <!-- End #main --> */}
       <Footer/>
    </Fragment>
    )
}

export default Contact;