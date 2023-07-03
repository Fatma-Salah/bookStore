function Contact(){
    return(
        <>
          <div id="contact" style={{backgroundColor:'gainsboro', height:'90vh'}} className=" pt-1" >
        <div className="row mt-5 px-5">
            <div className=" m-auto text-center  col-xl-5 col-lg-5 col-md-12 col-sm-12">
                <h1 className="p-3">Contact US</h1>
                <p>If you want to contact us to inquire about more of our services, complain, or have suggestions to improve the site Content development Enter all required data and it will be reviewed and answered as soon as possible</p>
            </div>

            <form className="row g-3 shadow mx-lg-2 col-xl-6 col-lg-6 col-md-12 col-sm-12 p-4">

                    <input type="email" className="form-control" placeholder="E-mail"/>
          
                    <input type="password" className="form-control" placeholder="Password" />

                    <input type="tel" className="form-control"  placeholder="Phone number" />

                    <label  className="form-label">MESSAGE CONTENT</label>
                    <textarea className="form-control "  rows="3" placeholder="message"></textarea>

                   <div className="d-flex  justify-content-center">
                    <input type="checkbox" style={{width:'20px'}} className=" d-inline-block"  />
                   <span> Remember me</span> 
                      
                    </div> 
                     <button type="submit" className="btn btn-outline-success">Send</button>

            </form>

        </div>
    </div>
        </>
    )
}
export default Contact;