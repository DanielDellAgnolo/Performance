# Projeto performance

![Project Banner](https://img.shields.io/badge/Performance%20Testing%20Project%20-%20Powered%20by%20K6-blueviolet?style=for-the-badge&logo=k6&logoColor=white)

## Descrição
O objetivo deste projeto é demonstrar dominio em testes de performance. Utilizando uma API Mock, facilitando a execução local do projeto. 

## Ferramentas Utilizadas
- **Framework**: ![VS Code Logo](https://img.icons8.com/fluency/20/000000/visual-studio-code-2019.png) ![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=flat-square&logoColor=white)
- **Ferramenta**: ![K6](https://img.shields.io/badge/K6-0.54.0-6A0DAD?style=flat-square&logo=k6&logoColor=white)
- **Versão Node.js**: ![Node.js](https://img.shields.io/badge/Node.js-20.13.1-339933?style=flat-square&logo=node.js&logoColor=white)
- **Linguagem do Projeto**: ![TypeScript](https://img.shields.io/badge/TypeScript-FFD700?style=flat-square&logo=typescript&logoColor=black)

## Pré-requisitos do projeto
- **Java**: ![Java Logo](https://img.icons8.com/color/20/000000/java-coffee-cup-logo.png) ![JDK 11](https://img.shields.io/badge/JDK-11-007396?style=flat-square&logo=java&logoColor=white)

## Como iniciar a API Mock do projeto
Para iniciar a API Mock, execute o seguinte comando no PowerShell:

```powershell
java -jar wiremock-standalone-3.9.1.jar
```

## Como executar os cenários de performance

```powershell
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=results/html-report-validar-inclusao.html k6 run tests/validarInclusao.js
```
![alt text](image-2.png)

```powershell
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=reslts/html-report-validar-busca.html k6 run tests/validarBusca.js
``` 
![alt text](image-1.png)