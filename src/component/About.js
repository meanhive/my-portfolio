import React from 'react'

const profile_image = "https://cdn-icons-png.flaticon.com/512/3048/3048127.png";

function About() {
  return (
   <section id="about" className="d-flex align-items-start">
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-teal">About</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-secondary">
                    <p className="text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid quaerat laboriosam dolor, minima officiis quas eligendi. Architecto, cumque neque omnis hic, id sed reiciendis unde, qui libero aliquid in?
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <img src={profile_image} alt="no image" className="card-img-top" />
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="card">
                        <div className="card-body bg-white">
                            <h5 className="text-center text-teal card-title">
                               Personal Details
                            </h5>
                            <p className="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi impedit sunt blanditiis quod obcaecati eius natus cum nam corrupti..</p>

                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <strong className="text-secondary">BirthDay</strong>
                                            <span className="text-teal float-end"> 15/12/1988 </span>
                                        </li>
                                        <li className="list-group-item">
                                            <strong className="text-secondary">Email</strong>
                                            <span className="text-teal float-end"> ganesh@be-practical.com </span>
                                        </li>
                                        <li className="list-group-item">
                                            <strong className="text-secondary">Mobile</strong>
                                            <span className="text-teal float-end"> 9482855864 </span>
                                        </li>
                                        <li className="list-group-item">
                                        <strong className="text-secondary">City</strong>
                                            <span className="text-teal float-end"> Bengaluru, Karnataka </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <strong className="text-secondary">Qualification</strong>
                                            <span className="text-teal float-end"> Masters (Pursuing) </span>
                                        </li>
                                        <li className="list-group-item">
                                            <strong className="text-secondary">Father Name</strong>
                                            <span className="text-teal float-end">  </span>
                                        </li>
                                        <li className="list-group-item">
                                            <strong className="text-secondary">Mother Name</strong>
                                            <span className="text-teal float-end">  </span>
                                        </li>
                                        <li className="list-group-item">
                                            <strong className="text-secondary">Marital Status</strong>
                                            <span className="text-teal float-end"> Married </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-teal">Skills</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <p>
                                        <strong className="text-secondary">HTML</strong>
                                        <strong className="text-teal float-end">98%</strong>
                                    </p>
                                    <div className="progress">
                                        <div className="progress-bar bg-success" style={{ width: '98%'}}>98%</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <p>
                                            <strong className="text-secondary">CSS</strong>
                                            <strong className="text-teal float-end">70%</strong>
                                        </p>
                                    <div className="progress">
                                        <div className="progress-bar bg-danger" style={{ width: '70%'}}>
                                            70%</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <p>
                                            <strong className="text-secondary">JavaScript</strong>
                                            <strong className="text-teal float-end">90%</strong>
                                        </p>
                                    <div className="progress">
                                        <div className="progress-bar bg-secondary" style={{ width: '90%'}}>
                                            90%</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <p>
                                            <strong className="text-secondary">Jquery</strong>
                                            <strong className="text-teal float-end">90%</strong>
                                        </p>
                                    <div className="progress">
                                        <div className="progress-bar bg-dark" style={{ width: '90%'}}>
                                            90%</div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <ul className="list-group">
                                     <li className="list-group-item">
                                    <p>
                                            <strong className="text-secondary">Bootstrap</strong>
                                            <strong className="text-teal float-end">98%</strong>
                                        </p>
                                    <div className="progress">
                                        <div className="progress-bar bg-danger" style={{ width: '98%'}}>
                                            98%</div>
                                    </div>
                                </li>

                                     <li className="list-group-item">
                                    <p>
                                            <strong className="text-secondary">React and Redux</strong>
                                            <strong className="text-teal float-end">90%</strong>
                                        </p>
                                    <div className="progress">
                                        <div className="progress-bar bg-info" style={{ width: '90%'}}>
                                            90%</div>
                                    </div>
                                </li>

                                     <li className="list-group-item">
                                    <p>
                                            <strong className="text-secondary">NodeJS</strong>
                                            <strong className="text-teal float-end">85%</strong>
                                        </p>
                                    <div className="progress">
                                        <div className="progress-bar bg-primary" style={{ width: '85%'}}>
                                            85%</div>
                                    </div>
                                </li>

                                     <li className="list-group-item">
                                    <p>
                                            <strong className="text-secondary">Express JS</strong>
                                            <strong className="text-teal float-end">92%</strong>
                                        </p>
                                    <div className="progress">
                                        <div className="progress-bar bg-secondary" style={{ width: '92%'}}>
                                            92%</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </section>
  )
}

export default About