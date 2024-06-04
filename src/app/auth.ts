// Ver outro ficheiro do projeto

import { loginWithEmail, logout } from './auth';

// Fazer login
loginWithEmail('email@example.com', 'Palavra-passe 123')
  .then(() => {
    console.log('utilizador autenticado com sucesso!');
    // Execute outras ações após o login bem-sucedido
  })
  .catch((error) => {
    console.error('Erro ao autenticar utilizador:', error);
  });

// Fazer logout
logout()
  .then(() => {
    console.log('utilizador desconectado com sucesso!');
    // Execute outras ações após o logout bem-sucedido
  })
  .catch((error) => {
    console.error('Erro ao desconectar utilizador:', error);
  });
