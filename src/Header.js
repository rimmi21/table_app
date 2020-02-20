import React, { Component } from 'react';
import { Navbar, Jumbotron } from 'reactstrap';

export default class Header extends React.Component {

    
    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <h1>The Table App</h1>
                    </div>
                </Navbar>
                <br/><br/>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Hello There !</h1>
                                <p>Well in the table i have displayed a few cast crew of The X-men Series hehe !</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <br/>
            </React.Fragment>
        );
    }
}