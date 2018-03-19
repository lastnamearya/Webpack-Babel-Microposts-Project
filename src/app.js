import { http } from './http';
import { ui } from './ui';

// Get Posts on DOM Load
document.addEventListener('DOMContentLoaded', getPosts);

// Listen for add Post
document.querySelector('.post-submit').addEventListener('click', submitPost);

// Listen for edit State
document.querySelector('#posts').addEventListener('click', enableEdit);

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

  if(title === "" || body ===  "") {
    ui.showAlert('Please fill in all fields', 'alert alert-danger');
  } else {
      const data = {
        title,
        body
      }

      // Create POST Request
      http.post('http://localhost:3000/posts', data)
      .then(data => {
        ui.showAlert('Post added', 'alert alert-success');
        ui.clearFields();
        getPosts();
      })
      .catch(err => console.log(err));
  }  
}

// Enable Edit State
function enableEdit(e) {
  if(e.target.parentElement.classList.contains('edit')){
    const id = e.target.parentElement.dataset.id;
    const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
    const body = e.target.parentElement.previousElementSibling.textContent;

    const data = {
      id,
      title,
      body
    }

    // Fill form using current Post
    ui.fillForm(data);
  }
  e.preventDefault();
}