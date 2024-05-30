# Validation-Form

Este projeto contém um formulário HTML com campos de Nome, Email e Telefone que são validados usando expressões regulares (Regex) em JavaScript.

## Estrutura do Projeto

- `index.html`: Contém o formulário e a estrutura HTML.
- `styles.css`: Contém a estilização do formulário.
- `script.js`: Contém a lógica de validação usando expressões regulares.
- `README.md`: Este arquivo, que explica as expressões regulares utilizadas.

## Expressões Regulares Utilizadas

## Nome

javascript
```const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{1,100}$/;```

- `^`: Indica o início da string.
- `[A-Za-zÀ-ÖØ-öø-ÿ\s]`: Conjunto de caracteres permitidos:
  - `A-Za-z`: Letras maiúsculas e minúsculas.
  - `À-ÖØ-öø-ÿ`: Caracteres acentuados.
  - `\s`: Espaços.
- `{1,100}`: Quantificador que permite entre 1 e 100 caracteres.
- `$`: Indica o final da string.

Essa expressão regular garante que o nome tenha apenas letras (incluindo acentuadas) e espaços, e que tenha entre 1 e 100 caracteres.

## Email

```const phoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;```

- `^`: Indica o início da string.
- `\(`: Um parêntese de abertura literal.
- `\d{2}`: Exatamente dois dígitos.
- `\)`: Um parêntese de fechamento literal.
- ``: Um espaço.
- `\d{4,5}`: Quatro ou cinco dígitos.
- `-`: Um traço literal.
- `\d{4}`: Exatamente quatro dígitos.
- `$`: Indica o final da string.

Essa expressão regular valida que o telefone segue o formato (99) 99999-9999 ou (99) 9999-9999.

Como Funciona a Validação

  1. Captura do Evento de Submissão:

     document.getElementById('validationForm').addEventListener('submit', function(event) {
    event.preventDefault();

2. Seleção dos Campos do Formulário:

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');

3. Seleção dos Elementos de Erro:

   const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const phoneError = document.getElementById('phoneError');

4. Validação de Cada Campo:

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
    emailError.textContent = 'Email inválido.';
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

