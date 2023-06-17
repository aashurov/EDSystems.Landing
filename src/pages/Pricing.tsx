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
              <h2>Pricing</h2>
              <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
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

    {/* <!-- ======= Pricing Section ======= --> */}
    <section id="pricing" className="pricing">
      <div className="container" data-aos="fade-up">

        <div className="row gy-4">

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="pricing-item">
              <h3>Free Plan</h3>
              <h4><sup>$</sup>0<span> / month</span></h4>
              <ul>
                <li><i className="bi bi-check"></i> Quam adipiscing vitae proin</li>
                <li><i className="bi bi-check"></i> Nec feugiat nisl pretium</li>
                <li><i className="bi bi-check"></i> Nulla at volutpat diam uteera</li>
                <li className="na"><i className="bi bi-x"></i> <span>Pharetra massa massa ultricies</span></li>
                <li className="na"><i className="bi bi-x"></i> <span>Massa ultricies mi quis hendrerit</span></li>
              </ul>
              <a href="#" className="buy-btn">Buy Now</a>
            </div>
          </div>
          {/* <!-- End Pricing Item --> */}

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="pricing-item featured">
              <h3>Business Plan</h3>
              <h4><sup>$</sup>29<span> / month</span></h4>
              <ul>
                <li><i className="bi bi-check"></i> Quam adipiscing vitae proin</li>
                <li><i className="bi bi-check"></i> Nec feugiat nisl pretium</li>
                <li><i className="bi bi-check"></i> Nulla at volutpat diam uteera</li>
                <li><i className="bi bi-check"></i> Pharetra massa massa ultricies</li>
                <li><i className="bi bi-check"></i> Massa ultricies mi quis hendrerit</li>
              </ul>
              <a href="#" className="buy-btn">Buy Now</a>
            </div>
          </div>
          {/* <!-- End Pricing Item --> */}

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div className="pricing-item">
              <h3>Developer Plan</h3>
              <h4><sup>$</sup>49<span> / month</span></h4>
              <ul>
                <li><i className="bi bi-check"></i> Quam adipiscing vitae proin</li>
                <li><i className="bi bi-check"></i> Nec feugiat nisl pretium</li>
                <li><i className="bi bi-check"></i> Nulla at volutpat diam uteera</li>
                <li><i className="bi bi-check"></i> Pharetra massa massa ultricies</li>
                <li><i className="bi bi-check"></i> Massa ultricies mi quis hendrerit</li>
              </ul>
              <a href="#" className="buy-btn">Buy Now</a>
            </div>
          </div>
          {/* <!-- End Pricing Item --> */}

        </div>

      </div>
    </section>
    {/* <!-- End Pricing Section --> */}

    {/* <!-- ======= Horizontal Pricing Section ======= --> */}
    <section id="horizontal-pricing" className="horizontal-pricing pt-0">
      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <span>Horizontal Pricing</span>
          <h2>Horizontal Pricing</h2>

        </div>

        <div className="row gy-4 pricing-item" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-3 d-flex align-items-center justify-content-center">
            <h3>Free Plan</h3>
          </div>
          <div className="col-lg-3 d-flex align-items-center justify-content-center">
            <h4><sup>$</sup>0<span> / month</span></h4>
          </div>
          <div className="col-lg-3 d-flex align-items-center justify-content-center">
            <ul>
              <li><i className="bi bi-check"></i> Quam adipiscing vitae proin</li>
              <li><i className="bi bi-check"></i> Nulla at volutpat diam uteera</li>
              <li className="na"><i className="bi bi-x"></i> <span>Pharetra massa massa ultricies</span></li>
            </ul>
          </div>
          <div className="col-lg-3 d-flex align-items-center justify-content-center">
            <div className="text-center"><a href="#" className="buy-btn">Buy Now</a></div>
          </div>
        </div>
        {/* <!-- End Pricing Item --> */}

        <div className="row gy-4 pricing-item featured mt-4" data-aos="fade-up" data-aos-delay="200">
          <div className="col-lg-3 d-flex align-items-center justify-content-center">
            <h3>Business Plan</h3>
          </div>
          <div className="col-lg-3 d-flex align-items-center justify-content-center">
            <h4><sup>$</sup>29<span> / month</span></h4>
          </div>
          <div className="col-lg-3 d-flex align-items-center justify-content-center">
            <ul>
              <li><i className="bi bi-check"></i> Quam adipiscing vitae proin</li>
              <li><i className="bi bi-check"></i> <strong>Nec feugiat nisl pretium</strong></li>
              <li><i className="bi bi-check"></i> Nulla at volutpat diam uteera</li>
            </ul>
          </div>
          <div className="col-lg-3 d-flex align-items-center justify-content-center">
            <div className="text-center"><a href="#" className="buy-btn">Buy Now</a></div>
          </div>
        </div>
        {/* <!-- End Pricing Item --> */}

        <div className="row gy-4 pricing-item mt-4" data-aos="fade-up" data-aos-delay="300">
          <div className="col-lg-3 d-flex align-items-center justify-content-center">
            <h3>Developer Plan</h3>
          </div>
          <div className="col-lg-3 d-flex align-items-center justify-content-center">
            <h4><sup>$</sup>49<span> / month</span></h4>
          </div>
          <div className="col-lg-3 d-flex align-items-center justify-content-center">
            <ul>
              <li><i className="bi bi-check"></i> Quam adipiscing vitae proin</li>
              <li><i className="bi bi-check"></i> Nec feugiat nisl pretium</li>
              <li><i className="bi bi-check"></i> Nulla at volutpat diam uteera</li>
            </ul>
          </div>
          <div className="col-lg-3 d-flex align-items-center justify-content-center">
            <div className="text-center"><a href="#" className="buy-btn">Buy Now</a></div>
          </div>
        </div>
        {/* <!-- End Pricing Item --> */}

      </div>
    </section>
    {/* <!-- End Horizontal Pricing Section --> */}

  </div>
  {/* <!-- End #main --> */}
       <Footer/>
    </Fragment>
    )
}

export default Pricing;