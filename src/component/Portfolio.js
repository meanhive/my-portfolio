import React from 'react'

export default function Portfolio(props) {
    return (
        <section id="portfolio" className='mt-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="display-3 text-teal">Portfolio</h3>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="row g-0">
                                <div className="col-md-6">
                                    <img src={`https://picsum.photos/400/400`} alt="project-1" className="img-fluid rounded-start" />
                                </div>
                                <div className="col-md-6">
                                    <h4 className='text-center text-teal'>CMS-v1.0</h4>
                                    <p className='text-secondary text-center'>
                                        MERN fullStack Conent Management System Project</p>
                                    <div className="d-flex justify-content-evenly">
                                        <a href="https://github.com/meanhive/cms-1.0" target={'_blank'} className="btn btn-sm btn-primary">Code</a>
                                        <a href="https://cms-version1.herokuapp.com" target={'_blank'} className="btn btn-sm btn-success">Live</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </section>
    )
}