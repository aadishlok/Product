import React, {Component} from "react";
import { Link } from "react-router-dom";
import '../App.css';
import axios from 'axios';

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state= {
          product: {}
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:8082/api/product/'+this.props.match.params.id)
            .then(res => {
                console.log("Product Data: "+JSON.stringify(res.data));
                this.setState({
                    product: res.data
                })
            })
            .catch(err => {
                console.log("Error fetching product details");
            })
    }

    onDeleteClick(productId) {
        axios.delete('http://localhost:8082/api/product/'+productId)
            .then(res => {
                this.props.history.push('/');
            })
            .catch(err => {
                console.log("Error deleting product.");
            })
    };

    render() {
        const product= this.state.product;
        let Item= <div>
            <table className="table table-hover table-dark">
                {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Name</td>
                        <td>{ product.name }</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Brand</td>
                        <td>{ product.brand }</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Description</td>
                        <td>{ product.description }</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Price</td>
                        <td>{ product.price }</td>
                    </tr>
                </tbody>
            </table>
        </div>

        return (
            <div className="productDetails">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 m-auto">
                            <br /> <br />
                            <Link to="/" className="btn btn-outline-warning float-left">
                                Show Products
                            </Link>
                        </div>
                        <br />
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Product's Record</h1>
                            <p className="lead text-center">
                                View Product's Info
                            </p>
                            <hr /> <br />
                        </div>
                    </div>
                    <div>
                        { Item }
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,product.productId)}>Delete Product</button><br />
                        </div>

                        <div className="col-md-6">
                            <Link to={`/product/update/${product.productId}`} className="btn btn-outline-info btn-lg btn-block">
                                Edit Product
                            </Link>
                            <br />
                        </div>

                    </div>
                    {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Book</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Book</button> */}

                </div>
            </div>
        );
    }
}

export default ProductDetails;