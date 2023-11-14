import { Fragment } from "react";
import Footer from "./Footer";
import Menu from "./Menu";

function Breadcrumbs(){
    return(
     <Fragment>
        <Menu/>
          <div id="main">
            <div className="breadcrumbs">
              <div className="page-header d-flex align-items-center" style={{ backgroundImage:`url(${'assets/img/page-header.jpg'})` }}>
                <div className="container position-relative">
                  <div className="row d-flex justify-content-center">
                    <div className="col-lg-6 text-center">
                      <h2>About</h2>
                      <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
                    </div>
                  </div>
                </div>
              </div>
              <nav>
                <div className="container">
                  <ol>
                    <li><a href="index.html">Home</a></li>
                    <li>About</li>
                  </ol>
                </div>
              </nav>
           </div>
          </div>
        <Footer/>
      </Fragment>
    )
}

export default Breadcrumbs;