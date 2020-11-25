import React, { Component } from 'react'
// import api from '../../api/index'

import styled from 'styled-components'

const Update = styled.button.attrs({
    className: `btn btn-primary`,
})`
    cursor: pointer;
    margin: 15px 15px 15px 5px;
`

class UpdateProduct extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/product/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

export default UpdateProduct