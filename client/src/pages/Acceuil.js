import React, { Component } from 'react'
import styled from 'styled-components'
import { withStyles } from "@material-ui/core/styles";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

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
const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const styles = (theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
});

class Acceuil extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            open: false,
            open2: false
        }
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen2 = this.handleOpen.bind(this);
        this.handleClose2 = this.handleClose.bind(this);
    }
    handleOpen = async () => {
        this.setState({ open: true });
    };
    
    handleClose = async () => {
        this.setState({ open: false });
    };

    handleOpen2 = async () => {
        this.setState({ open2: true });
    };
    
    handleClose2 = async () => {
        this.setState({ open2: false });
    };

    handleSubmitLogin = async (event) => {   
        try {
            axios.post(`http://localhost:4242/api/login`)
            .then((response) => {
                console.log(response,'data');
            }, (error) => {
                console.log(error);
            });
            
        } catch (error) {                                                                                                         
            console.log(error)
        }
        // console.log(event,'test data');
        event.preventDefault();
    }
     
    handleChange(event) {
        var value = event.target.value;
        var name = event.target.name;
        this.setState({
          [name]: value,
        });
        console.log(value,'name input');
    }

    render (){
        const { classes } = this.props;
            return (
                <div>
                <Wrapper>
                <Center>
                    <Title>Bienvenue dans le Test</Title>
                    <div>
                        <button type="button" onClick={this.handleOpen}>
                            Connexion
                        </button>

                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={classes.modal}
                            open={this.state.open}
                            onClose={this.handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                            timeout: 500,
                            }}
                        >

                        <Fade in={this.state.open}>
                        <div className={classes.paper}>
                            <h2 id="transition-modal-title">Connexion</h2>
                            <div style={{marginBottom:'20px'}}>
                                <TextField 
                                id="outlined-basic" 
                                label="Email" 
                                variant="outlined"
                                value={this.state.email}
                                name='email'
                                onChange={event => this.handleChange(event)}
                                />
                            </div>

                            <div style={{marginBottom:'20px'}}>
                                <TextField 
                                id="outlined-basic" 
                                label="Password" 
                                type="password"
                                variant="outlined"
                                name='password'
                                value={this.state.password}
                                onChange={event => this.handleChange(event)}
                                />
                            </div>

                            <Button onClick={this.handleSubmitLogin}>Valider</Button>
                        </div>
                        </Fade>
                    </Modal>
                    </div>

                    <div style={{marginTop:'30px'}}>
                        <button type="button" onClick={this.handleOpen2}>
                            Inscription
                        </button>
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={classes.modal}
                            open={this.state.open2}
                            onClose={this.handleClose2}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                            timeout: 500,
                            }}
                        >
                        <Fade in={this.state.open2}>
                        <div className={classes.paper}>
                            <h2 id="transition-modal-title">Inscription</h2>

                            <div style={{marginBottom:'20px'}}>
                                <TextField 
                                id="outlined-basic" 
                                label="Name" 
                                variant="outlined"
                                value={this.state.name}
                                name='name'
                                onChange={event => this.handleChange(event)}
                                />
                            </div>

                            <div style={{marginBottom:'20px'}}>
                                <TextField 
                                id="outlined-basic" 
                                label="Email" 
                                variant="outlined"
                                value={this.state.email}
                                name='email'
                                onChange={event => this.handleChange(event)}
                                />
                            </div>

                            <div style={{marginBottom:'20px'}}>
                                <TextField 
                                id="outlined-basic" 
                                label="Password" 
                                type="password"
                                variant="outlined"
                                name='password'
                                value={this.state.password}
                                onChange={event => this.handleChange(event)}
                                />
                            </div>

                            <Button onClick={this.handleSubmitRegister}>Valider</Button>
                        </div>
                        </Fade>
                    </Modal>
                    </div>
                </Center>
                </Wrapper>
                </div>
            )
    }
}

export default withStyles(styles)(Acceuil)
