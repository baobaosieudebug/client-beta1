import axios from 'axios';
// Create an axios instance

const service = axios.create({
  baseURL: 'https://chatbot-keyreply-v3.herokuapp.com/',
  timeout: 5000,
  headers: {
    accept: 'application/json'
  }
});

export default service;
