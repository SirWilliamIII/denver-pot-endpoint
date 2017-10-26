const express = require("express")

const router = express.Router();
const queries = require("../db/queries");

/*
	getOneById(id);
	addStrain(strain);
	updateStrain(strain);
	deleteStrainById();
*/

function isValidId(req, res, next) {
  if (!isNaN(req.params.id)) {
    return next();
  }
  next(new Error("Error...Invalid Strain"));
}

router.get("/", (req, res) => {
  queries.getStrains().then(strains => {
    res.json(strains);
  });
});

router.get("/:id", isValidId, (req, res) => {
  queries.getStrainById(req.params.id).then(strain => {
    res.json(strain);
  });
});

// router.post('/', (req, res) => {
// 	const strain = {
// 		image: req.body.image,
// 		name: req.body.name,
// 		class: req.body.class,
// 		effects: req.body.effects,
// 		description: req.body.description
// 	}
// 	queries.addStrain(strain)
// 		.then(strain => {
// 			res.json(strain)
// 		})
// })


module.exports = router