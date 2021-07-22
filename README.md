# Krello

Um clone do Trello desenvolvido com Laravel no backend e Vue.js no frontend.

## Instruções

O primeiro passo para executar o projeto completo é clonar este repositório. Para isso, utilize o comando: 
```sh
https://github.com/kevenndc/krello.git
```

### Backend
O projeto backend foi desenvolvido com o framework Laravel e se encontra dentro da pasta `backend`.


Para executar o projeto backend, instale os pacotes de dependências do composer utilizando o comando:

```sh
composer install
```

Em seguida, instale as dependências do de JavaScript com o comando:

```sh
npm install
```
Inicie o container Docker com o comando:

```sh
./vendor/bin/sail up
```
Crie as tabelas necessárias no banco rodando as migrations com o comando:

```sh
./vendor/bin/sail artisan migrate
```

Por último, execute o comendo abaixo para começar a escutar requisições:

```sh
./vendor/bin/sail artisan serve
```

### Frontend

Para executar o projeto frontend, primeiramente instale as dependências de JavaScript com o comando:

```sh
npm install
```
Para executar a aplicação no modo de desenvolvedor, execute o comando:

```sh
npm run dev
```

Ou então execute o comando de build:

```sh
npm run build
```

e execute em modo de produção:

```sh
npm run serve
```
Uma lista de endereços deverá ser mostrada no terminal para realizar o acesso da apliacação pelo navegador.

Ao acessar a aplicação, será apresentada uam tela de login. Como dito anteriormente, já existe um usuário padrão no banco de dados.