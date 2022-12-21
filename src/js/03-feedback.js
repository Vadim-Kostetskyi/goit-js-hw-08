const form = document.querySelector('.feedback-form');
const inputEmail = form.email;
const inputMassege = form.message;
const save = 'feedback-form-state';
const localMemory = localStorage.getItem(save);
const localMemoryObject = JSON.parse(localMemory);

if (localMemoryObject !== null) {
  inputEmail.value = localMemoryObject.email;
  inputMassege.value = localMemoryObject.message;
}

const sendForm = event => {
  event.preventDefault();

  const formData = {
    email: inputEmail.value,
    message: inputMassege.value,
  };
  console.log('email:' + formData.email);
  console.log('message' + formData.message);
  form.reset();
};

form.addEventListener('submit', sendForm);

form.addEventListener(
  'input',
  _.throttle(() => {
    let formData = {
      email: inputEmail.value,
      message: inputMassege.value,
    };
    let formDataSave = JSON.stringify(formData);
    localStorage.setItem(save, formDataSave);
  }, 500)
);
