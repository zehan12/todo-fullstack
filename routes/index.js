const router = require("express").Router();

router.get("/",( req, res, next ) => {
    res.json({"message":"express"})
} )

module.exports = router;
