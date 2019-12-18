import axios from 'axios';

const KEY = 'AIzaSyDvCmSrjKJMvypRUObweAIBCo8G-ceSZTs';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: '5',
        key: `${KEY}`
    }
});


