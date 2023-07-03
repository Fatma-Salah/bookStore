
import './footer.css';
function Footer(){
return(
    <>
  <section className='footer'>
    <div className='head-footer d-flex justify-content-between'>

          <div className="text  mb-3  col-md-4 col-10">
                  <h4>Find us</h4>
                  <span>P.O. Box 11751 El Nasr St. Nasr City</span>
            
          </div>

          <div className="text mb-3  col-10 col-md-4">
                        <h4>Mail us</h4>
                        <span>mail@info.com</span>
          
          </div>
          <div className="text  mb-3  col-md-4 col-10">
                        <h4>Call us</h4>
                        <span>022 3089279</span>
              
          </div>
    </div>


    <div className='body-footer d-flex justify-content-between'>
    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">about</a></li>
                                <li><a href="#">services</a></li>
                                <li><a href="#">portfolio</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">Expert Team</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Latest News</a></li>
                            </ul>
                        </div>
    </div >

    <div className="footer-social-icon col-xl-4 col-lg-4 col-md-6">
                                <span>Follow us</span>
                                <a href="https://www.facebook.com"  target="_blank"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="https://www.twitter.com"  target="_blank"><i className="fab fa-twitter twitter-bg"></i></a>
                                <a href="https://www.google.com"  target="_blank"><i className="fab fa-google-plus-g google-bg"></i></a>
    </div>
    </div>

  </section>
    </>
);

}
export default Footer;