import React, { Component, Fragment } from 'react'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container px-lg-5">
                        <a className="navbar-brand" href="#!">Start Bootstrap</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                                <li className="nav-item"><a className="nav-link" href="#!">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <header className="py-5">
                    <div className="container px-lg-5">
                        <div className="p-4 p-lg-5 bg-light rounded-3">
                            <div className="m-4 m-lg-5">
                                <h1 className="display-5">A Warm Welcome!</h1>
                                <p className="fs-4">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                                <a className="btn btn-primary btn-lg" href="#!">Call to action</a>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="pt-4">
                    <div className="cards container d-flex px-lg-5">
                        {/* Page Features*/}
                        <div className="card text-center">
                            <div className='sizes-bg'>
                                <span>500x325</span>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className='btn-wrapper'>
                                    <a href="#" className="go-btn btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>

                        <div className="card text-center">
                            <div className='sizes-bg'>
                                <span>500x325</span>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className='btn-wrapper'>
                                    <a href="#" className="go-btn btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>

                        <div className="card text-center">
                            <div className='sizes-bg'>
                                <span>500x325</span>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className='btn-wrapper'>
                                    <a href="#" className="go-btn btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>

                        <div className="card text-center">
                            <div className='sizes-bg'>
                                <span>500x325</span>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className='btn-wrapper'>
                                    <a href="#" className="go-btn btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer class="py-5 bg-dark">
                    <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
                </footer>


            </Fragment>
        )
    }
}
