import React from 'react'
import { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom';



const Login = () => {
    const [cridentials, setcridentials] = useState({email:"",password:""})
 const onChange = (e) => {
        setcridentials({...cridentials,[e.target.name]:e.target.value})
        
    }

    let navigate = useNavigate();

 const   handlesubmit=async(e)=>{

        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                 'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email:cridentials.email,password:cridentials.password })

       });
       const json = await response.json()

        
        if(json.success){
           localStorage.setItem('token',json.authtoken);
           navigate('/');
        }
        else{
           alert("not correct detials")
        }
        }
    return (
        <div >
            <section className="vh-100"  >
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card">
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                            alt="login form" className="img-fluid"  />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">

                                            <form  onSubmit={handlesubmit}>

                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <i className="fas fa-cubes fa-2x me-3"></i>
                                                    <span className="h1 fw-bold mb-0">iNotebook</span>
                                                </div>

                                                <h5 className="fw-normal mb-3 pb-3" >Sign into your account</h5>

                                                <div className="form-outline mb-4">
                                                    <input type="email" id="email" className="form-control form-control-lg"
                                                    aria-describedby="emailHelp" placeholder="Enter email" name='email' value={cridentials.email} onChange={onChange} />
                                                    <label className="form-label" htmlFor="email">Email address</label>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="password" id="password" className="form-control form-control-lg"
                                                    value={cridentials.password} placeholder="Password" name='password' onChange={onChange} />
                                                    <label className="form-label" htmlFor="password">Password</label>
                                                </div>

                                                <div className="pt-1 mb-4">
                                                    <button className="btn btn-dark btn-lg btn-block" type="submit" >Login</button>
                                                </div>

                                                
                                                <h5 className="mb-5 pb-lg-2" >Don't have an account? <Link to="/signup"
                                                   >Sign Up </Link> here</h5>
                                               
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
