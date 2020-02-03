import React, {Component} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from "./Card";

class ListProducts extends Component {

    constructor(props) {
        super(props);
        this.state= {
            products: []
        };
    }

    componentDidMount() {
        console.log('Here');
        axios
            .get('http://localhost:8082/api/product/')
            .then(r => {
                console.log('Product:'+ JSON.stringify(r));
                this.setState({
                    products: r.data
                })
            })
            .catch(e => {
                console.log(e);
            })
    }

    render () {
        const products= this.state.products;
        console.log('All Products: '+products);
        let productList;

        if(!products)
            productList= "No products recorded";
        else {
            productList= products.map((product, p) =>
                <Card product={product} key={p} />
            );
        }

        return (
            <div className='products'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <br/>
                            <h2 className='display-4 text-center'>Products</h2>
                        </div>
                        <div className='col-md-11'>
                            <Link to='/product/new' className='btn btn-outline-warning float-right'>
                                + New Product
                            </Link>
                            <br/>
                            <br/>
                            <hr/>
                        </div>
                    </div>
                    <div className='list'>
                        {productList}
                    </div>
                </div>
            </div>
        );
    }
}

export default ListProducts;