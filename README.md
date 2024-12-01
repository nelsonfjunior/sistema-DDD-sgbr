## Descrição

Aplicação backend em NestJS que simula o funcionamento de um sistema bancário, implementando conceitos de Domain-Driven Design (DDD). O sistema gerencia clientes, contas bancárias e movimentações financeiras, com uma arquitetura bem definida e organizada em torno do domínio do problema.

## Instalação 

```bash
$ npm install
```

## Compile e execute o projeto

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Utilização

A aplicação estará disponível em: `http://localhost:3000` e o Swagger pode ser acessado em: `http://localhost:3000/api`, onde você pode visualizar as rotas de forma mais clara e realizar testes.

### Fluxo de autenticação:

1. **Cadastro de cliente**: Acesse a rota `http://localhost:3000/clientes` para criar um cliente.
2. **Login**: Acesse a rota `http://localhost:3000/auth/login` para realizar o login, ambos os endpoints estão disponíveis no Swagger.
3. Após o login, copie o token gerado e autentique-se no Swagger clicando no botão **Authorize**.
4. Com isso, você terá acesso a todas as rotas autenticado!

## Estrutura do projeto

A lógica central do negócio está localizada na pasta **domain**, enquanto as integrações com serviços externos, como autenticação, repositórios e banco de dados, são organizadas na pasta **infra**. A camada **application** é responsável por orquestrar os fluxos entre diferentes domínios ou entre domínios e integrações externas. O objetivo principal dessa estrutura é assegurar uma separação bem definida entre as regras de negócio e os serviços de suporte, promovendo flexibilidade e facilitando a manutenção no longo prazo.

## Pasta domain

Esta é a camada que concentra toda a lógica principal da aplicação, englobando entidades, DTOs, serviços e repositórios responsáveis por gerenciar as regras de negócio. O foco é encapsular as decisões fundamentais para o funcionamento do sistema.

Essa abordagem garante que os módulos do domínio sejam bem definidos e independentes de detalhes de infraestrutura, tornando a manutenção mais simples e eficiente.

## Pasta infra

Esta pasta abriga módulos responsáveis pelas integrações com serviços externos (como autenticação, repositórios e banco de dados) ou internos. Esses módulos são projetados para lidar com funções de suporte, mantendo a lógica de negócio isolada.

Os módulos dentro da pasta infra são desenvolvidos para operar de forma autônoma, permitindo substituir ou adicionar novas integrações com facilidade, sem interferir no núcleo do sistema.

## Pasta application

A pasta application contém os módulos responsáveis por orquestrar e coordenar os fluxos de trabalho, conectando os módulos de domínio e de infraestrutura. Ela funciona como uma ponte entre diferentes partes do sistema, sem envolver a lógica de negócio, mas assegurando que as ações adequadas sejam realizadas conforme os eventos do domínio.

Essa camada gerencia a execução dos casos de uso do sistema, organizando a comunicação entre os módulos. Assim, o fluxo de trabalho é conduzido de forma estruturada, mantendo as responsabilidades de cada parte bem definidas e separadas.
