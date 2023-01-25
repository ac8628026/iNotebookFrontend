import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  let navigate = useNavigate();

  const [cridentials, setcridentials] = useState({ name: "", email: "", password: "" })
  const onChange = (e) => {
    setcridentials({ ...cridentials, [e.target.name]: e.target.value })
  }
  const handlesubmit = async(e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/auth/createuser', {
            method: 'POST',
            headers: {
                 'Content-Type': 'application/json'
            },
            body: JSON.stringify({name:cridentials.name, email:cridentials.email,password:cridentials.password })

       });
       const json = await response.json()

        console.log(json);
        setcridentials({  name: "", email: "", password: ""  })
        navigate('/login');
        
        setTimeout(function() { alert("succeccfully signed Up  Login for notes")
        ; }, 2000);
        
  }


  return (

    <div>
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

                                            <form   onSubmit={handlesubmit}>

                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <i className="fas fa-cubes fa-2x me-3"></i>
                                                    <span className="h1 fw-bold mb-0">iNotebook</span>
                                                </div>

                                                <h5 className="fw-normal mb-3 pb-3" >Sign Up your account</h5>
                                                
                                                <div className="form-outline mb-4">
                                                    <input type="text" id="name" className="form-control form-control-lg"
                                                    aria-describedby="emailHelp" placeholder="Enter your Name" name='name'value={cridentials.name} onChange={onChange}
                                                    required minLength={3} />
                                                    <label className="form-label" htmlFor="name">Email address</label>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input type="email" id="email" className="form-control form-control-lg"
                                                    aria-describedby="emailHelp" placeholder="Enter email" name='email'  value={cridentials.email} onChange={onChange} 
                                                    required minLength={5}/>
                                                    <label className="form-label" htmlFor="email">Email address</label>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="password" id="password" className="form-control form-control-lg"
                                                    value={cridentials.password} placeholder="Password" name='password' onChange={onChange}
                                                    required minLength={5}/>
                                                    <label className="form-label" htmlFor="password">Password</label>
                                                </div>

                                                <div className="pt-1 mb-4">
                                                    <button className="btn btn-dark btn-lg btn-block" type="submit" >Sign Up</button>
                                                </div>

                                                
                                               
                                               
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

export default Signup
