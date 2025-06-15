const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

const saveData = localStorage.getItem(STORAGE_KEY);
if (saveData) {
  const parseData = JSON.parse(saveData);
  formData.email = parseData.email || '';
  formData.message = parseData.message || '';
  form.email.value = formData.email;
  form.message.value = formData.message;
}

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  form.reset();
});
