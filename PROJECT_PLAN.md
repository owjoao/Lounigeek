# 🚀 PROJETO LOUNIGEEK — PLANO DE DESENVOLVIMENTO

## 1. Visão Geral
Desenvolvimento do e-commerce completo e de alta fidelidade para a **Lounigeek**, marca brasileira especializada em action figures originais importados do Japão, mangás em PT-BR e vestuário/acessórios geek.

- **Stack**: HTML5 Semântico, CSS3 Moderno (Custom Properties, Flexbox, CSS Grid, Backdrop Filter, Glassmorphism), JavaScript Modular (ES6+), SVGs customizados e alta densidade de pixels.
- **Identidade Visual**:
  - Primária: `#C9A6E5` (Lavanda clara / predominante)
  - Secundária: `#23215F` (Azul-marinho arroxeado / autoridade e contraste)
  - Destaque: `#A73178` (Magenta amora / CTAs e promoções)
  - Superfícies: `#FAF8FC` (Branco suave), `#F2EAF9` (Lavanda translúcido), `#201C35` (Texto principal)
  - Apoio: `#777187` (Texto secundário)

---

## 2. Status das Fases de Execução

- [x] **FASE 1 — Auditoria e Arquitetura**
  - [x] Criação da estrutura de pastas modular (`styles/`, `scripts/`, `assets/images/`)
  - [x] Elaboração do `PROJECT_PLAN.md`
  - [x] Elaboração do `ASSET_MANIFEST.md`

- [x] **FASE 2 — Sistema de Design e Estrutura Visual**
  - [x] Implementação de tokens CSS globais (`:root`) com a paleta exata
  - [x] Tipografia refinada (Plus Jakarta Sans, Noto Sans JP, Cinzel)
  - [x] Componentes base (Botões pill com gradiente, Cards com bordas sutis e elevação, Badges, Tooltips)

- [x] **FASE 3 — Inventário e Extração/Geração de Imagens**
  - [x] Imagem Hero (Paisagem noturna japonesa, pagoda, cerejeiras, guerreiro anime, kanji 夢を追え)
  - [x] Imagens das 6 Categorias (Action figures, Mangás, Roupas, Bonés, Chaveiros, E muito mais)
  - [x] Imagens dos 5 Produtos em Destaque (Itachi, Box One Piece, Tanjiro, Goku Ultra Instinto, Camiseta Akatsuki)
  - [x] Banner Editorial Action Figures do Japão com elemento circular japonês
  - [x] Cards Editoriais Mangás e Roupas & Acessórios
  - [x] Banner da Comunidade (Gojo Satoru, letreiros noturnos)
  - [x] Fotos e Avatares de Depoimentos
  - [x] Banner Instagram (Nezuko, sakura)
  - [x] Logotipos oficiais em SVG vetorial (versão colorida para header e versão branca para footer)

- [x] **FASE 4 — Implementação Completa das Seções**
  - [x] Header fixo com logo SVG, menu, busca, conta e carrinho interativo
  - [x] Hero cinematográfico com tipografia assimétrica e CTA
  - [x] Faixa de benefícios com 4 pilares
  - [x] Seção de Categorias interativas
  - [x] Seção "Os queridinhos da galera" com cards de produtos, preços e tags
  - [x] Seção editorial Action Figures do Japão
  - [x] Grid editorial Mangás e Roupas/Acessórios
  - [x] Seção "Mais que uma loja, uma comunidade"
  - [x] Carrossel de avaliações e depoimentos
  - [x] Faixa visual Instagram com botão de perfil
  - [x] Rodapé completo com links, formas de pagamento e dados institucionais

- [x] **FASE 5 — Animações e Efeitos de Rolagem**
  - [x] Fade-in e transições suaves nos elementos
  - [x] Microinterações de hover nos cards, botões e ícones
  - [x] Efeito de mudança de estilo do Header ao rolar a página (`.scrolled`)
  - [x] Suporte a `prefers-reduced-motion`

- [x] **FASE 6 — Funcionalidades e Interações Reais**
  - [x] Carrinho de compras no client-side (Drawer lateral, adicionar, remover, alterar quantidade, cálculo do subtotal, badge em tempo real, persistência em localStorage)
  - [x] Sistema de Favoritos (coração toggle com persistência)
  - [x] Modal de Busca interativo com filtro instantâneo de produtos
  - [x] Modal de Detalhes Rápidos de Produto (Quick View)
  - [x] Menu mobile com drawer lateral acessível e bloqueio de scroll

- [x] **FASE 7 — Responsividade, SEO e Desempenho**
  - [x] Layout fluido para Mobile, Tablet e Desktop
  - [x] Metatags Open Graph, Twitter Cards, Schema.org LocalBusiness/Store
  - [x] Otimização de imagens, lazy loading e atributos de acessibilidade (ARIA, alt)

- [x] **FASE 8 — Testes, Correções e Validação Visual**
  - [x] Verificação em múltiplos viewports via Playwright/Chrome Headless
  - [x] Validação de carrinho, busca e filtros
  - [x] Capturas de tela full-page em desktop e mobile arquivadas em `assets/screenshots/`

- [x] **FASE 9 — Entrega e Documentação**
  - [x] Relatório final de entrega e instruções de execução local

