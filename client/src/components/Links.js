import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { SimpleMenu } from '.'


class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    TEST LesBonsArtisants
                </Link>
                <SimpleMenu/>
            </React.Fragment>
        )
    }
}

export default Links