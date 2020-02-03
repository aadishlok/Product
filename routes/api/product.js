const express= require('express');
const router= express.Router();

const Product= require('../../models/Product');

router.get('/test', (req, res) => res.send('Route testing'));

router.get('/', (req, res) => {
    Product.find(req.body, (error, response) => {
        if(error) {
            console.log(error);
        } else {
            res.send(response);
           console.log(response);
        }
    });
});

router.post('/', (req, res) => {
    console.log('Create: '+JSON.stringify(req.body));
    Product.create(req.body, (error, response) => {
        if(error) {
            console.log(error);
        } else {
            console.log(response);
        }
    })
});

router.get('/:id', (req, res) => {
    Product.findById(req.params.id, (error, response) => {
        if(error) {
            console.log(error);
        } else {
            res.send(response);
            console.log(response);
        }
    })
});

router.put('/:id', (req,res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, (error, response) => {
        if(error) {
            console.log(error);
        } else {
            console.log(response);
        }
    })
});

router.delete('/:id', (req, res) => {
    console.log("Delete: "+req.params.id);
    Product.findByIdAndDelete(req.params.id, (error, response) => {
        if(error) {
            console.log(error);
        } else {
            console.log(response);
        }
    })
});

module.exports= router;