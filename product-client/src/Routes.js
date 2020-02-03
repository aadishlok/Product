import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateProduct from "./components/create";
import ListProducts from "./components/list";
import ProductDetails from "./components/get";
import UpdateProduct from "./components/update";

export default function Routes() {
    return (
        <Router>
            <div>
                <Route path="/" exact component={ListProducts}/>
                <Route path="/product/new" exact component={CreateProduct} />
                <Route path="/product/:id" exact component={ProductDetails}/>
                <Route path="/product/update/:id" exact component={UpdateProduct}/>
            </div>
        </Router>
    );
}