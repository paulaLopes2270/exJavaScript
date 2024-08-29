// Funções de alteração de cor de fundo
function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

// Exercício 4: Ocultar ou mostrar parágrafo
function toggleParagraph() {
  var paragraph = document.getElementById('textParagraph');
  if (paragraph.classList.contains('hidden')) {
      paragraph.classList.remove('hidden');
  } else {
      paragraph.classList.add('hidden');
  }
}

// Exercício 5: Habilitar/desabilitar botão baseado no número de checkboxes marcados
function toggleButton() {
  var checkboxes = document.querySelectorAll('.checkItem:checked');
  var button = document.getElementById('submitButton');
  button.disabled = checkboxes.length < 2;
}

// Exercício 6: Alterar cor da fonte e fundo do parágrafo
function changeFontColor(color) {
  document.getElementById('styledParagraph').style.color = color;
}

function changeBackgroundColorParagraph(color) {
  document.getElementById('styledParagraph').style.backgroundColor = color;
}

// Exercício 7: Ajustar tamanho da fonte
function adjustFontSize(action) {
  var paragraph = document.getElementById('styledParagraph');
  var currentSize = window.getComputedStyle(paragraph).fontSize;
  var newSize = parseFloat(currentSize);

  if (action === 'increase') {
      newSize += 2;
  } else if (action === 'decrease') {
      newSize -= 2;
  }

  paragraph.style.fontSize = newSize + 'px';
}

// Exercício 8: Transformar texto para maiúscula ou minúscula
function transformText(action) {
  var paragraph = document.getElementById('styledParagraph');
  if (action === 'uppercase') {
      paragraph.style.textTransform = 'uppercase';
  } else if (action === 'lowercase') {
      paragraph.style.textTransform = 'lowercase';
  }
}

// Exercício 9: Validação de formulário de usuário
function validateUserForm() {
  var login = document.getElementById('login').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;

  if (!login || !password || !confirmPassword) {
      alert('Por favor, preencha todos os campos.');
      return false;
  }

  if (password !== confirmPassword) {
      alert('As senhas não coincidem.');
      return false;
  }

  if (password.length < 6 || password.length > 10) {
      alert('A senha deve ter entre 6 e 10 caracteres.');
      return false;
  }

  return true;
}

// Exercício 10: Alternar campos para Pessoa Física/Jurídica
function togglePessoaFields(tipo) {
  var cpfField = document.getElementById('cpf');
  var cnpjField = document.getElementById('cnpj');
  var dataNascimentoField = document.getElementById('dataNascimento');

  if (tipo === 'fisica') {
      cpfField.disabled = false;
      cnpjField.disabled = true;
      dataNascimentoField.disabled = false;
  } else if (tipo === 'juridica') {
      cpfField.disabled = true;
      cnpjField.disabled = false;
      dataNascimentoField.disabled = true;
  }
}
