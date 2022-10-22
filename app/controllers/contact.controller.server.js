import contactModel from '../contact/contact.js';
import { UserDisplayName } from '../utils/index.js';

export function DisplayContactList(req, res, next){
    contactModel.find(function(err, contactCollection) {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Business Contact List', page: 'contact/list', contact: contactCollection, displayName: UserDisplayName(req)});
    })
}

export function DisplayContactAddPage(req, res, next){
    res.render('index', { title: 'Add Contact Information', page: 'contact/update', contact: {} , displayName: UserDisplayName(req)});
}

export function ProcessContactAddPage(req, res, next){
    
    let newContact = contactModel({
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
    });

    contactModel.create(newContact, (err, Contact) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/contact-list')
    } )
}

export function DisplayContactUpdatePage(req, res, next){
    let id = req.params.id;

    contactModel.findById(id, (err, contact) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', { title: 'Update Contact Info', page: 'contact/update', contact: contact, displayName: UserDisplayName(req) });
    });    
}

export function ProcessContactUpdatePage(req, res, next){

    let id = req.params.id;
    
    let newContact = contactModel({
        _id: req.body.id,
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
    });

    contactModel.updateOne({_id: id }, newContact, (err, Contact) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/contact-list')
    } )
}

export function ProcessContactDelete(req, res, next){
    let id = req.params.id;

    contactModel.remove({_id: id}, (err) => {
        if (err){
            console.error(err);
            res.end(err);
        }

        res.redirect('/contact-list');
    })
}

