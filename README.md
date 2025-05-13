# OncoVision - Breast Cancer Detection

OncoVision é um projeto desenvolvido como parte do Projeto Integrador do 6º semestre do curso de Desenvolvimento de Software Multiplataforma (DSM). Este sistema utiliza tecnologias modernas para auxiliar na detecção de câncer de mama.

## 📋 Descrição

O objetivo do OncoVision é fornecer uma interface intuitiva e eficiente para análise de imagens médicas, utilizando inteligência artificial para identificar possíveis sinais de câncer de mama. Este projeto combina tecnologias de frontend e backend para criar uma aplicação robusta e escalável.

## 🚀 Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Next.js**: Framework React para renderização do lado do servidor e geração de sites estáticos.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **Chakra UI**: Biblioteca de componentes para construção de interfaces de usuário acessíveis e responsivas.
- **Axios**: Biblioteca para realizar requisições HTTP de forma simples e eficiente, utilizada para comunicação com a API do sistema.

## 📂 Estrutura do Projeto

```plaintext
.
├── .next/                # Arquivos gerados pelo Next.js
├── public/               # Arquivos estáticos
├── src/
│   ├── app/              # Configuração e layout principal
│   ├── components/       # Componentes reutilizáveis
│   ├── theme/            # Configurações de tema
├── .gitignore            # Arquivos ignorados pelo Git
├── next.config.js        # Configuração do Next.js
├── [package.json]        # Dependências e scripts do projeto
├── [tsconfig.json]       # Configuração do TypeScript
└── [README.md]           # Documentação do projeto
```

## 📦 Instalação

1. Certifique-se de ter o **Node.js** instalado em sua máquina. Você pode baixá-lo [aqui](https://nodejs.org/).
2. Clone o repositório do projeto:
   ```bash
   git clone https://github.com/Achette/OncoVision-Breast_Cancer_Detection.git
   ```
3. Navegue até o diretório do projeto:
   ```bash
   cd oncovision
   ```
4. Instale as dependências necessárias:
   ```bash
   npm install
   ```
5. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
6. Acesse a aplicação no navegador em: http://localhost:3000.

## 📊 DER - Diagrama Relacional

<div align="center">
  <a href="https://mermaid.live/edit#pako:eNqNVM1u2zAMfhWBp7RLDTux41i3oj1stwHdLpuHgrUYR6gtGbKctQ3yQHuOvdhk52f2bKDTSeL3kfxEUtpDpgUBh6zAur6XmBssU8Xc6izsa02G7Y-Wdn14sEaqnDXOrrCkMVI5t5_aiB5iKJe1JTO76hkLnUs1u2KcnRytfiZ1JBxS1RfxSVWNvUeLAyWbQqNlJaF6NChkU09jll5sY2garMjIkpy0aRgN4TRSl1rbraK6nlT82ZCQmZVaDSRLZVl1gca1K_CJip7Z3Zm-OIEsc0IsiUe076T76AqtzesoqxT_E7ZDc7KnKF13RrG__5jUcNvYLSkrM2y5D2R2MqOBjssYnIdnfhmWNtFOD0Qe52OaOp6YzmWHhRTt3Vr7rENb9pPWhevZO5WbUnzq1ewygMOC_BOxeyspBCmwmxu38T3v2u17s8DZBt-mycGAeW4jZ5ZO77EXJoXrvtvf5-HuijWhQDb2Oofs5Rypy7Syv3-VPYWON91Y7r4AHBLHtexIMIfcSAHcmobmUJIpsT1CV-kUXHT3jwB3W4HmOYVUHZxPheqb1uXZzegm3wLfYFG7U1O1fT79VxcKKUHmTjfKAo-SLgTwPbwAj9een8RhHATLcBEESTyHV-ArL17762W0CBaLKIiiVXSYw1uX1PeSMFz74TLw42S9CqPDH0UenbU">
    <img src="https://mermaid.ink/img/pako:eNqNVM1u2zAMfhWBp7RLDTux41i3oj1stwHdLpuHgrUYR6gtGbKctQ3yQHuOvdhk52f2bKDTSeL3kfxEUtpDpgUBh6zAur6XmBssU8Xc6izsa02G7Y-Wdn14sEaqnDXOrrCkMVI5t5_aiB5iKJe1JTO76hkLnUs1u2KcnRytfiZ1JBxS1RfxSVWNvUeLAyWbQqNlJaF6NChkU09jll5sY2garMjIkpy0aRgN4TRSl1rbraK6nlT82ZCQmZVaDSRLZVl1gca1K_CJip7Z3Zm-OIEsc0IsiUe076T76AqtzesoqxT_E7ZDc7KnKF13RrG__5jUcNvYLSkrM2y5D2R2MqOBjssYnIdnfhmWNtFOD0Qe52OaOp6YzmWHhRTt3Vr7rENb9pPWhevZO5WbUnzq1ewygMOC_BOxeyspBCmwmxu38T3v2u17s8DZBt-mycGAeW4jZ5ZO77EXJoXrvtvf5-HuijWhQDb2Oofs5Rypy7Syv3-VPYWON91Y7r4AHBLHtexIMIfcSAHcmobmUJIpsT1CV-kUXHT3jwB3W4HmOYVUHZxPheqb1uXZzegm3wLfYFG7U1O1fT79VxcKKUHmTjfKAo-SLgTwPbwAj9een8RhHATLcBEESTyHV-ArL17762W0CBaLKIiiVXSYw1uX1PeSMFz74TLw42S9CqPDH0UenbU?type=png" alt="Diagrama Relacional">
  </a>
</div>