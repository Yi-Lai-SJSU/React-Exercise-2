import axios from "axios";

export default axios.create ({
    baseURL : 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID 57379d63c34864f0932577b7e27ce71d46a9647ca8bd8271daac9aa4d5d5cec6'
    }
});


