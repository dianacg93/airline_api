const db = require('../db')
const Airline = require('../models/airline')

db.on("error", console.error.bind(console, "MongoDB connection error"))

const main = async () => {
    try {
        const airlines = [
            {name: "Delta", headquarters: "Atlanta, GA", airline_code: "DL", website: "https://www.delta.com/"},
            {name: "Alitalia", headquarters: "Rome, Italy", airline_code: "AZ", website: "https://www.alitalia.com"},
            {name: "American Airlines", headquarters: "Dallas, TX", airline_code: "AA", website: "https://www.aa.com/"},
            {name: "British Airways", headquarters: "London, UK", airline_code: "BA", website: "https://www.britishairways.com/"},
            {name: "Copa Airlines", headquarters: "Panama City, Panama", airline_code: "CM", website: "https://www.copaair.com/web/us"},
        ]

        await Airline.insertMany(airlines);
    } catch (err) {
        console.log(err)
    }

    console.log("Airlines have been created")
}

const run = async () => {
    await main();
    db.close();
}

run();