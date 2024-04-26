import React, { Component } from 'react'

export default class Cards extends Component {
    render() {
        return (
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
        )
    }
}
