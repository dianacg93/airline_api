const {Router} = require("express")
const controllers = require('../controllers')
const router = Router();

router.get("/", (req, res) => {
    res.send(`
    Welcome to the home route! 
    Other routes:
    /airlines
    /airlines/:id`)
})

router.post("/airlines", controllers.createAirline)

router.get("/airlines", controllers.getAllAirlines)

router.get("/airlines/:id", controllers.getAirlineById)

router.put("/airlines/:id", controllers.updateAirline)

router.delete("/airlines/:id", controllers.deleteAirline)

module.exports = router;