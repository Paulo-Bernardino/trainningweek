document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const errorMsg = document.getElementById('error');

    // MOCK DE USUÁRIOS
    const users = {
        'paulo_rocha': { pass: 'Paulo689', script: 'app.js' },
        'juliana_rocha': { pass: 'Juliana1996', script: 'app2.js' }
    };

    if (users[user] && users[user].pass === pass) {
        // Armazena qual script deve ser carregado na próxima página
        localStorage.setItem('userScript', users[user].script);
        localStorage.setItem('userName', user);
        
        // Redireciona para a página principal do treinamento
        window.location.href = 'index.html';
    } else {
        errorMsg.style.display = 'block';
    }
});