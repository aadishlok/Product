import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import uuid from 'uuid';

class CreateProduct extends Component {
    constructor() {
        super();
        this.state= {
            productId: uuid.v1(),
            name: '',
            brand: '',
            description: '',
            price: ''
        };
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
        console.log(data.productId);
        axios.post('http://localhost:8082/api/product/', data)
            .then(res => {
                this.setState({
                    productId: '',
                    name: '',
                    brand: '',
                    description: '',
                    price: ''
                })
                this.props.history.push('/');
            })
            .catch(err => {
                console.log('Error in create.');
            })
    };

    render () {
      return (
          <div className="createProduct">
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
                          <input type='submit' className='btn btn-outline-warning btn-block mt-4'/>
                      </form>
                  </div>
              </div>
          </div>
      )
    };

}

export default CreateProduct;