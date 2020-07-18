/** @format */

const express = require("express");

// Import the model (sushi.js) to use its database functions.
const sushi = require("../models/sushi.js");

const router = express.Router();

// Create all our routes and logic within them


router.get("/", (req, res) => {
	sushi.selectAll((data) => {
		const hbsObject = {
			rolls: data,
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/api/rolls", (req, res) => {
	sushi.insertOne({ name: req.body.name, devoured: req.body.devoured }, (result) => {
		// Send back the ID of the new roll
		res.json({ id: result.insertId });
	});
});

// using put to replace the value of devoured for a
// specific sushi resource
router.put("/api/rolls/:id/devoured", (req, res) => {
	const condition = { id: req.params.id };
	const update = { devoured: req.body.value };

	sushi.updateOne(update, condition, (result) => {
		if (result.affectedRows === 0) {
			// If no rows were affected, then the ID must not exist, so 404
			return res.status(404).end();
		}
		res.status(200).end();
	});
});



module.exports = router;
