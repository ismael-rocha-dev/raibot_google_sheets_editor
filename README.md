# RAIBOT GOOGLE SHEETS EDITOR

## DESCRIÇÃO

Este projeto consiste em uma API que edita a Planilha de horas do RAITEC. Esta API foi pensada para ser usada em
conjunto com o projeto [RAIBOT](https://github.com/ismaellimarocha23/raibot), sendo a parte que realmente se comunica com a API do Google Spreadsheets.

## COMO USAR

O programa utiliza as [APIs do Cloud](https://cloud.google.com/apis), especificamente a API do Google Sheets. Então para que o programa funcione, é necessário que seja criado um projeto no console do [GoogleAPIS](https://console.cloud.google.com/apis/dashboard) e nesse projeto seja ativado o serviço Google Sheets API.

As instruções detalhadas de como fazer isso podem ser encontradas [AQUI](https://developers.google.com/sheets/api/quickstart/nodejs)

## INFORMAÇÕES

- O arquivo `.json` gerado no projeto do GoogleAPIs deve ser salvo na raiz do projeto como `credentials.json`.
- A primeira vez que executar o projeto tem que ser em um Desktop, pois é necessário fazer isso em um navegador, logo, não será possível fazer isso pelo shell do servidor.
- Em ambientes de teste é necessário criar um arquivo **.env** contendo a porta em que o servidor irá escutar, exemplo:

```
PORT=3000
```
