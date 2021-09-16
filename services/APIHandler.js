const axios = require("axios");



class APIHandler {

   

    getPhrase = () => axios.get("https://inspiration.goprogram.ai/");

    getActivity = () => axios.get("http://www.boredapi.com/api/activity/");

    getUsersRoleUSER = () => axios.get("http://localhost:3000/api/users");

}



module.exports = APIHandler;
