# Stranger Things - Experiência Interativa

Este é um projeto de site temático de "Stranger Things" focado em animações de alta performance e interatividade, utilizando a biblioteca **GSAP (GreenSock Animation Platform)**. O design busca capturar a atmosfera misteriosa e nostálgica da série.

## 🚀 Tecnologias Utilizadas

- **HTML5 & CSS3**
- **JavaScript (ES6+)**
- **GSAP Core** - Motor de animação.
- **GSAP Plugins:**
  - `ScrollTrigger`: Para animações baseadas na rolagem da página.
  - `ScrollSmoother`: Para suavizar o scroll da página (efeito smooth scroll).
  - `SplitText`: Para dividir textos em linhas, palavras ou caracteres e animá-los individualmente.

## ✨ Funcionalidades e Animações

O projeto conta com uma série de animações orquestradas via JavaScript:

1.  **Preloader SVG:**
    - Animação de traço (`strokeDashoffset`) e preenchimento (`fill`) no elemento `#loading` antes de revelar o site.
    - Transição suave para o conteúdo principal após o carregamento.

2.  **Smooth Scroll:**
    - Implementação do `ScrollSmoother` para uma navegação fluida e moderna.

3.  **Animações de Entrada (Hero):**
    - Fade-in da seção `.hero`.
    - Movimentação vertical oposta (efeito parallax simples) nas imagens (`picture`).

4.  **Scroll Triggers (Ao Rolar):**
    - **Cards:** Efeito de _blur_ e opacidade com _stagger_ (atraso em cascata) ao entrarem na tela.
    - **Lista de Agradecimento:** Animação lateral (`x: 40`) com _blur_ nos itens da lista `.secaoObrigado`.
    - **Footer:** Efeito de revelação/parallax no rodapé.

5.  **Animação de Texto (SplitText):**
    - Os elementos com a classe `.textoSplit` são divididos em caracteres.
    - Animação individual de cada letra subindo (`y: 40`) e aparecendo conforme o usuário rola a página (`top 85%`).

## 📂 Estrutura de Pastas

A organização sugerida para os arquivos do projeto é:

```text
root/
├── index.html      # Estrutura HTML principal
├── style.css       # Folha de estilos
├── script.js       # Scripts de animação
└── assets/         # Imagens e vetores (SVG)
```

## ⚠️ Requisitos do GSAP

Este projeto utiliza plugins **Premium** do GSAP (`ScrollSmoother` e `SplitText`), que fazem parte do **Club GreenSock**.

- Para uso local/desenvolvimento, certifique-se de ter os arquivos `.js` desses plugins incluídos no projeto ou utilize as versões de teste (trial) disponíveis no CodePen/CDN oficial do GSAP para ambientes de sandbox.
- Para produção, é necessária uma licença válida do Club GreenSock.

## 📦 Como Executar

1.  Clone este repositório ou baixe os arquivos.
2.  Certifique-se de que a estrutura de pastas contém o `index.html`, `style.css` (ou similar) e o `script.js`.
3.  Abra o arquivo `index.html` em seu navegador.
    - _Recomendado:_ Utilize uma extensão como "Live Server" no VS Code para evitar problemas de CORS com módulos JS ou carregamento de assets.

## 👨‍💻 Autor

Desenvolvido por **Ylgner Witoszynski Santana**.
