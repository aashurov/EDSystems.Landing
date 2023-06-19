import React, { Fragment } from "react";
import Footer from "./Footer";
import Menu from "./Menu";
 
const myComponentStyle = {  
    border: 0,  
    width: '100%',  
    height: '340px'  
 }  

function CallToAction(){
    
    return(
    <Fragment>
   {/* <!-- ======= Call To Action Section ======= --> */}
   <div id="call-to-action" className="call-to-action">
    <div className="container" data-aos="zoom-out">

      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <h3>Заказать услугу</h3>
          {/* <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
          <a className="cta-btn" href="#">Заказать услугу</a>
        </div>
      </div>

    </div>
  </div>
  {/* <!-- End Call To Action Section --> */}
    </Fragment>
    )
}

export default CallToAction;