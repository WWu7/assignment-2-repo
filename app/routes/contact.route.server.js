import { Router } from "express";

import {  DisplayContactList, 
    DisplayContactAddPage, 
    ProcessContactAddPage, 
    ProcessContactUpdatePage, 
    DisplayContactUpdatePage, 
    ProcessContactDelete } from "../controllers/contact.controller.server.js";

import { AuthGuard } from "../utils/index.js";

const router = Router();

router.get('/contact-list', DisplayContactList);
router.get('/contact-add', AuthGuard, DisplayContactAddPage);
router.post('/contact-add', AuthGuard,ProcessContactAddPage);
router.post('/contact-update/:id', AuthGuard,ProcessContactUpdatePage);
router.get('/contact-update/:id', AuthGuard,DisplayContactUpdatePage);
router.get('/contact-delete/:id', AuthGuard,ProcessContactDelete);

export default router;