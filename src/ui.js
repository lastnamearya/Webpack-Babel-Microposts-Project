class UI {
  constructor() {
    this.post = document.querySelector('#posts');
    this.titleInput = document.querySelector('#title');
    this.bodyInput = document.querySelector('#body');
    this.idInput = document.querySelector('#id');
    this.postSubmit = document.querySelector('.post-submit');
    this.forState = 'add';
  }

  showPosts(posts){

    let output = '';

    posts.forEach((post) => {
      output += `
      <div class="card mb-3">
        <div class="card-body">
          <h4 class="card-title">${post.title}</h4>
          <p class="card-text">${post.body}</p> 
          <a href="#" class="edit card-link" data-id=${post.id}>
            <i class="fa fa-pencil"></i>
          </a>

          <a href="#" class="delete card-link" data-id=${post.id}>
            <i class="fa fa-remove"></i>
          </a>
        </div>
      </div>
    `;
    });
   
    this.post.innerHTML = output;
  }

  // Show Alert Message
  showAlert(message, className){
     this.clearAlert();

     // create div
     const div = document.createElement('div');
     // Add Classes
     div.className = className;
     // Add text
     div.appendChild(document.createTextNode(message));
     // Get Parent
     const container = document.querySelector('.postContainer');
     // Get Posts
     const posts = document.querySelector('#posts');
     // Insert alert div
     container.insertBefore(div, posts);

     // Timeout
     setTimeout(() => {
       this.clearAlert();
     }, 3000);
  }

  // Clear Alert Message
  clearAlert(){
    const currentAlert = document.querySelector('.alert');

    if(currentAlert){
      currentAlert.remove();
    }
  }

  // Clear All Fields
  clearFields(){
    this.titleInput.value = "";
    this.bodyInput.value = "";
  }

  // Fill form to edit
  fillForm(data){
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.idInput.value = data.id;

    this.changeFormState('edit');
  }

  // Change the form State
  changeFormState(type){
    if(type === 'edit'){
      this.postSubmit.textContent = 'Update Post';
      this.postSubmit.className = 'post-submit btn btn-warning btn-block';

      const button = document.createElement('button');
      button.className = 'post-cancel btn btn-light btn-block';
      button.appendChild(document.createTextNode('Cancel Edit'));

      // Get Parent
      const cardForm = document.querySelector('.card-form');
      // get element to insert before
      const formEnd = document.querySelector('.form-end');
      // Insert cancel Button
      cardForm.insertBefore(button, formEnd);
    }
  }
  
}

// In Modules, we have to export our file, so other files can import them by specifying

export const ui = new UI();