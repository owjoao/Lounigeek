// ==========================================================================
// 📦 LOUNIGEEK — CATÁLOGO COMPLETO, CATEGORIAS, FAQ & DADOS DE CONVERSÃO
// Paleta Oficial: #C9A6E5 (Lavanda), #23215F (Azul Marinho), #A73178 (Magenta)
// ==========================================================================

window.LOUNIGEEK_DATA = (function() {
  const categories = [
    {
      id: "action-figures",
      name: "Action Figures",
      slug: "action-figures",
      image: "assets/categories/categoria-action-figures.webp",
      count: 48,
      badge: "Importados",
      description: "Figures originais lacrados do Japão com selo de autenticidade Toei e Bandai."
    },
    {
      id: "mangas",
      name: "Mangás",
      slug: "mangas",
      image: "assets/categories/categoria-mangas.webp",
      count: 120,
      badge: "Em PT-BR",
      description: "Títulos completos, clássicos e lançamentos em português brasileiro com papel de alta gramatura."
    },
    {
      id: "roupas",
      name: "Roupas & Vestuário",
      slug: "roupas",
      image: "assets/categories/categoria-camisetas.webp",
      count: 35,
      badge: "Algodão 100%",
      description: "Camisetas exclusivas confeccionadas em meia-malha penteada 30.1 com estampa serigráfica duradoura."
    },
    {
      id: "bones",
      name: "Bonés Geek",
      slug: "bones",
      image: "assets/categories/categoria-bones.webp",
      count: 18,
      badge: "Bordado Premium",
      description: "Bonés modelo aba curva e trucker com fecho ajustável e bordados de alta definição."
    },
    {
      id: "chaveiros",
      name: "Chaveiros & Pins",
      slug: "chaveiros",
      image: "assets/categories/categoria-chaveiros.webp",
      count: 64,
      badge: "Esmalte Duro",
      description: "Pins e chaveiros metálicos colecionáveis com banho reforçado e acabamento esmaltado brilhante."
    },
    {
      id: "outros",
      name: "Colecionáveis Especiais",
      slug: "todos",
      image: "assets/categories/categoria-outros-geek.webp",
      isSpecial: true,
      count: 250,
      badge: "Explorar Tudo",
      description: "Canecas térmicas, pôsteres artísticos, réplicas e itens decorativos de edição limitada."
    }
  ];

  const products = [
    {
      id: "itachi-uchiha",
      name: "Itachi Uchiha (Susanoo Edition)",
      subtitle: "Naruto Shippuden | Bandai Spirits",
      category: "Action Figure",
      categoryId: "action-figures",
      price: 499.90,
      oldPrice: 589.90,
      pixPrice: 474.90,
      image: "assets/products/produto-figure-demo-01.webp",
      badge: "Original Japão",
      badgeType: "japan",
      isFeatured: true,
      rating: 5.0,
      reviewsCount: 38,
      stock: 4,
      installment: "10x de R$ 49,99 sem juros",
      specs: {
        fabricante: "Bandai Spirits / Tamashii Nations",
        altura: "23 cm",
        escala: "1/8",
        material: "PVC e ABS de alta densidade",
        origem: "Tóquio, Japão (Importação Oficial)",
        incluso: "Base de acrílico com efeito corvo, cabeça intercambiável e certificado"
      },
      description: "Estátua oficial Bandai Spirits Spirited Collector's Edition. Escultura minuciosa da capa da Akatsuki com sombreamento dinâmico, Sharingan detalhado e acabamento fosco premium. Produto 100% original importado do Japão com selo Toei Animation e lacre de fábrica."
    },
    {
      id: "manga-one-piece-box-1",
      name: "Box Especial One Piece (Vol. 1 a 23)",
      subtitle: "Saga East Blue & Alabasta | Tradução Oficial PT-BR",
      category: "Mangás",
      categoryId: "mangas",
      price: 299.90,
      oldPrice: 349.90,
      pixPrice: 284.90,
      image: "assets/products/produto-manga-demo-01.webp",
      badge: "Box de Luxo",
      badgeType: "special",
      isFeatured: true,
      rating: 5.0,
      reviewsCount: 52,
      stock: 14,
      installment: "6x de R$ 49,98 sem juros",
      specs: {
        editora: "Panini Comics Brasil",
        formato: "13,7 x 20 cm (Papel Offset 90g)",
        paginas: "Aprox. 4.600 páginas no total",
        idioma: "Português do Brasil",
        incluso: "Caixa rígida ilustrada, marcador de páginas exclusivo e livreto bônus"
      },
      description: "O box definitivo para fãs de Eiichiro Oda. Reúne todos os 23 volumes iniciais da jornada de Monkey D. Luffy em papel de alta gramatura que não amarela com facilidade. Caixa colecionável de papelão rígido com laminação especial e artes oficiais."
    },
    {
      id: "tanjiro-kamado",
      name: "Tanjiro Kamado (Dança do Deus do Fogo)",
      subtitle: "Demon Slayer: Kimetsu no Yaiba | Banpresto",
      category: "Action Figure",
      categoryId: "action-figures",
      price: 399.90,
      oldPrice: 460.00,
      pixPrice: 379.90,
      image: "assets/products/produto-acessorio-demo-01.webp",
      badge: "Original Banpresto",
      badgeType: "japan",
      isFeatured: true,
      rating: 4.9,
      reviewsCount: 29,
      stock: 6,
      installment: "8x de R$ 49,98 sem juros",
      specs: {
        fabricante: "Banpresto / Bandai",
        altura: "20 cm",
        escala: "Não escalado",
        material: "PVC Premium com efeitos translúcidos",
        origem: "Importado do Japão",
        incluso: "Base circular com pegada firme e lâmina Nichirin negra"
      },
      description: "Figura dinâmica de Tanjiro executando a Hinokami Kagura. Destaque para a pintura fiel do haori xadrez verde e preto, brincos Hanafuda esculpidos em relevo e efeitos translúcidos de chamas que reagem à iluminação de vitrines."
    },
    {
      id: "camiseta-akatsuki",
      name: "Camiseta Streetwear Nuvem Akatsuki",
      subtitle: "Corte Oversized Premium | 100% Algodão Penteado",
      category: "Roupas",
      categoryId: "roupas",
      price: 89.90,
      oldPrice: 119.90,
      pixPrice: 85.40,
      image: "assets/products/produto-camiseta-demo-01.webp",
      badge: "Best Seller",
      badgeType: "hot",
      isFeatured: true,
      rating: 4.9,
      reviewsCount: 74,
      stock: 22,
      installment: "2x de R$ 44,95 sem juros",
      specs: {
        composicao: "100% Algodão fio 30.1 penteado premium",
        modelagem: "Streetwear unissex com gola reforçada 2,5cm",
        estampa: "Silk-screen de alta densidade toque zero",
        tamanhos: "P, M, G, GG e XG",
        cuidados: "Lavagem em máquina suave, não desbota nem encolhe"
      },
      description: "A clássica nuvem vermelha da Akatsuki reinterpretada com estética contemporânea minimalista. Tecido encorpado e macio que garante caimento impecável tanto para eventos geek quanto para o dia a dia na cidade."
    },
    {
      id: "bone-konoha",
      name: "Boné Aba Curva Símbolo Konoha",
      subtitle: "Bordado em Relevo 3D | Fecho Strapback Metal",
      category: "Bonés",
      categoryId: "bones",
      price: 79.90,
      oldPrice: 99.90,
      pixPrice: 75.90,
      image: "assets/categories/categoria-bones.webp",
      badge: "Lançamento",
      badgeType: "new",
      isFeatured: true,
      rating: 4.8,
      reviewsCount: 18,
      stock: 12,
      installment: "2x de R$ 39,95 sem juros",
      specs: {
        modelo: "6 gomos estruturado estilo dad hat",
        fechamento: "Strapback com fivela metálica gravada",
        bordado: "Fio acetinado fosco com relevo de 2mm",
        tamanho: "Único ajustável (54 a 60 cm)"
      },
      description: "Boné premium preto com o emblemático símbolo da Vila Oculta da Folha bordado na frente e pequeno kanji na lateral traseira. Conforto térmico com ilhoses respiráveis e estrutura duradoura."
    },
    {
      id: "chaveiro-espada-zoro",
      name: "Chaveiro Colecionável Katana Wado Ichimonji",
      subtitle: "Liga de Zinco Metálica | Bainha Removível",
      category: "Chaveiros",
      categoryId: "chaveiros",
      price: 49.90,
      oldPrice: 65.00,
      pixPrice: 47.40,
      image: "assets/categories/categoria-chaveiros.webp",
      badge: "Colecionável",
      badgeType: "special",
      isFeatured: true,
      rating: 5.0,
      reviewsCount: 31,
      stock: 19,
      installment: "Preço único promocional",
      specs: {
        comprimento: "16 cm",
        material: "Metal maciço com esmaltação protetora",
        peso: "65 gramas",
        mecanismo: "Bainha funcional com trava suave"
      },
      description: "Miniatura pesada e detalhada da lendária espada de Roronoa Zoro em One Piece. Acabamento brilhante, lâmina sem fio (segura para uso pessoal) e argola resistente que não solta na mochila."
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Lucas F.",
      city: "São Paulo, SP",
      verified: true,
      avatar: "assets/icons/avatar-lucas.svg",
      stars: 5,
      date: "Há 3 dias",
      text: "Minha estátua do Itachi chegou impecável! Caixa protegida com dupla camada de plástico bolha e cantoneiras rígidas. Coleciono há 8 anos e pouquíssimas lojas no Brasil têm esse cuidado.",
      productName: "Itachi Uchiha (Susanoo Edition)"
    },
    {
      id: 2,
      name: "Fernanda S.",
      city: "Curitiba, PR",
      verified: true,
      avatar: "assets/icons/avatar-fernanda.svg",
      stars: 5,
      date: "Há 1 semana",
      text: "A Lounigeek é sensacional! O Box de One Piece veio lacrado de fábrica com o pôster perfeito. O atendimento tirou todas as minhas dúvidas pelo WhatsApp em menos de 5 minutos.",
      productName: "Box Especial One Piece (Vol. 1 a 23)"
    },
    {
      id: 3,
      name: "Rafael M.",
      city: "Belo Horizonte, MG",
      verified: true,
      avatar: "assets/icons/avatar-rafael.svg",
      stars: 5,
      date: "Há 2 semanas",
      text: "Figura 100% original com selo holográfico dourado comprovando importação japonesa. Nada de bootleg ou réplica barata. Já virei cliente fiel da loja!",
      productName: "Tanjiro Kamado (Banpresto)"
    }
  ];

  const comparisons = {
    title: "Por que os colecionadores escolhem a Lounigeek?",
    subtitle: "Compare a transparência e o compromisso da nossa curadoria com as alternativas genéricas do mercado.",
    items: [
      {
        feature: "Autenticidade das Peças",
        others: "Risco alto de réplicas chinesas (bootlegs) com pintura borrada e encaixes frouxos.",
        lounigeek: "100% originais e importados do Japão com selos de licenciamento (Bandai, Toei, Good Smile)."
      },
      {
        feature: "Embalagem de Envio",
        others: "Envelopes plásticos finos ou caixas frágeis que chegam amassadas e desvalorizam o item.",
        lounigeek: "Padrão de Colecionador: Plástico-bolha duplo, cantoneiras rígidas e caixa reforçada sob medida."
      },
      {
        feature: "Tempo de Resposta",
        others: "Dias para responder via e-mail ou atendimento robótico sem conhecimento de cultura geek.",
        lounigeek: "Atendimento humano e prioritário em minutos via WhatsApp, feito por fãs que entendem do assunto."
      },
      {
        feature: "Transparência de Preço",
        others: "Surpresas com taxas alfandegárias ocultas e fretes abusivos na finalização.",
        lounigeek: "Produtos já nacionalizados no Brasil: pronta entrega sem taxas surpresa e frete grátis acima de R$ 299."
      }
    ]
  };

  const faqs = [
    {
      id: "faq-1",
      question: "Os action figures são realmente 100% originais?",
      answer: "Sim, absolutamente todos os nossos action figures são originais, novos e lacrados de fábrica. Trabalhamos exclusivamente com importação oficial direta de distribuidores autorizados no Japão (como Bandai Spirits, Banpresto, Good Smile Company e Kotobukiya). Cada peça acompanha selo holográfico de autenticidade na caixa."
    },
    {
      id: "faq-2",
      question: "Como os produtos são embalados para não amassarem no frete?",
      answer: "Nós sabemos que para um colecionador, a caixa original intacta vale tanto quanto a figura. Por isso, utilizamos embalagem em três camadas: manta de proteção anti-risco, múltiplas voltas de plástico-bolha reforçado e caixa de papelão ondulado de alta resistência com preenchimento interno para amortecer impactos dos Correios e transportadoras."
    },
    {
      id: "faq-3",
      question: "Qual o prazo de envio e como acompanho a entrega?",
      answer: "Nossos produtos já estão fisicamente em estoque no Brasil. Pedidos confirmados até as 14h são despachados no mesmo dia útil! O código de rastreamento é enviado automaticamente para o seu e-mail e WhatsApp com notificações passo a passo até a entrega na sua porta."
    },
    {
      id: "faq-4",
      question: "Quais são as formas de pagamento disponíveis?",
      answer: "Aceitamos Pix com 5% de desconto imediato, cartões de crédito em até 10x sem juros (Visa, Mastercard, Elo, Hipercard, Amex) e boleto bancário. Nosso checkout é protegido com criptografia bancária SSL de 256 bits."
    },
    {
      id: "faq-5",
      question: "Como funciona a garantia e política de trocas?",
      answer: "Garantimos 30 dias corridos para troca ou devolução sem complicações. Se houver qualquer avaria no transporte ou se você não ficar 100% satisfeito com a sua peça, nossa equipe providencia a substituição imediata ou o reembolso integral do seu valor."
    }
  ];

  return {
    categories,
    products,
    reviews,
    comparisons,
    faqs
  };
})();
