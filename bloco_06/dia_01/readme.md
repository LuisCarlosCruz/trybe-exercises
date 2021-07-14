### PARTE 01

> Vamos praticar um pouco, criando uma tela de login? 🔥

- Adicione os campos de entrada para email e senha.
- Adicione um checkbox com o texto Lembre-me .
- Adicione um botão com o texto Entrar .
- Adicione os placeholder Digite seu email e Digite sua senha para os campos de email e senha.
- Adicione o atributo required para os campos de email e senha.
- Adicione o atributo autocomplete="off" para o campo de email.
- Adicione o atributo autofocus para o campo de email.

### PARTE 02 Criando um formulário de currículo.

Crie um arquivo HTML para o formulário.

> 1- Crie um `<fieldse>` para os seguintes dados pessoais:

- Nome - Texto
  Limite de 40 caracteres
  Campo obrigatório
- Email - Texto
  Limite de 50 caracteres
  Campo obrigatório
- CPF - Texto
  Limite de 11 caracteres
  Campo obrigatório
- Endereço - Texto
  Limite de 200 caracteres
  Campo obrigatório
- Cidade - Texto
  Limite de 28 caracteres
  Campo obrigatório
- Estado - Select
  Todos os estados do Brasil
  Utilize estruturas de repetição via JavaScript para gerar os `<option>`
  Campo obrigatório
- Tipo - Radio Button
  Casa, Apartamento
  Campo obrigatório

> 2- Crie outro `<fieldset>` para dados do seu último emprego.

- Resumo do currículo - TextArea
  Limite de 1000 caracteres
  Campo obrigatório
- Cargo - Texto
  Limite de 40 caracteres
  Campo obrigatório
- Descrição do cargo - Texto
  Limite de 500 caracteres
  Campo obrigatório
- Data de início - Texto
  Verificar o formato da data dd/mm/aaaa .
  O dia deve ser > 0 e <= 31.
  O mês deve ser > 0 e <= 12.
  O ano não pode ser negativo.
  Caso alguma das condições seja inválida no momento do envio do formulário, exibir via alert uma mensagem de erro contextualizada.
  Campo obrigatório.

> 3- Logo abaixo do formulário, crie um botão que:

- Chame uma função JavaScript e interrompa o fluxo automático do form utilizando o preventDefault() . Note que isso vai impedir as validações do HTML ao fazer o submit.
- Implemente, agora, no Javascript , as validações que foram pedidas ao longo da montagem do formulário.
- Caso todos os dados sejam válidos, monte uma `<div>` com o consolidado dos dados que foram inseridos no formulário.
- Caso haja algum dado inválido, mostre em uma `<div>` uma mensagem de erro. Se o erro for na Data de Início , a mensagem deve ser contextualizada.

> 4- Crie um botão Limpar que limpa todos os campos do formulário e a `<div>` com seu currículo também.
