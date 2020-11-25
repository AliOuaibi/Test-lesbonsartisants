import React, { Component } from 'react'
import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})`
    color: #343a40;
    font-family: cursive;
    text-align: center;
    margin-bottom: 35px;
    margin-top:-30px;
`

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
    color: #343a40;
    font-family: cursive;
`
const Center = styled.div.attrs({
    className: 'formul',
})`
`

class Acceuil extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         login: '',
    //         password: '',
    //         afficher: false,
    //     }
    // }

    render (){
            return (
                <div>
                <Wrapper>
                <Center>
                    <Title>Bienvenue dans le Test</Title>
                        <p style={{textAlign:'center', width: '400px', marginRight:'auto', marginLeft:'auto'}}>
                            Bonjour je m'appelle Ali 28ans, je suis étudiant en 2ème année chez Epitech formation développeur web.
                        </p>
                        <p 
                        style={{textAlign:'center', width: '400px', marginRight:'auto', marginLeft:'auto'}}>
                            À la recherche d'une alternance pour cette 2ème année, 
                            j'aimerais bien intègrer votre entreprise mais tout d'abord j'ai du effectuer 
                            le test que vous m'aviez demander de faire donce je vous laisse parcourir ce blog 
                            et mon code que vous trouverez sur ce <a href='https://github.com/AliOuaibi'>lien</a>.
                        </p>
                </Center>
                </Wrapper>
                </div>
            )
    }
}

export default Acceuil