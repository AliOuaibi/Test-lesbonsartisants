import React, { Component } from 'react'
import api from '../../api/index'
import styled from 'styled-components'

const Delete = styled.button.attrs({
    className: `btn btn-danger`,
})`
    cursor: pointer;
    margin: 15px 15px 15px 5px;
`
class DeleteProduct extends Component {
    deleteUser = event => {
        event.preventDefault()

        var x =this.props.id
        console.log(x,'delete');
        if (
            window.confirm(
                `Do tou want to delete the product ${this.props.id} permanently?`,
            )
        ) {
            api.deleteProductByNumeroProduct(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

export default DeleteProduct