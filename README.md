# PulseStoreWeb

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 11.1.2.

## Descrição do Projeto

O **Pulse Store Web** é uma aplicação de e-commerce que implementa um sistema de checkout para vendas online. O projeto permite que os usuários adicionem produtos ao carrinho e realizem compras, gerando automaticamente a documentação fiscal.

## Estrutura do Projeto
PULSESSTOREWEB/
|-- e2e/
|-- node_modules/
|-- src/
|-- app/
|-- component/
|-- carrinho/
|-- cliente/
|-- confirm-dialog/
|-- endereco-entrega/
|-- home/
|-- item-carrinho/
|-- pagamento/
|-- produto/
|-- produtos/
|-- usuario/
|-- enum/
|-- papel.enum.ts
|-- model/
|-- carrinho.model.ts
|-- carrinhoRequest.model.ts
|-- cliente.model.ts
|-- itemCarrinho.model.ts
|-- pedido.model.ts
|-- produto.model.ts
|-- transportadora.model.ts
|-- usuario.model.ts
|-- services/
|-- carrinho/
|-- cliente/
|-- pedido/
|-- produto/
|-- transportadora/
|-- usuario/
|-- app.component.html
|-- app.component.spec.ts
|-- app.component.css
|-- app.module.ts
|-- assets/


## Servidor de Desenvolvimento

Execute `ng serve` para iniciar um servidor de desenvolvimento. Navegue até `http://localhost:4200/`. A aplicação será recarregada automaticamente se você alterar algum dos arquivos de origem.

## Geração de Componentes

Para gerar um novo componente, execute:

ng generate component component-name

## Você também pode usar os seguintes comandos para gerar diretamente outros itens:

ng generate directive|pipe|service|class|guard|interface|enum|module

Construção
Execute ng build para construir o projeto. Os artefatos de construção serão armazenados no diretório dist/. Use a flag --prod para uma construção de produção.

Execução de Testes Unitários
Para executar os testes unitários, utilize:
ng test

Execução de Testes End-to-End
Para executar os testes end-to-end, utilize:
ng e2e

Documentação da API
 Importe no postman a collection Pulse Store Teste.postman_collection.json diponivel na raiz do projeto

 Para que o projeto funcione, é preciso subir o backend e carregar os produtos e a transportadora.
 Rodar no postman 
  - [POST] Cadastrar Produto 
  - [POST] Criar Transportadora

 Containerização
O projeto está configurado para ser dockerizado, e a imagem será disponibilizada no DockerHub. Instruções para rodar a aplicação em contêineres Docker estão inclusas no arquivo Dockerfile e docker-compose.yml.