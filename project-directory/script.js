document.getElementById('validationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio do formulário

  // Input
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');

  // Error
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const phoneError = document.getElementById('phoneError');

  // Regex
  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{1,100}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;

  let valid = true;

  // Valid name
  if (!nameRegex.test(nameInput.value)) {
    nameError.textContent = 'Nome inválido. Apenas letras e espaços são permitidos, até 100 caracteres.';
    valid = false;
  } else {
    nameError.textContent = '';
  }

  // Valid email
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = 'Email inválido';
    valid = false;
  } else {
    emailError.textContent = '';
  }

  // Valid phone
  if (!phoneRegex.test(phoneInput.value)) {
    phoneError.textContent = 'Telefone inválido. Formato esperado: (99) 99999-9999 ou (99) 9999-9999.';
    valid = false;
  } else {
    phoneError.textContent = '';
  }

  if (valid) {
    alert('Formulário enviado com sucesso!');
  }
});