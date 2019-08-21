import axios from "axios";

const BASEURL = "https://api.giphy.com/v1/gifs/search?q=nature";
const APIKEY = "&api_key=Mq4E6OuzrHkhXWUwEVi0rYucsNv4cPCU&limit=20";
//https://api.giphy.com/v1/gifs/search?q=nature&api_key=Mq4E6OuzrHkhXWUwEVi0rYucsNv4cPCU
export default {
    search: function(query){
        return axios.get(BASEURL + query + APIKEY)
    },
    upload_data: function(data) {
        return axios.post("/api/add_image",data)
    }
};

