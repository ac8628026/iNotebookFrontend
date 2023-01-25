import React, { useContext, useEffect } from 'react'

const About = () => {

  return (
    <div>

      <section className="mb-4">


        <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
        {/* <!--Section description--> */}
        <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
          a matter of hours to help you.</p>

        <div className="row">

          {/* <!--Grid column--> */}
          

          <div className="col text-center">
            <ul className="list-unstyled mb-0">
              <li><i className="fas fa-map-marker-alt fa-2x"></i>
                <p>address</p>
              </li>

              <li><i className="fas fa-phone mt-4 fa-2x"></i>
                <p>+91123456789</p>
              </li>

              <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>inotebook@gmail.com</p>
              </li>
            </ul>
          </div>


        </div>

      </section>
    </div>
  )
}

export default About