import { http } from './http';
import { ui } from './ui';

// Get Post on DOM Load
document.addEventListener('DOMContentLoaded', getPosts);

function getPosts() {
   http.get('http://localhost:3000/posts')
   // It's asyn function, so it'll return a promise
   .then(data => ui.showPosts(data))
   .catch(err => console.log(err));
}