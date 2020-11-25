import React, { Component } from 'react'
import api from '../api'
import TextField from '@material-ui/core/TextField';

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})`
    color: #8CA2B7;
    font-family: cursive;
    text-align: center;
`

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`
const Center = styled.div.attrs({
    className: 'formul',
})`
    text-align: center;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class ProductsUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: this.props.match.params.id,
            price: '',
            type: '',
            rating: '',
            warranty_years:'',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputPrice = async event => {
        const price = event.target.value
        this.setState({ price })
    }

    handleChangeInputRating = async event => {
        const rating = event.target.value
        this.setState({ rating })
    }

    handleChangeInputType = async event => {
        const type = event.target.value
        this.setState({ type })
    }

    handleChangeInputWarranty = async event => {
        const warranty_years = event.target.value
        this.setState({ warranty_years })
    }

    handleUpdateProduct = async () => {
        const { name, price, type, rating, warranty_years } = this.state
        const payload = { name, price, type, rating, warranty_years }

        await api.updateProductByNumeroProduct(name, payload).then(res => {
            window.alert(`Product updated successfully`)
            this.setState({
                name:'',
                price: '',
                type: '',
                rating: '',
                warranty_years:'',
            })
        })
    }

    componentDidMount = async () => {
        const { NameProduct } = this.state
        const product = await api.getProductByNumeroProduct(NameProduct)

        this.setState({
            name: product.data.data.name,
            price: product.data.data.price,
            type: product.data.data.type,
            rating: product.data.data.rating,
            warranty_years: product.data.data.warranty_years,
        })
    }

    render() {
        const { name, type, price, rating, warranty_years } = this.state
        return (
            <Wrapper>
            <Center>

            <Title>Update Product</Title>

            <div style={{marginBottom:'20px'}}>
                <TextField 
                id="outlined-basic" 
                label="Name" 
                variant="outlined"
                value={name}
                onChange={this.handleChangeInputName}
                />
            </div>
            <div style={{marginBottom:'20px'}}>
                <TextField 
                id="outlined-basic" 
                label="Price" 
                variant="outlined"
                value={price}
                onChange={this.handleChangeInputPrice}
                />
            </div>
            <div style={{marginBottom:'20px'}}>
                <TextField 
                id="outlined-basic" 
                label="Warranty_years" 
                variant="outlined"
                value={warranty_years}
                onChange={this.handleChangeInputWarrantyYears}
                />
            </div>
            <div style={{marginBottom:'20px'}}>
                <TextField 
                id="outlined-basic" 
                label="Type" 
                variant="outlined"
                value={type}
                onChange={this.handleChangeInputType}
                />
            </div>
            <div style={{marginBottom:'20px'}}>
                <TextField 
                id="outlined-basic" 
                label="Rating" 
                variant="outlined"
                value={rating}
                defaultValue='0'
                onChange={this.handleChangeInputRating}
                />
            </div>

            <Button onClick={this.handleUpdateProduct}>Update Product</Button>
            <CancelButton href={'/'}>Accueil</CancelButton>
            </Center>
            </Wrapper>
        )
    }
}

export default ProductsUpdate