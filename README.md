<h1 align="center">🌴 Delivra Agency — Logística & Delivery Inteligente </h1>

<p align="center">
  O <strong>Delivra Agency</strong> é um ecossistema completo de gestão de logística e delivery, desenvolvido com foco em alta performance, código limpo e uma interface intuitiva e moderna.
</p>

<p align="center">
  Este projeto foi totalmente desenvolvido por:
  <br>
  <strong>Eduarda Aleixo,  Gabriel Pereira,  Jean Pedro,  Júlia Santos,  Julio Aguiar,  Wadssa Wacemberg</strong>.
</p>

<p align="center">
  <img src="./img/demo-delivra.gif" alt="Demonstração Delivra Agency" width="800px" style="border-radius: 10px; border: 2px solid #22c55e;"/>
</p>

## 🎯 Objetivo

O Delivra Agency foi projetado para simular um painel de controle de entregas real. O objetivo foi dominar o ciclo completo de uma aplicação (CRUD) utilizando o ecossistema NestJS, garantindo que a experiência do usuário seja fluida tanto na persistência de dados quanto na navegação visual.

## 🚀 Sobre o Projeto

Uma aplicação Full Stack moderna que utiliza **React** no front-end e **NestJS** no back-end. Diferente de sistemas comuns, o Delivra foca na agilidade operacional, transformando lógicas complexas de banco de dados em uma interface limpa e "monkey-proof".

- 🖥️ **Interface Clean & Tropical:** Design leve com paleta de cores baseada em tons de verde e laranja.
- ⚡ **Arquitetura NestJS:** Back-end robusto, escalável e totalmente estruturado.
- 🥗 **Filtro de Saudáveis:** Lógica personalizada para destacar e filtrar itens com foco em bem-estar.
- 🛠️ **Sincronização em Tempo Real:** Atualização imediata do carrinho e status de disponibilidade dos produtos.

## 🛠️ Tecnologias Utilizadas

<p align="left">
  <img src="https://skillicons.dev/icons?i=react,nestjs,typescript,mysql,js,git" height="40px" />
</p>

- **React.js (Vite):** Hooks avançados para gestão de estado e integração com API.
- **NestJS:** Framework Node.js progressivo para a construção de aplicativos eficientes.
- **TypeORM:** Mapeamento objeto-relacional para persistência de dados estruturada.
- **MySQL:** Banco de dados relacional para armazenamento seguro de produtos e usuários.
- **Axios:** Comunicação assíncrona entre o client e o servidor.

## ⚙️ Funcionalidades

- **CRUD de Produtos:** Gestão completa de itens, categorias e usuários.
- **Filtro Dinâmico:** Alternância entre visualização geral e produtos saudáveis (🥗).
- **Gestão de Carrinho:** Adição e remoção de itens com atualização automática no banco de dados.
- **Special Price:** Lógica de ordenação para visualização de melhores ofertas.
- **User Profile Sync:** Identificação de usuário com avatares dinâmicos via API.

## 💡 Diferenciais Técnicos

- **Clean Code:** Estrutura de pastas organizada seguindo os padrões de módulos e serviços do NestJS.
- **Segurança e .env:** Configuração dinâmica de variáveis de ambiente para conexão com banco de dados.
- **Persistência de Estado:** Uso de verbos HTTP corretos (PUT/POST/GET) para garantir a integridade dos dados.
- **UI/UX Premium:** Layout fluido que se adapta para oferecer a melhor experiência em dashboards.

## 🚀 Como Executar

````

Banco de Dados:
Localize a pasta sql e execute o arquivo script_banco.sql no seu MySQL.

````
Back-end (NestJS):

````
bash
cd backend
npm install
npm run start:dev

Front-end (React):

bash
cd frontend
npm install
npm run dev

````

## 📂 Estrutura de Pastas

````

├── frontend/           # Aplicação React (Vite)
│   ├── src/
│   │   ├── assets/     # Logos e imagens
│   │   ├── App.tsx     # Lógica principal e rotas
│   │   └── App.css     # Estilização Clean/Tropical
├── backend/            # API NestJS
│   ├── src/
│   │   ├── produtos/   # Módulo de Produtos
│   │   ├── usuario/    # Módulo de Usuários
│   │   └── categoria/  # Módulo de Categorias
│   ├── sql/            # Script de criação/população do banco
│   └── .env            # Variáveis de ambiente
