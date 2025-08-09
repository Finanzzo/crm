function login(){
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value.trim();
  if(user === 'FINANZZO' && pass === 'finanzzo@2025'){
    localStorage.setItem('loggedUser', JSON.stringify({user:user, admin:true}));
    window.location.href = 'crm.html';
  } else {
    alert('Usuário ou senha incorretos');
  }
}
function checkLogin(){
  const u = JSON.parse(localStorage.getItem('loggedUser') || 'null');
  if(!u){ window.location.href = 'login.html'; }
}
function checkAdmin(){
  const u = JSON.parse(localStorage.getItem('loggedUser') || 'null');
  if(!u || !u.admin){ window.location.href = 'login.html'; }
}
function logout(){
  localStorage.removeItem('loggedUser');
  window.location.href = 'login.html';
}
