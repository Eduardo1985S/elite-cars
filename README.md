# Página Parallax - Galeria de Carros

## 📋 Descrição

Uma página web com efeito parallax apresentando uma galeria exclusiva de carros de luxo. As imagens possuem um efeito especial de máscara borrada com cadeado que revela a imagem ao passar o mouse.

## ✨ Características

- **Efeito Parallax**: Rolagem suave com imagens de fundo fixas
- **Galeria Interativa**: 9 imagens de carros de luxo com efeito de desbloqueio
- **Máscara Borrada**: Efeito blur com cadeado que desaparece ao hover
- **Design Responsivo**: Adaptado para desktop, tablet e mobile
- **Animações Suaves**: Transições e animações em CSS
- **Performance Otimizada**: Carregamento rápido e interações fluidas

## 🎨 Efeitos Visuais

1. **Hero Section**: Tela inicial com parallax e overlay escuro
2. **Galeria com Blur**: Imagens inicialmente borradas com cadeado
3. **Hover Effect**: Ao passar o mouse, a máscara desaparece revelando a imagem
4. **Zoom na Imagem**: Leve efeito de zoom ao interagir
5. **Animação de Entrada**: Itens aparecem gradualmente ao rolar a página

## 🚀 Como Usar

1. Abra o arquivo `index.html` em qualquer navegador moderno
2. Role a página para ver o efeito parallax
3. Passe o mouse sobre as imagens para revelar os carros
4. A página funciona completamente offline após o primeiro carregamento

## 🛠️ Tecnologias

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos avançados com animações e parallax
- **JavaScript**: Interatividade e efeitos dinâmicos
- **Font Awesome**: Ícones (cadeado)
- **Unsplash**: Imagens de alta qualidade

## 📱 Responsividade

A página é totalmente responsiva e se adapta a:
- 🖥️ Desktop (1920px+)
- 💻 Laptop (1024px - 1919px)
- 📱 Tablet (768px - 1023px)
- 📱 Mobile (< 768px)

## 🎯 Recursos Especiais

- **Animação de Pulse**: O cadeado pulsa continuamente
- **Transições Suaves**: Todas as interações possuem transições
- **Lazy Loading**: Otimização no carregamento de imagens
- **Easter Egg**: Clique rapidamente 5 vezes em qualquer imagem para ativar um efeito especial

## 🔧 Customização

Você pode facilmente customizar:

### Mudar as Imagens
Edite as URLs no arquivo `index.html`:
```html
<img src="SUA_URL_AQUI" alt="Descrição">
```

### Ajustar o Efeito Blur
No arquivo `styles.css`, modifique:
```css
backdrop-filter: blur(15px); /* Aumente ou diminua o valor */
```

### Modificar Cores
Altere o gradiente da seção de introdução:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## 📦 Estrutura de Arquivos

```
pagina-parallax-carros/
│
├── index.html          # Página principal
├── styles.css          # Estilos e animações
├── script.js           # Interatividade
└── README.md          # Este arquivo
```

## 🌐 Imagens Utilizadas

Todas as imagens são do Unsplash (licença livre):
- Porsche 911
- Ferrari 458
- Lamborghini Huracán
- McLaren 720S
- Aston Martin DB11
- BMW M8
- Mercedes-AMG GT
- Audi R8
- Bugatti Chiron

## 💡 Dicas

- Para melhor experiência, use navegadores modernos (Chrome, Firefox, Edge)
- O efeito parallax pode ter desempenho reduzido em dispositivos móveis
- As imagens são carregadas via CDN (requer conexão com internet)

## 🎨 Paleta de Cores

- Primária: `#667eea` (Azul)
- Secundária: `#764ba2` (Roxo)
- Fundo: `#f5f5f5` (Cinza claro)
- Texto: `#333` (Cinza escuro)

## 📄 Licença

Este projeto é de uso livre para fins educacionais e pessoais.

---

Desenvolvido com ❤️ e ☕
