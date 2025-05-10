# OncoVision - Breast Cancer Detection

OncoVision é um projeto desenvolvido como parte do Projeto Integrador do 6º semestre do curso de Desenvolvimento de Software Multiplataforma (DSM). Este sistema utiliza tecnologias modernas para auxiliar na detecção de câncer de mama.

## 📋 Descrição

O objetivo do OncoVision é fornecer uma interface intuitiva e eficiente para análise de imagens médicas, utilizando inteligência artificial para identificar possíveis sinais de câncer de mama. Este projeto combina tecnologias de frontend e backend para criar uma aplicação robusta e escalável.

## 🚀 Tecnologias Utilizadas

- **Next.js**: Framework React para renderização do lado do servidor e geração de sites estáticos.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.
- **Chakra UI**: Biblioteca de componentes para construção de interfaces de usuário acessíveis e responsivas.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.

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
├──                       # Configuração do Next.js
├──                       # Dependências e scripts do projeto
├──                       # Configuração do TypeScript
└──                       # Documentação do projeto
```

## 📦 Instalação

1. Certifique-se de ter o **Node.js** instalado em sua máquina. Você pode baixá-lo [aqui](https://nodejs.org/).
2. Clone o repositório do projeto:
   ```bash
   git clone https://github.com/seu-usuario/oncovision.git
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
  <a href="https://mermaid.live/edit#pako:eNq1lk2P2jAQhv9K5NOuBDRA-MqhUrtbtSu1Ktr2VCEhbzIbrE3syHa2SxH_veNAiAk2PTUHIPPOVx5HM-xIIlIgMUlyqtQ9o5mkxYoHeNWW4MPyIdgdDObSTOcQByvyUQJVOrijPAEZLCWkLNFMcBOwIm3AK0iFZhMyHISDsNH2h6-zUpXe2LWW33_8DN5JyJjSILv2XGSMe3NZDV1kLA9aa_78Ca0brCLk1pvx8djHkm5zQVM7baVAclogF6Ul41mrlBj5W8j0XHFk_2qe5j-mfgRVCq7g7CzFC_B_hj_wstL3VFM7VNKUVWpdAMUEvCqe7PPR8KYrCR61BMkKQJAeneKL5ZFUIYTecFC-yokoSproqx48oa9Mb6_qsC4F49qXRG0LfALpy_EssQear1N8Tm5efo_fEaICP0KX1gJ0qTU-l2DBc8k2OrfegPOrJ2zO-g00l3iJzOV1BIZvvdJ-Zh65xeZxqMl5NAuex8Pm53VpEF51OFH09dKA9OiXLB2OV0ema1iUJzUOsDvIQN6EveFt65HTJ8ibcXKDGwI4y7hYkR7O_m80P9zceut_OQxgV3GWnope7cjTjEUYz1hDuqaII8VffY2QrDpm1q1RoHE79xwNm6XY77-vN9a5pYV4tJudZoTO-uio9vh3SQ2Ug2YtN-PR6bSjXh6r061D3_iQHskkS0msZQU9UoAsqLkl9cmsiN4AwiNmtadUvpjNvseYkvJfQhRNmBRVtiHxM80V3lWlwX78n3GySuApyDtRcU3i8ajOQeIdeSPxcDIbhItZNIlm42G4WEymPbJF82A2D-fj0ShahBF-zsf7HvlTlw0Hiyiah9E4nM6Hk3A62f8FdXvOZw">
    <img src="https://mermaid.ink/img/pako:eNq1lk2P2jAQhv9K5NOuBDRA-MqhUrtbtSu1Ktr2VCEhbzIbrE3syHa2SxH_veNAiAk2PTUHIPPOVx5HM-xIIlIgMUlyqtQ9o5mkxYoHeNWW4MPyIdgdDObSTOcQByvyUQJVOrijPAEZLCWkLNFMcBOwIm3AK0iFZhMyHISDsNH2h6-zUpXe2LWW33_8DN5JyJjSILv2XGSMe3NZDV1kLA9aa_78Ca0brCLk1pvx8djHkm5zQVM7baVAclogF6Ul41mrlBj5W8j0XHFk_2qe5j-mfgRVCq7g7CzFC_B_hj_wstL3VFM7VNKUVWpdAMUEvCqe7PPR8KYrCR61BMkKQJAeneKL5ZFUIYTecFC-yokoSproqx48oa9Mb6_qsC4F49qXRG0LfALpy_EssQear1N8Tm5efo_fEaICP0KX1gJ0qTU-l2DBc8k2OrfegPOrJ2zO-g00l3iJzOV1BIZvvdJ-Zh65xeZxqMl5NAuex8Pm53VpEF51OFH09dKA9OiXLB2OV0ema1iUJzUOsDvIQN6EveFt65HTJ8ibcXKDGwI4y7hYkR7O_m80P9zceut_OQxgV3GWnope7cjTjEUYz1hDuqaII8VffY2QrDpm1q1RoHE79xwNm6XY77-vN9a5pYV4tJudZoTO-uio9vh3SQ2Ug2YtN-PR6bSjXh6r061D3_iQHskkS0msZQU9UoAsqLkl9cmsiN4AwiNmtadUvpjNvseYkvJfQhRNmBRVtiHxM80V3lWlwX78n3GySuApyDtRcU3i8ajOQeIdeSPxcDIbhItZNIlm42G4WEymPbJF82A2D-fj0ShahBF-zsf7HvlTlw0Hiyiah9E4nM6Hk3A62f8FdXvOZw?type=png" alt="Diagrama Relacional">
  </a>
</div>
