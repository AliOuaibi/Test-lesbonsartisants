import React, { Component } from 'react'
import styled from 'styled-components'

const Titre = styled.h1.attrs({
    className: 'h3',
})`
    color: #343a40;
    font-family: cursive;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
    width:10%;
`

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: "",
            filtred: [],
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let test = e.target.value;
        let finalData = [];
        this.props.filterdata();
        if (e.target.value !== "") {
            this.props.products.find(item => {
                if (item.name.includes(test) || item.type.includes(test)) {
                    finalData.push(item)
                    this.props.filterdata(finalData);
                }
            })
        }
    }

    render() {
        return (
            <div>
                <Titre>Search a product</Titre>
                <InputText type="text" onChange={this.handleChange} placeholder="Search..." />
            </div>
        )
    }

}

export default Search