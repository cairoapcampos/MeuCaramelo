# Meu Caramelo - Pet Shop

**Site protótipo para estudos de integração entre frontend e backend (FullStack)**

**Autor:** Cairo Aparecido Campos

![Home](/docs/home.png)

# Descrição

O Meu Caramelo é uma aplicação web simples para cadastro e gerenciamento de pets, desenvolvida como exercício prático de versionamento, testes e de integração entre frontend e backend. O sistema permite que usuários cadastrem, visualizem e consultem informações de seus pets, simulando a rotina de um pet shop. A aplicação utiliza Node.js e Express no backend (com dados mockados em memória) e React no frontend, proporcionando uma experiência moderna e responsiva.

:warning: Este sistema ainda não possui autenticação! É apenas uma aplicação para testes de integração. Com a sua evolução novas páginas surgirão e outras serão unificadas.

## Tecnologias Usadas

**Ambiente**

- Linux Mint 21.3 (Virginia)
- Visual Studio Code 1.105.0

**Frontend:**

- React 19.2.0: Biblioteca JavaScript para construção de interfaces web.

- Vite 7.1.9: Ferramenta moderna de build e servidor de desenvolvimento para projetos frontend.

**Backend:**

- Node.js 22.20.0: Ambiente de execução JavaScript no lado servidor.
- Express 5.1.0: Framework minimalista para criação de APIs REST.
- Jest 30.2.0: Framework de testes automatizados para JavaScript.

## Instruções para executar o sistema:

1. Instale o Node.js seguindo a documentação oficial:

```
https://nodejs.org/pt/download
```

2. Clone este repositório:

```
git clone https://github.com/cairoapcampos/MeuCaramelo.git
```

3. Instale as dependências do frontend e backend:

```
cd MeuCaramelo/frontend
```

```
npm install
```

```
cd MeuCaramelo/backend
```

```
npm install
```

## Iniciando e testando o projeto

## Frontend

1. Entre na pasta de frontend do projeto

```
cd MeuCaramelo/frontend
```

2. Rode o projeto no modo desenvolvedor:

```
npm run dev
```

3. Acesse o frontend pelo endereço:

```
http://localhost:5173/
```

4. Verificando a conexão com a API do backend.

- Clique em **Meus Pets**. Será exibida a mensagem a seguir dizendo que a API não está acessível.

![Back1-erro](/docs/back1_erro.png)

- Depois clique em **Cadastrar**, ao preencher os campos solictado e clicar em **Cadastrar Pet**, será mostrado também um erro de API.

![Back2-erro](/docs/back2_erro.png)

## Backend

1. Entre na pasta de backend do projeto.

```
cd MeuCaramelo/backend
```

2. Rode o servidor.

```
node src/server.js
```

3. Acesse a API pelo endereço a seguir, dois registros serão retornados:

```
http://localhost:4000/api/pets
```

![Back0-ok](/docs/back0_ok.png)

## Teste de Integração

1. No frontend clique em **Meus Pets**, será mostrados dois registros obtidos pela a API.

![Back1-ok](/docs/back1_ok.png)

2. Depois clique em **Cadastrar**, ao preencher os campos solictados e clicar em **Cadastrar Pet**, será mostrado que o cadastro foi realizado com sucesso.

![Back2-ok](/docs/back2_ok.png)

3. Voltando em **Meus Pets**, será possivél visualizar que um novo registro está sendo fornecidso pela a API.

![Back3-ok](/docs/back3_ok.png)

4. Acessando novamente a API pelo navegador, veremos também o novo registro.

```
http://localhost:4000/api/pets
```

![Back4-ok](/docs/back4_ok.png)

## Rodando Testes Unitários no Backend

1. Entre na pasta do backend do projeto.

```
cd MeuCaramelo/backend
```

2. Rode os testes.

```
npm run test
```

**Saída esperada:**

![Back5-ok](/docs/back5_ok.png)
