const contactCtrl = require("../controller/contactCtrl");
const router = require("express").Router();

router.post("/contact",contactCtrl.createContact);

module.exports = router;