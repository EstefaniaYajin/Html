function validar(){
  let nome = document.getElementById('nome').value
  let senha = document.getElementById('senha').value
  let email = document.getElementById('email').value

  if(nome == ''){
      alert('Campo nome é obrigatorio !')
      return false
  }else if(email == ''){
      alert('Campo E-mail é obrigatorio !')
  }
  else if(senha.length < 4){
      alert('Senha deve ter masi de 4 digitos')
      return false
  }else{
      alert('Formulário correto ok!')
      return true
  }
}