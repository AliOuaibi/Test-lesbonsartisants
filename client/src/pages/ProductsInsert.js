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

class ProductsInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            NumeroBillet: '',
            titre: '',
            prix: '',
            description:'',
            type:'',
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

    handleChangeInputWarrantyYears = async event => {
        const warranty_years = event.target.value
        this.setState({ warranty_years })
    }

    handleChangeInputType = async event => {
        const type = event.target.value
        this.setState({ type })
    }

    handleChangeInputRating = async event => {
        const rating = event.target.value
        this.setState({ rating })
    }

    handleIncludeProduct = async () => {
        const { name, price, warranty_years, type, rating } = this.state
        const payload = { name, price, warranty_years, type, rating }
        console.log(payload,'test');
        

        await api.insertProduct(payload).then(res => {
            window.alert(`Product inserted successfully`)
            this.setState({
                name: '',
                price:'',
                warranty_years: '',
                type:'',
                rating:''
            })
        })
    }

    render() {
        const { name, price, warranty_years, type, rating } = this.state
        return (
            <Wrapper>
                <Title>Create Product</Title>
                <Center>
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

                    <Button onClick={this.handleIncludeProduct}>Add Product</Button>
                    <CancelButton href={'/'}>Accueil</CancelButton>
                </Center>
            </Wrapper>
        )
    }
}

export default ProductsInsert