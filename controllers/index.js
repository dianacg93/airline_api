const Airline = require('../models/airline')

const createAirline = async (req, res) => {
    try{
        console.log(req.body)
        const airline = await new Airline(req.body)
        ;
        await airline.save();
        return res.status(201).json({
            airline
        })

    } catch(err) {
        console.log(err)
        return res.status(500).json({error: err.message})
    }
}

const getAllAirlines = async (req, res) => {
    try{
        const airlines = await Airline.find();
        return res.status(200).json(airlines);

    } catch(err) {
        console.log(err);
        return res.status(500).json({error: err.message});
    }
}

const getAirlineById = async (req, res) => {
    try{
        const {id} = req.params;
        const airline = await Airline.findById(id);
        if(airline) {
            return res.status(200).json(airline);
        }
        return res.status(404).send("Airline not found");

    } catch(err) {
        console.log(err)
        return res.status(500).json({error: err.message})
    }
}

const updateAirline = async (req, res) => {
    try{
        const {id} = req.params;
        await Airline.findByIdAndUpdate(id, req.body, {new: true}, (err, airline) => {
            if (err) {
                res.status(500).send(err);
            }
            if(!airline) {
                res.status(404).send("Airline not found");
            }
            return res.status(200).json(airline);

        })

    } catch(err) {
        console.log(err)
        return res.status(500).json({error: err.message})
    }
}

const deleteAirline = async (req, res) => {
    try{
        const {id} = req.params;
        const deleted = await Airline.findByIdAndDelete(id);
        if(deleted){
            return res.status(200).send("Airline deleted");
        }
        throw new Error("Airline not found")

    } catch(err) {
        console.log(err)
        return res.status(500).send( err.message)
    }
}

module.exports = {
    createAirline,
    getAllAirlines,
    getAirlineById,
    updateAirline,
    deleteAirline
}