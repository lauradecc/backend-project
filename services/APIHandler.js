const axios = require("axios");



class APIHandler {

   

    getPhrase = () => axios.get("https://inspiration.goprogram.ai/");

    getActivity = () => axios.get("http://www.boredapi.com/api/activity/");

    getUsersRoleUSER = () => axios.get("https://happiapp.herokuapp.com/api/users");

}



module.exports = APIHandler;
