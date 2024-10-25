🧞‍♂️ Lampada do Gênio com React

Este projeto simula uma lâmpada mágica, onde, ao clicar nela, um gênio aparece e você pode fazer seus pedidos! Foi desenvolvido com React, utilizando o hook useState para gerenciar o estado da lâmpada e do gênio, além de responsividade para dispositivos móveis.

🎉 Funcionalidades

Invocação do Gênio: Clique na lâmpada para invocar o gênio.
Pedidos de Desejos: Interface para digitar pedidos e vê-los aparecer.
Animações e Transições: Efeitos visuais para deixar o projeto mais interativo.
🛠 Tecnologias Usadas
React - Biblioteca para construir interfaces de usuário.
Sass - Pré-processador CSS para estilização mais eficiente.
HTML - Estrutura do projeto.
Responsividade - Ajustes para visualização em dispositivos móveis.
🚀 Como Iniciar o Projeto
Clone este repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/lampada-genio.git
cd lampada-genio
Instale as dependências:

bash
Copiar código
npm install
Execute o projeto:

bash
Copiar código
npm start
Abra o navegador em http://localhost:3000 para visualizar o projeto.

📱 Responsividade
O projeto foi projetado para ser responsivo e se adapta a diferentes tamanhos de tela, proporcionando uma experiência agradável em dispositivos móveis.

🧩 Estrutura do Projeto

plaintext
Copiar código
lampada-genio/
├── public/
├── src/
│   ├── components/
│   │   ├── Lampada.js      # Componente da lâmpada mágica
│   │   └── Genio.js        # Componente do gênio
│   ├── styles/
│   │   └── main.scss       # Arquivo principal de estilos (Sass)
│   ├── App.js              # Componente principal
│   └── index.js            # Ponto de entrada da aplicação
├── README.md               # Documentação do projeto
└── package.json            # Dependências e scripts do projeto


✨ Explicação do Funcionamento

Este projeto utiliza o useState do React para:

Controlar o estado da lâmpada (ativa ou inativa).
Definir se o gênio deve aparecer ou desaparecer da tela.
