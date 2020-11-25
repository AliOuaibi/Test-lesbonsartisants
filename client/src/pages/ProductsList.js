import React from 'react'
import api from '../api'
// import Search from './Search'
import { withStyles } from "@material-ui/core/styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteProduct from './button/Delete'
import UpdateProduct from './button/Update'

const styles = (theme) => ({
    table: {
        minWidth: 500,
    },
    tableBackground: {
        backgroundColor: theme.palette.info.light,
    },
});

class ProductsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            isLoading: false,
        }
        // this.filterdata = this.filterdata.bind(this);
    }
    
    componentDidMount = async () => {
        this.setState({ isLoading: true })
        
        await api.getAllProducts().then(products => {
            // console.log(products.data.data,'apiiiii');
             this.setState({
                 products: products.data.data,
                 isLoading: false,                
             })
            })
    }

    render() {
        const { products } = this.state
        const { classes } = this.props;
        return (
            <div>
                <h1 style={{ textAlign: 'center', color: '#8CA2B7'}} >List of Product</h1>
                <TableContainer style={{ width: 800, margin: 'auto', backgroundColor: '#8CA2B7'}} component={Paper}>
                    <Table  aria-label="simple table">
                    <TableHead className={classes.tableBackground}>
                        <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Type</TableCell>
                        <TableCell align="right">Rating</TableCell>
                        <TableCell align="right">Warranty_years</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => {
                        return (
                        <TableRow>
                            <TableCell component="th" scope="row">
                            {product.name}
                            </TableCell>
                            <TableCell align="right">{product.price} €</TableCell>
                            <TableCell align="right">{product.type}</TableCell>
                            <TableCell align="right">{product.rating}</TableCell>
                            <TableCell align="right">{product.warranty_years}</TableCell>
                            <TableCell align="right"><DeleteProduct id={product.name}/></TableCell>
                            <TableCell align="right"><UpdateProduct id={product.name}/></TableCell>
                        </TableRow>
                        )})}
                    </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}

export default withStyles(styles)(ProductsList)