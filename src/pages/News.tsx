import React, {Fragment} from "react";
import Footer from "./Footer";
import Menu from "./Menu";
import {Link} from "react-router-dom";

function News() {
    return (
        <Fragment>
            <Menu/>
            <main id="main">

                {/* <!-- ======= Breadcrumbs ======= --> */}
                <div className="breadcrumbs">
                    <div className="page-header d-flex align-items-center"
                         style={{backgroundImage: `url(${'assets/img/page-header.jpg'})`}}>
                        <div className="container position-relative">
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-6 text-center">
                                    <h2>Новости компании</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav>
                        <div className="container">
                            <ol>
                                <li><Link to='/' className="active">Главная</Link></li>
                                <li>Новости</li>
                            </ol>
                        </div>
                    </nav>
                </div>
                {/* <!-- End Breadcrumbs --> */}


                {/* <!-- ======= Services Section ======= --> */}
                <section id="service" className="services pt-0">
                    <div className="container" data-aos="fade-up">

                        <div className="section-header">
                            <span>Новости компании</span>
                            <h2>Последние новости</h2>
                        </div>

                        <div className="row gy-4">

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                                <div className="card">
                                    <div className="card-img">
                                        <img src="assets/img/storage-service.jpg" alt="" className="img-fluid"/>
                                    </div>
                                    <h3><a href="service-details.html" className="stretched-link">Москва - Ташкент</a></h3>
                                    <p>Очередная партия грузов прибыла из Москвы в Ташкент. 22.08.2023</p>
                                </div>
                            </div>
                            {/* <!-- End Card Item --> */}

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                                <div className="card">
                                    <div className="card-img">
                                        <img src="assets/img/logistics-service.jpg" alt="" className="img-fluid"/>
                                    </div>
                                    <h3><a href="service-details.html" className="stretched-link">Ташкент - Москва</a></h3>
                                    <p>Очередная партия грузов отправлена из Ташкента в Москву. 20.08.2023</p>
                                </div>
                            </div>
                            {/* <!-- End Card Item --> */}

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                <div className="card">
                                    <div className="card-img">
                                        <img src="assets/img/cargo-service.jpg" alt="" className="img-fluid"/>
                                    </div>
                                    <h3><a href="service-details.html" className="stretched-link">Ташкент - Алматы</a></h3>
                                    <p>Очередная партия грузов отправлена из Ташкента в Алматы. 19.08.2023</p>
                                </div>
                            </div>
                            {/* <!-- End Card Item --> */}

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                                <div className="card">
                                    <div className="card-img">
                                        <img src="assets/img/trucking-service.jpg" alt="" className="img-fluid"/>
                                    </div>
                                    <h3><a href="service-details.html" className="stretched-link">Стамбул - Ташкент</a></h3>
                                    <p>Очередная партия грузов прибыла из Стамбула в Ташкент. 18.08.2023</p>
                                </div>
                            </div>
                            {/* <!-- End Card Item --> */}

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                                <div className="card">
                                    <div className="card-img">
                                        <img src="assets/img/packaging-service.jpg" alt="" className="img-fluid"/>
                                    </div>
                                    <h3><a href="service-details.html" className="stretched-link">Москва - Душанбе</a></h3>
                                    <p>Готовятся к оптравке посылки из Москвы в Душанбе. 17.08.2023</p>
                                </div>
                            </div>
                            {/* <!-- End Card Item --> */}

                            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                                <div className="card">
                                    <div className="card-img">
                                        <img src="assets/img/warehousing-service.jpg" alt="" className="img-fluid"/>
                                    </div>
                                    <h3><a href="service-details.html" className="stretched-link">Москва - Бишкек</a></h3>
                                    <p>Закончилась принятие заявок к оптравке посылок из Москвы в Бишкек. 15.08.2023</p>
                                </div>
                            </div>
                            {/* <!-- End Card Item --> */}

                        </div>

                    </div>
                </section>
                {/* <!-- End Services Section --> */}







            </main>
            {/* <!-- End #main --> */}
            <Footer/>
        </Fragment>
    )
}

export default News;