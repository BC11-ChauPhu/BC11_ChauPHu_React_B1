import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
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
        )
    }
}
