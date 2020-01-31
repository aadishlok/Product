const express= require('express');
const router= express().Router();

const Product= require('../../models/Product');

router.get('/test', (req, res) => res.send('Route testing'));

router.get('/', (req, res) => {
    Product.find()
        .then(product => res.json(products))
        .catch(err => res.status(404).json({error: 'No products listed'}))
});

router.post('/', (req, res) => {
    Product.create(req.body)
        .then(product => res.json({response: 'Product successfully added'}))
        .catch(err => res.status(404).json({error: 'Unable to add the product'}))
});

router.get('/:id', (req, res) => {
    Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(err => res.status(404).json({error: 'Book not found'}))
});

router.put('/:id', (req,res) => {
    Product.findByIdAndUpdate(req.params.id, req.body)
        .then(product => res.json({response: 'Product successfully updated'}))
        .catch(err => res.status(404).json({error: 'Unable to update the product'}))
});

route.delete('/:id', (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(product => res.json({response: 'Product successfully removed'}))
        .catch(err => res.status(404).json({error: 'Unable to remove product'}))
});

module.exports= router;