# **PetShop Markes**

Projeto FullStack de um CRUD para uma loja ficticia de petshop

## 1. Bibliotecas e Frameworks

* [NextJS](https://nextjs.org/) : Framework React para produção
* [ReactJS](https://reactjs.org/) : Biblioteca JavaScript para construção das interfaces
* [Express](https://expressjs.com/pt-br/):  Framework para aplicativo da web do Node.js
* [Prisma](https://www.prisma.io/): TypeORM que auxilia na construção da base de dados da aplicação
* [Postgress](https://www.postgresql.org/): Banco de dados utilizado na aplicação

## 2. Instalação e configuração
1. Instale as dependencias do projeto (web e server)

        npm install
2. Adicione sua variável de ambiente no arquivo .env (server)
    
        DATABASE_URL =    
3. Faça a instalação do Prisma se precisar (server)

        npm install prisma --save-dev
        npx prisma
        npx prisma init
        npx prisma db pull
        npm install @prisma/client
        npx prisma generate
        npx prisma migrate dev 
4.  Dados default do banco de dados(server)

        npx prisma db seed

5. Inicie sua aplicação (web e server)

        npm run dev

_Obs.: A pagina de update.tsx na web não está funcionando_

