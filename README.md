
<h1 align="center">
  <img alt="Be The Hero" src="https://user-images.githubusercontent.com/48302018/77807458-a1198200-7066-11ea-93fb-8b82e4a2c54a.png">
</h1>

<blockquote align="center">Projeto ministrado pela Rockeseat durante a Semana OminiStack 11</blockquote>

## :rocket: Sobre o Projeto

<p>
  O objetivo da aplicação é unir contribuintes a organizações não governamentais (ONGS), permitindo que
  cadastradas possam adicionar casos e arrecadar dinheiro para sua solução, promovendo ações sociais e solidariedade.
</p>

<br>

<h2 align="center">Estrutura do App</h2>

<h3>Web</h3>
<img src="https://user-images.githubusercontent.com/48302018/77808445-19357700-706a-11ea-99e9-4dfea7e1cdcc.png"/>
<p>
  A versão web permite que uma ONG, se cadastre ,faça logon e gerencie seus casos, criando-os com seu respectivo 
  nome,descrição e valor de contribuição, a ong também poderá deletar casos quando necessário.  
</p>

<h4>Tecnologias Utilizadas</h4>
<ul>
  <li>ReactJS</li>
  <li>Axios</li>
  <li>Feather Icons</li>
</ul>

<h3>Mobile</h3>
<img src="https://user-images.githubusercontent.com/48302018/77809432-5b60b780-706e-11ea-9612-5e1f10294e1f.png">
<p>
  Na versão para Android e Ios, conseguimos visualizar todos os casos disponiveis, e acessar detalhes de cada um deles,
  na pagina de detalhes podemos entrar em contato com a Ong através de seu E-mail ou Whatsapp.
</p>

<h4>Tecnologias Utilizadas</h4>
<ul>
  <li>React Native</li>
  <li>Expo</li>
  <li>Axios</li>
  <li>intl</li>
  <li>Feather Icons</li>
</ul>

<h3>Backend</h3>

Todo o servidor foi construido em Node com Express, usando o Knex como ORM para as migrations de comunicação com nosso banco
SQLite,usamos celebrate para as validações da requisição,e Jest para Test-driven development (TDD).

<h4 align="center">Rotas</h4>

'/sessions' - POST
```
  Recebe no body um id referente a um ONG, busca no banco de dados a Ong e retorna a Ong que 
  pertence a esse id,usada para fazer o login da sessão de uma ong.
```
'/profile' - GET
```
  Usada para listagem de dados na Web.
  Recebe uma authorization em seu Header e retorna os casos cadastrados de uma ONG específica.
```

'/incidents' - GET
```
  Usada para listagem de dados no Mobile.
  Recebe um query param que define a página que o usuario está,e retorna todos os casos.
```
'/incidents/:id' - DELETE
```
  Recebe um route param que informa o id do caso a ser deletado.
```

'/incidents' - POST
```
  Usada para criar um novo caso
  Recebe no body: title,description,value,
  Retorna o id do caso criada.
```

'/ongs' - GET
```
  Retorna todas as ongs cadastradas
```

'/ongs' - POST
```
  Usada para cadastrar uma nova ONG.
  Recebe no body: name,email,whatsapp,city,uf.
  E retorna o id da ONG criada.
```

<h4>Tecnologias Utilizadas</h4>
<ul>
  <li>NodeJS</li>
  <li>Express</li>
  <li>Jest</li>
  <li>supertest</li>
  <li>Knex</li>
  <li>SQLite</li>
  <li>cors</li>
  <li>cross-env</li>
  <li>celebrate</li>
  <li>bee-queue</li>
</ul>

