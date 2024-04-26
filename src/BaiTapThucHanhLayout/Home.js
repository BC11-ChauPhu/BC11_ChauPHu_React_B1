import React, { Component, Fragment } from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Cards from './Cards'
import Footer from './Footer'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <Fragment>
                <Navbar/>
                <Header/>
                <Cards/>
                <Footer/>
            </Fragment>
        )
    }
}
