const axios = require('axios');
let config = require('../config.json');



const getPlayerCount = async () => {
    try {
        const resp = await axios.get('http://'+config.SERVER_URL+'/players.json');
        
        
            let total = resp;
            return total;
        

    } catch (err) {
        console.error(err);

    }
};

    module.exports.getPlayerCount = getPlayerCount;

