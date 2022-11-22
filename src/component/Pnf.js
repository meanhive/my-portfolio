import React from 'react'
import { NavLink } from 'react-router-dom';

function Pnf() {
  return (
   <section id="pnf" className="d-flex align-items-center">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1 className="display-3 text-danger">OOPS! Something Went Wrong</h1>
                    <h3 className="display-5 text-warning">Requested Path Not Found</h3>
                    <h4 className="display-6 text-danger">404 Error</h4>
                    <NavLink to={`/`} className="btn btn-success">Return Home</NavLink>
                </div>
            </div>
        </div>
   </section>
  )
}

export default Pnf