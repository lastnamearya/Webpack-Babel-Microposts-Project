import { http } from './http';
import { ui } from './ui';

// Get Posts on DOM Load
document.addEventListener('DOMContentLoaded', getPosts);

// Listen for add Post
document.querySelector('.post-submit').addEventListener('click', submitPost);

// Get Posts
function getPosts() {
   http.get('http://localhost:3000/posts')
   // It's asyn function, so it'll return a promise
   .then(data => ui.showPosts(data))
   .catch(err => console.log(err));
}

// Submit Post
function submitPost(){
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;

  const data = {
    title,
    body
  }

  // Create POST Request
  http.post('http://localhost:3000/posts', data)
  .then(data => {
    getPosts();
  })
  .catch(err => console.log(err));
}