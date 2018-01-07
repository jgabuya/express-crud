const express = require("express");
const db = require("../db");
const router = express.Router();

/* GET contacts listing. */
router.get("/", (req, res, next) => {
    Contacts.find({}, (err, results) => {
        if (err) {
            return console.log(err);
        }

        res.send(results);
    });
});

router.get("/create", (req, res, next) => {
    res.render("create", { title: "Create New Contact" });
});

router.post("/store", (req, res, next) => {
    Contacts.insert(
        {
            name: req.body.name,
            email: req.body.email
        },
        (err, result) => {
            if (err) {
                return console.log(err);
            }

            console.log("saved to database");
            res.redirect("/contacts");
        }
    );
});

router.get("/edit/:contactId", (req, res, next) => {
    Contacts.find(
        { _id: Contacts.getId(req.params.contactId) },
        (err, data) => {
            if (err) {
                return console.log(err);
            }

            res.render("edit", { title: "Edit Contact", contact: data[0] });
        }
    );
});

router.post("/update/:contactId", (req, res, params) => {
    res.send(req.params);
});

module.exports = router;
