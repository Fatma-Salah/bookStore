import Image from '../images/login1.png';
function Login(){
    return(
        <>
            <div className="col-md-8 col-sm-12 m-auto my-4">
                
                                        <form method="post" className="p-2 ">
                                            <div className=" text-center mb-2">
                                                <h4 className=" text-primary my-4"> Log in </h4>
                                                <img className="img-fluid col-md-7 col-lg-5 col-sm-10" src={Image} alt="" height="100px" />
                                             
                                            </div>
                                              <div  className="form-group mt-3 ">
                                            <input className=" my-2" type="text" name="first_name" placeholder="First name" />
                                            <br/><input className=" my-2 " type="text" name="last_name" placeholder="Last name"  />
                                           <br/> <input className=" my-2" name="email" placeholder="E-mail " type="email" />
                                           
                                            <br/><input className=" my-2" name="phone" placeholder="Phone number" type="number" />
                                       
                                           <br/> <input className=" my-2" type="password" name="password" placeholder="Password" />
                                
                                           <br/> <input className=" my-2" type="password" name="password_confirmation" placeholder="Confirm your password" />
                                           <label for="sel" className='p-3'> Gender</label>
                                            <select id="sel" name="gender" className="form-control mt-2 " >
                                                <option  value="m">male</option>
                                                <option  value="f">female</option>
                                            </select>
                                        </div>
                                        <div className="d-grid gap-2 d-md-block text-center my-5">
                                             <button className="btn btn-outline-success ml-5" type="button">Register</button>
                                          </div>
                                        </form>
                                    </div>
        </>
    )
}
export default Login;