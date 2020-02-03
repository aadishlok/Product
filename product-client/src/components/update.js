import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

class UpdateProduct extends Component {
    constructor(props) {
        super(props);
        this.state= {
            productId: props.productId,
            name: '',
            brand: '',
            description: '',
            price: ''
        };
    }

    componentDidMount() {
        console.log("Update Mounted");
        axios.get('http://localhost:8082/api/product/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    productId: res.data.productId,
                    name: res.data.name,
                    brand: res.data.brand,
                    description: res.data.description,
                    price: res.data.price
                })
                this.props.history.push('/');
            })
            .catch(err => {
                console.log('Error loading product');
            });
    }

    onChange= e => {
      this.setState({[e.target.name]: e.target.value});
    };

    onSubmit= e => {
      e.preventDefault();
      const data= {
            productId: this.state.productId,
            name: this.state.name,
            brand: this.state.brand,
            description: this.state.description,
            price: this.state.price
      };

      axios
          .put('http://localhost:8082/api/product/'+this.props.match.params.productId, data)
          .then(res => {
              this.props.history.push('/product/'+this.props.match.params.productId);
          })
          .catch(err => {
              console.log('Error updating product');
          })
    };

    render() {
        return (
            <div className="update-product">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <br/>
                            <Link to="/" className="btn btn-outline-warning float-left">
                                Show Products
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">New Product</h1>
                        <p className="lead text-center">
                            Create a new product
                        </p>

                        <form noValidate onSubmit={this.onSubmit}>
                            <div className='form-group'>
                                <input type= 'text' placeholder='Name' name='name' className='form-control' value={this.state.name} onChange={this.onChange}/>
                            </div>
                            <div className='form-group'>
                                <input type='text' placeholder='Brand' name='brand' className='form-control' value={this.state.brand} onChange={this.onChange}/>
                            </div>
                            <div className='form-group'>
                                <input type='text' placeholder='Description' name='description' className='form-control' value={this.state.description} onChange={this.onChange}/>
                            </div>
                            <div className='form-group'>
                                <input type='number' placeholder='Price' name='price' className='form-control' value={this.state.price} onChange={this.onChange}/>
                            </div>
                            <button type='submit' className='btn btn-outline-warning btn-block mt-4'>Update</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateProduct;