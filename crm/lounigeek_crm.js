// ==========================================================================
// 📦 LOUNIGEEK CRM & GESTÃO DE ESTOQUE — ENGINE COMPLETA
// Paleta Oficial: #C9A6E5 (Lavanda), #23215F (Azul Marinho), #A73178 (Magenta)
// WhatsApp Oficial: 5575999550792
// ==========================================================================

const STORAGE_KEY = 'LOUNIGEEK_CRM_V1';
const OFFICIAL_WPP = '5575999550792';

const DEFAULT_STATE = {
  config: {
    nomeEmpresa: "Lounigeek - Gestão de Colecionáveis",
    whatsappPadrao: OFFICIAL_WPP,
    moeda: "BRL",
    prazoPadraoDias: 5
  },
  produtos: [
    {
      id: "p-itachi",
      sku: "FIG-ITA-01",
      nome: "Itachi Uchiha (Susanoo Edition)",
      categoria: "Action Figures",
      custoCompra: 210.00,
      precoVenda: 499.90,
      estoqueAtual: 8,
      estoqueMinimo: 3,
      fornecedor: "Bandai Spirits Tóquio",
      dimensoes: "23cm (PVC/ABS)"
    },
    {
      id: "p-onepiece",
      sku: "MAN-OP-BOX1",
      nome: "Box Especial One Piece (Vol. 1 a 23)",
      categoria: "Mangás",
      custoCompra: 135.00,
      precoVenda: 299.90,
      estoqueAtual: 14,
      estoqueMinimo: 4,
      fornecedor: "Panini Comics Brasil",
      dimensoes: "Papel Offset 90g"
    },
    {
      id: "p-tanjiro",
      sku: "FIG-TAN-02",
      nome: "Tanjiro Kamado (Dança do Deus do Fogo)",
      categoria: "Action Figures",
      custoCompra: 175.00,
      precoVenda: 399.90,
      estoqueAtual: 6,
      estoqueMinimo: 2,
      fornecedor: "Banpresto Japão",
      dimensoes: "20cm com base translúcida"
    },
    {
      id: "p-akatsuki",
      sku: "VES-AKA-01",
      nome: "Camiseta Streetwear Nuvem Akatsuki",
      categoria: "Roupas & Vestuário",
      custoCompra: 32.00,
      precoVenda: 89.90,
      estoqueAtual: 28,
      estoqueMinimo: 6,
      fornecedor: "Malharia Penteada 30.1",
      dimensoes: "Algodão 100%"
    },
    {
      id: "p-bone",
      sku: "BON-KON-01",
      nome: "Boné Aba Curva Símbolo Konoha",
      categoria: "Bonés Geek",
      custoCompra: 28.00,
      precoVenda: 79.90,
      estoqueAtual: 18,
      estoqueMinimo: 4,
      fornecedor: "Bordados Especiais",
      dimensoes: "Strapback ajustável"
    },
    {
      id: "p-zoro",
      sku: "CHA-ZOR-01",
      nome: "Chaveiro Katana Wado Ichimonji (Metal)",
      categoria: "Chaveiros & Pins",
      custoCompra: 14.50,
      precoVenda: 49.90,
      estoqueAtual: 42,
      estoqueMinimo: 10,
      fornecedor: "Metalurgia Colecionável",
      dimensoes: "16cm Liga de Zinco"
    }
  ],
  clientes: [
    {
      id: "c-lucas",
      nome: "Lucas Ferreira",
      telefone: "5575999550792",
      email: "lucas.colecionador@gmail.com",
      cidade: "São Paulo - SP",
      endereco: "Av. Paulista, 1000 - Apto 82"
    },
    {
      id: "c-fernanda",
      nome: "Fernanda Souza",
      telefone: "5575999550792",
      email: "fernanda.s@outlook.com",
      cidade: "Curitiba - PR",
      endereco: "Rua XV de Novembro, 450"
    },
    {
      id: "c-rafael",
      nome: "Rafael Mendes",
      telefone: "5575999550792",
      email: "rafael.mendes@uol.com.br",
      cidade: "Belo Horizonte - MG",
      endereco: "Rua da Bahia, 1280"
    },
    {
      id: "c-camila",
      nome: "Camila Duarte",
      telefone: "5575999550792",
      email: "camila.duarte@geekmail.com",
      cidade: "Salvador - BA",
      endereco: "Rua Chile, 55"
    }
  ],
  vendas: [
    {
      id: "v-101",
      clienteId: "c-lucas",
      produtoId: "p-itachi",
      quantidade: 1,
      precoVendaUnitario: 499.90,
      custoCompraUnitario: 210.00,
      valorTotalVenda: 499.90,
      custoTotal: 210.00,
      lucroLiquido: 289.90,
      margem: 58.0,
      etapa: "enviado",
      formaPagamento: "PIX",
      dataVenda: new Date(Date.now() - 4 * 86400000).toISOString(),
      prazoEntrega: new Date(Date.now() + 2 * 86400000).toISOString().split('T')[0],
      codigoRastreio: "LOUNI-BR94827101",
      enviadoAvisado: true,
      obs: "Embalagem tripla com cantoneiras plásticas rígidas."
    },
    {
      id: "v-102",
      clienteId: "c-fernanda",
      produtoId: "p-onepiece",
      quantidade: 1,
      precoVendaUnitario: 299.90,
      custoCompraUnitario: 135.00,
      valorTotalVenda: 299.90,
      custoTotal: 135.00,
      lucroLiquido: 164.90,
      margem: 55.0,
      etapa: "preparacao",
      formaPagamento: "Cartão de Crédito",
      dataVenda: new Date(Date.now() - 2 * 86400000).toISOString(),
      prazoEntrega: new Date(Date.now() + 3 * 86400000).toISOString().split('T')[0],
      codigoRastreio: "LOUNI-BR77319022",
      enviadoAvisado: false,
      obs: "Lacre de fábrica intacto, poster bônus incluso."
    },
    {
      id: "v-103",
      clienteId: "c-rafael",
      produtoId: "p-tanjiro",
      quantidade: 1,
      precoVendaUnitario: 399.90,
      custoCompraUnitario: 175.00,
      valorTotalVenda: 399.90,
      custoTotal: 175.00,
      lucroLiquido: 224.90,
      margem: 56.2,
      etapa: "entregue",
      formaPagamento: "PIX",
      dataVenda: new Date(Date.now() - 7 * 86400000).toISOString(),
      prazoEntrega: new Date(Date.now() - 1 * 86400000).toISOString().split('T')[0],
      codigoRastreio: "LOUNI-BR55102941",
      enviadoAvisado: true,
      obs: "Entregue no prazo. Cliente elogiou a velocidade."
    },
    {
      id: "v-104",
      clienteId: "c-camila",
      produtoId: "p-akatsuki",
      quantidade: 2,
      precoVendaUnitario: 89.90,
      custoCompraUnitario: 32.00,
      valorTotalVenda: 179.80,
      custoTotal: 64.00,
      lucroLiquido: 115.80,
      margem: 64.4,
      etapa: "preparacao",
      formaPagamento: "PIX",
      dataVenda: new Date(Date.now() - 1 * 86400000).toISOString(),
      prazoEntrega: new Date(Date.now() + 4 * 86400000).toISOString().split('T')[0],
      codigoRastreio: "LOUNI-BR11049283",
      enviadoAvisado: false,
      obs: "Tamanhos M e G para presente."
    }
  ]
};

// State Manager
let state = loadState();
let chartVendasInstance = null;
let chartLucroInstance = null;

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        config: { ...DEFAULT_STATE.config, ...(parsed.config || {}) },
        produtos: parsed.produtos && parsed.produtos.length ? parsed.produtos : DEFAULT_STATE.produtos,
        clientes: parsed.clientes && parsed.clientes.length ? parsed.clientes : DEFAULT_STATE.clientes,
        vendas: parsed.vendas && parsed.vendas.length ? parsed.vendas : DEFAULT_STATE.vendas
      };
    }
  } catch (e) {
    console.error("Erro ao carregar dados do CRM:", e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_STATE));
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// Formatters
function fmtBRL(val) {
  return Number(val || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function fmtDate(isoStr) {
  if (!isoStr) return "-";
  const d = new Date(isoStr);
  return d.toLocaleDateString('pt-BR');
}

// Tab Switching
function switchTab(tabId) {
  document.querySelectorAll('.tab-pane').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.nav-tab-btn').forEach(btn => {
    btn.classList.remove('active-tab');
  });

  const pane = document.getElementById(`tab-content-${tabId}`);
  const btn = document.getElementById(`tab-btn-${tabId}`);
  if (pane) pane.classList.remove('hidden');
  if (btn) btn.classList.add('active-tab');

  // Trigger renders
  if (tabId === 'dashboard') {
    renderDashboard();
    renderCharts();
  } else if (tabId === 'pedidos') {
    renderPedidos();
  } else if (tabId === 'estoque') {
    renderEstoque();
  } else if (tabId === 'lucro') {
    renderMargens();
  } else if (tabId === 'clientes') {
    renderClientes();
  }
}

// ==========================================================================
// 1. DASHBOARD & KPIS
// ==========================================================================
function renderDashboard() {
  let faturamentoTotal = 0;
  let custoTotalGeral = 0;
  let lucroTotalGeral = 0;
  let totalItensVendidos = 0;
  let pendentesEnvio = 0;

  state.vendas.forEach(v => {
    faturamentoTotal += Number(v.valorTotalVenda || 0);
    custoTotalGeral += Number(v.custoTotal || 0);
    lucroTotalGeral += Number(v.lucroLiquido || 0);
    totalItensVendidos += Number(v.quantidade || 0);
    if (v.etapa === 'preparacao' || v.etapa === 'aguardando') {
      pendentesEnvio++;
    }
  });

  const margemMedia = faturamentoTotal > 0 ? ((lucroTotalGeral / faturamentoTotal) * 100).toFixed(1) : "0.0";

  document.getElementById('kpi-faturamento').innerText = fmtBRL(faturamentoTotal);
  document.getElementById('kpi-lucro').innerText = fmtBRL(lucroTotalGeral);
  document.getElementById('kpi-margem').innerText = `${margemMedia}%`;
  document.getElementById('kpi-pendentes').innerText = pendentesEnvio;
  document.getElementById('badge-pendentes-nav').innerText = pendentesEnvio;

  // Itens com estoque baixo
  const produtosAlerta = state.produtos.filter(p => p.estoqueAtual <= p.estoqueMinimo);
  document.getElementById('kpi-estoque-alerta').innerText = produtosAlerta.length;
}

// ==========================================================================
// 2. GRÁFICOS DE LINHA (CHART.JS)
// ==========================================================================
function renderCharts() {
  // Dados dos últimos 7 dias
  const dias = [];
  const vendasPorDia = {};
  const lucroPorDia = {};

  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const label = d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
    const key = d.toISOString().split('T')[0];
    dias.push({ label, key });
    vendasPorDia[key] = 0;
    lucroPorDia[key] = 0;
  }

  state.vendas.forEach(v => {
    const vKey = (v.dataVenda || "").split('T')[0];
    if (vendasPorDia.hasOwnProperty(vKey)) {
      vendasPorDia[vKey] += Number(v.valorTotalVenda || 0);
      lucroPorDia[vKey] += Number(v.lucroLiquido || 0);
    }
  });

  const labels = dias.map(d => d.label);
  const dataFaturamento = dias.map(d => vendasPorDia[d.key]);
  const dataLucro = dias.map(d => lucroPorDia[d.key]);

  // Gráfico 1: Linha de Faturamento & Lucro
  const ctxVendas = document.getElementById('chartVendas');
  if (ctxVendas) {
    if (chartVendasInstance) chartVendasInstance.destroy();
    chartVendasInstance = new Chart(ctxVendas, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Faturamento Bruto (R$)',
            data: dataFaturamento,
            borderColor: '#C9A6E5',
            backgroundColor: 'rgba(201, 166, 229, 0.15)',
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#23215F',
            pointBorderColor: '#C9A6E5',
            pointBorderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 8
          },
          {
            label: 'Lucro Líquido Real (R$)',
            data: dataLucro,
            borderColor: '#A73178',
            backgroundColor: 'rgba(167, 49, 120, 0.12)',
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#A73178',
            pointBorderColor: '#FFFFFF',
            pointBorderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 8
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              boxWidth: 12,
              usePointStyle: true,
              font: { family: 'Plus Jakarta Sans', weight: '700', size: 11 }
            }
          },
          tooltip: {
            callbacks: {
              label: (ctx) => `${ctx.dataset.label}: ${fmtBRL(ctx.raw)}`
            }
          }
        },
        scales: {
          y: {
            grid: { color: 'rgba(201, 166, 229, 0.12)' },
            ticks: {
              callback: (val) => 'R$ ' + val,
              font: { family: 'JetBrains Mono', size: 10 }
            }
          },
          x: {
            grid: { display: false },
            ticks: { font: { family: 'Plus Jakarta Sans', weight: '600', size: 11 } }
          }
        }
      }
    });
  }
}

// ==========================================================================
// 3. GESTÃO DE PEDIDOS, PRAZOS & AVISO RÁPIDO DE ENVIO NO WHATSAPP
// ==========================================================================
function renderPedidos() {
  const tbody = document.getElementById('pedidos-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  const filterStatus = document.getElementById('filter-pedidos-status')?.value || 'todos';

  const lista = state.vendas.filter(v => {
    if (filterStatus === 'todos') return true;
    return v.etapa === filterStatus;
  });

  if (lista.length === 0) {
    document.getElementById('pedidos-empty').classList.remove('hidden');
    return;
  }
  document.getElementById('pedidos-empty').classList.add('hidden');

  lista.forEach(v => {
    const cliente = state.clientes.find(c => c.id === v.clienteId) || { nome: "Cliente Não Encontrado", telefone: OFFICIAL_WPP };
    const prod = state.produtos.find(p => p.id === v.produtoId) || { nome: v.nomeProduto || "Produto", categoria: "Geral" };

    // Cálculo de prazo
    const hoje = new Date().toISOString().split('T')[0];
    let prazoBadgeClass = "bg-emerald-50 text-emerald-700 border-emerald-200";
    let prazoTexto = fmtDate(v.prazoEntrega);

    if (v.prazoEntrega) {
      if (v.prazoEntrega < hoje && v.etapa !== 'entregue') {
        prazoBadgeClass = "bg-rose-50 text-rose-700 border-rose-300 animate-pulse";
        prazoTexto = `${fmtDate(v.prazoEntrega)} (Atrasado)`;
      } else if (v.prazoEntrega === hoje) {
        prazoBadgeClass = "bg-amber-50 text-amber-700 border-amber-300";
        prazoTexto = `${fmtDate(v.prazoEntrega)} (Hoje!)`;
      }
    }

    const tr = document.createElement('tr');
    tr.className = "hover:bg-purple-50/40 transition";
    tr.innerHTML = `
      <td class="py-3 px-4 font-mono font-bold text-xs text-purple-900">${v.id}</td>
      <td class="py-3 px-4">
        <div class="font-bold text-slate-800">${cliente.nome}</div>
        <div class="text-[11px] text-slate-400 flex items-center gap-1.5 mt-0.5">
          <i class="fa-solid fa-location-dot text-[10px] text-purple-400"></i> ${cliente.cidade || "Brasil"}
        </div>
      </td>
      <td class="py-3 px-4">
        <div class="font-bold text-slate-900">${prod.nome}</div>
        <div class="text-[11px] text-purple-700 font-medium">${prod.categoria} • ${v.quantidade}x un</div>
      </td>
      <td class="py-3 px-4 text-right font-mono font-bold text-slate-900">
        ${fmtBRL(v.valorTotalVenda)}
      </td>
      <td class="py-3 px-4 text-center">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold border ${prazoBadgeClass}">
          <i class="fa-regular fa-clock mr-1.5 text-[10px]"></i> ${prazoTexto}
        </span>
      </td>
      <td class="py-3 px-4 text-center">
        <select onchange="alterarEtapaPedido('${v.id}', this.value)" class="text-xs font-bold rounded-full px-3 py-1.5 border border-purple-200 outline-none focus:border-purple-500 bg-white shadow-sm">
          <option value="preparacao" ${v.etapa === 'preparacao' ? 'selected' : ''}>📦 Em Separação</option>
          <option value="enviado" ${v.etapa === 'enviado' ? 'selected' : ''}>🚚 Enviado</option>
          <option value="entregue" ${v.etapa === 'entregue' ? 'selected' : ''}>✅ Entregue</option>
          <option value="cancelado" ${v.etapa === 'cancelado' ? 'selected' : ''}>❌ Cancelado</option>
        </select>
      </td>
      <td class="py-3 px-4 text-center">
        <!-- BOTÃO FÁCIL: AVISAR ENVIO WHATSAPP -->
        <button onclick="avisarEnvioWhatsApp('${v.id}')" 
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-md transition transform active:scale-95 ${v.enviadoAvisado ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600'}"
                title="Avisar cliente pelo WhatsApp em 1 clique">
          <i class="fa-brands fa-whatsapp text-sm"></i>
          <span>${v.enviadoAvisado ? 'Reenviar Aviso' : 'Avisar Envio'}</span>
        </button>
      </td>
      <td class="py-3 px-4 text-center">
        <button onclick="editarPedidoModal('${v.id}')" class="p-1.5 text-slate-400 hover:text-purple-600 rounded-full transition" title="Editar">
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button onclick="excluirPedido('${v.id}')" class="p-1.5 text-slate-400 hover:text-rose-600 rounded-full transition" title="Excluir">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function alterarEtapaPedido(vendaId, novaEtapa) {
  const v = state.vendas.find(item => item.id === vendaId);
  if (v) {
    v.etapa = novaEtapa;
    saveState();
    renderDashboard();
    renderPedidos();
  }
}

// AVISO RÁPIDO DE ENVIO VIA WHATSAPP (BOTÃO SIMPLES)
function avisarEnvioWhatsApp(vendaId) {
  const v = state.vendas.find(item => item.id === vendaId);
  if (!v) return;

  const cliente = state.clientes.find(c => c.id === v.clienteId) || { nome: "Colecionador", telefone: OFFICIAL_WPP };
  const prod = state.produtos.find(p => p.id === v.produtoId) || { nome: "seu colecionável", categoria: "Colecionáveis" };

  const destPhone = cliente.telefone ? cliente.telefone.replace(/\D/g, '') : OFFICIAL_WPP;
  const rastreio = v.codigoRastreio || "LOUNI-BR" + Math.floor(10000000 + Math.random() * 90000000);
  v.codigoRastreio = rastreio;
  v.enviadoAvisado = true;
  saveState();

  const msg = `Olá, *${cliente.nome}*! 🌸✨\n\nBoas notícias da equipe *Lounigeek*:\nSeu pedido do item *${prod.nome}* já foi embalado com nossa proteção tripla de colecionador e acaba de ser *ENVIADO*! 🚚📦\n\n📌 *Código de Rastreio:* ${rastreio}\n📅 *Prazo Estimado de Entrega:* ${fmtDate(v.prazoEntrega)}\n\nVocê pode acompanhar o rastreio ou tirar dúvidas direto conosco aqui no WhatsApp.\nMuito obrigado por confiar na curadoria oficial Lounigeek! 🎌⛩️`;

  const url = `https://wa.me/${destPhone}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
  renderPedidos();
}

// ==========================================================================
// 4. SISTEMA DE ESTOQUE, CUSTOS POR ITEM & MARGEM DE LUCRO AUTOMÁTICA
// ==========================================================================
function renderEstoque() {
  const tbody = document.getElementById('estoque-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  state.produtos.forEach(p => {
    const custo = Number(p.custoCompra || 0);
    const venda = Number(p.precoVenda || 0);
    const lucroUnit = venda - custo;
    const margem = venda > 0 ? ((lucroUnit / venda) * 100).toFixed(1) : "0.0";

    const valorEstoqueCusto = custo * p.estoqueAtual;
    const valorEstoqueVenda = venda * p.estoqueAtual;
    const potencialLucro = valorEstoqueVenda - valorEstoqueCusto;

    // Alerta de estoque
    let estoqueClass = "bg-emerald-50 text-emerald-700 border-emerald-200";
    let estoqueTexto = `${p.estoqueAtual} un`;
    if (p.estoqueAtual <= p.estoqueMinimo) {
      estoqueClass = "bg-rose-50 text-rose-700 border-rose-300 font-extrabold animate-pulse";
      estoqueTexto = `⚠️ ${p.estoqueAtual} un (Crítico)`;
    }

    const tr = document.createElement('tr');
    tr.className = "hover:bg-purple-50/40 transition";
    tr.innerHTML = `
      <td class="py-3 px-4 font-mono font-bold text-xs text-purple-900">${p.sku}</td>
      <td class="py-3 px-4">
        <div class="font-bold text-slate-900">${p.nome}</div>
        <div class="text-[11px] text-purple-700">${p.categoria} • ${p.fornecedor || 'Japão'}</div>
      </td>
      <td class="py-3 px-4 text-center">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${estoqueClass}">
          ${estoqueTexto}
        </span>
      </td>
      <td class="py-3 px-4 text-right font-mono text-slate-600">
        ${fmtBRL(custo)}
      </td>
      <td class="py-3 px-4 text-right font-mono font-bold text-slate-900">
        ${fmtBRL(venda)}
      </td>
      <td class="py-3 px-4 text-right font-mono font-bold text-emerald-600">
        +${fmtBRL(lucroUnit)}
      </td>
      <td class="py-3 px-4 text-center">
        <span class="px-2.5 py-1 rounded-full text-xs font-bold font-mono bg-purple-100 text-purple-800 border border-purple-200">
          ${margem}%
        </span>
      </td>
      <td class="py-3 px-4 text-right font-mono font-bold text-purple-950">
        ${fmtBRL(potencialLucro)}
      </td>
      <td class="py-3 px-4 text-center">
        <div class="flex items-center justify-center gap-1.5">
          <button onclick="ajustarEstoqueRapido('${p.id}', -1)" class="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition" title="Remover 1 unidade">
            <i class="fa-solid fa-minus text-[10px]"></i>
          </button>
          <button onclick="ajustarEstoqueRapido('${p.id}', 1)" class="w-7 h-7 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-800 flex items-center justify-center transition" title="Adicionar 1 unidade">
            <i class="fa-solid fa-plus text-[10px]"></i>
          </button>
          <button onclick="abrirModalProduto('${p.id}')" class="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition ml-1" title="Editar item">
            <i class="fa-solid fa-pen-to-square text-[10px]"></i>
          </button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function ajustarEstoqueRapido(prodId, delta) {
  const p = state.produtos.find(item => item.id === prodId);
  if (p) {
    p.estoqueAtual = Math.max(0, p.estoqueAtual + delta);
    saveState();
    renderEstoque();
    renderDashboard();
  }
}

// ==========================================================================
// 5. ANÁLISE DE MARGENS E LUCRO AUTOMÁTICO POR ITEM
// ==========================================================================
function renderMargens() {
  const grid = document.getElementById('margens-grid');
  if (!grid) return;
  grid.innerHTML = '';

  // Ordenar produtos por margem decrescente
  const produtosOrdenados = [...state.produtos].sort((a, b) => {
    const margemA = a.precoVenda > 0 ? (a.precoVenda - a.custoCompra) / a.precoVenda : 0;
    const margemB = b.precoVenda > 0 ? (b.precoVenda - b.custoCompra) / b.precoVenda : 0;
    return margemB - margemA;
  });

  produtosOrdenados.forEach(p => {
    const custo = Number(p.custoCompra || 0);
    const venda = Number(p.precoVenda || 0);
    const lucro = venda - custo;
    const margem = venda > 0 ? ((lucro / venda) * 100).toFixed(1) : 0;
    const markup = custo > 0 ? ((lucro / custo) * 100).toFixed(1) : 0;

    const card = document.createElement('div');
    card.className = "bg-white p-5 rounded-3xl border border-purple-100 shadow-sm hover:shadow-md transition";
    card.innerHTML = `
      <div class="flex items-start justify-between gap-3 mb-3">
        <div>
          <span class="text-[10px] font-bold font-mono uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
            ${p.sku}
          </span>
          <h4 class="font-extrabold text-slate-900 text-sm mt-1.5 leading-snug">${p.nome}</h4>
        </div>
        <div class="text-right">
          <span class="text-xs font-mono font-bold text-purple-800 bg-purple-100 px-3 py-1 rounded-full border border-purple-300">
            ${margem}% Margem
          </span>
        </div>
      </div>

      <!-- Barra de Rentabilidade Visual -->
      <div class="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden my-3">
        <div class="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full" style="width: ${Math.min(100, margem)}%"></div>
      </div>

      <div class="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-center">
        <div>
          <span class="text-[10px] text-slate-400 block font-semibold">Custo Compra</span>
          <strong class="font-mono text-xs text-slate-700">${fmtBRL(custo)}</strong>
        </div>
        <div>
          <span class="text-[10px] text-slate-400 block font-semibold">Preço Venda</span>
          <strong class="font-mono text-xs text-purple-900">${fmtBRL(venda)}</strong>
        </div>
        <div>
          <span class="text-[10px] text-emerald-600 block font-semibold">Lucro Líquido</span>
          <strong class="font-mono text-xs text-emerald-600 font-bold">+${fmtBRL(lucro)}</strong>
        </div>
      </div>

      <div class="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
        <span>Markup sobre custo: <strong class="text-purple-700">${markup}%</strong></span>
        <span>Estoque: <strong class="${p.estoqueAtual <= p.estoqueMinimo ? 'text-rose-600 font-bold' : 'text-slate-800'}">${p.estoqueAtual} un</strong></span>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ==========================================================================
// 6. CLIENTES & COLECIONADORES
// ==========================================================================
function renderClientes() {
  const tbody = document.getElementById('clientes-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  state.clientes.forEach(c => {
    const totalCompras = state.vendas
      .filter(v => v.clienteId === c.id)
      .reduce((acc, cur) => acc + Number(cur.valorTotalVenda || 0), 0);

    const tr = document.createElement('tr');
    tr.className = "hover:bg-purple-50/40 transition";
    tr.innerHTML = `
      <td class="py-3 px-4 font-bold text-slate-900">${c.nome}</td>
      <td class="py-3 px-4 font-mono text-slate-600">${c.telefone || OFFICIAL_WPP}</td>
      <td class="py-3 px-4 text-slate-500">${c.email || '-'}</td>
      <td class="py-3 px-4 text-slate-600">${c.cidade || '-'}</td>
      <td class="py-3 px-4 text-right font-mono font-bold text-purple-900">${fmtBRL(totalCompras)}</td>
      <td class="py-3 px-4 text-center">
        <a href="https://wa.me/${(c.telefone || OFFICIAL_WPP).replace(/\D/g, '')}?text=Olá,%20${encodeURIComponent(c.nome)}!%20Como%20podemos%20ajudar%20você%20hoje%20na%20Lounigeek?" target="_blank" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition">
          <i class="fa-brands fa-whatsapp text-sm"></i> Conversar
        </a>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// ==========================================================================
// MODAL & CADASTROS
// ==========================================================================
function abrirModalNovoPedido() {
  const selCliente = document.getElementById('pedido-cliente');
  const selProd = document.getElementById('pedido-produto');
  if (selCliente && selProd) {
    selCliente.innerHTML = state.clientes.map(c => `<option value="${c.id}">${c.nome} - ${c.cidade || ''}</option>`).join('');
    selProd.innerHTML = state.produtos.map(p => `<option value="${p.id}">${p.nome} (Estoque: ${p.estoqueAtual}) - ${fmtBRL(p.precoVenda)}</option>`).join('');
  }
  
  // Set default deadline to today + 5 days
  const d = new Date();
  d.setDate(d.getDate() + (state.config.prazoPadraoDias || 5));
  document.getElementById('pedido-prazo').value = d.toISOString().split('T')[0];

  document.getElementById('modal-pedido').classList.remove('hidden');
}

function salvarPedidoForm(e) {
  if (e) e.preventDefault();
  const cliId = document.getElementById('pedido-cliente').value;
  const prodId = document.getElementById('pedido-produto').value;
  const qtd = parseInt(document.getElementById('pedido-qtd').value) || 1;
  const prazo = document.getElementById('pedido-prazo').value;
  const obs = document.getElementById('pedido-obs').value;

  const prod = state.produtos.find(p => p.id === prodId);
  if (!prod) return;

  const custoTotal = prod.custoCompra * qtd;
  const valorTotal = prod.precoVenda * qtd;
  const lucro = valorTotal - custoTotal;
  const margem = valorTotal > 0 ? (lucro / valorTotal) * 100 : 0;

  // Abater estoque
  prod.estoqueAtual = Math.max(0, prod.estoqueAtual - qtd);

  const novoPedido = {
    id: "LOUNI-" + Math.floor(1000 + Math.random() * 9000),
    clienteId: cliId,
    produtoId: prodId,
    quantidade: qtd,
    precoVendaUnitario: prod.precoVenda,
    custoCompraUnitario: prod.custoCompra,
    valorTotalVenda: valorTotal,
    custoTotal: custoTotal,
    lucroLiquido: lucro,
    margem: Number(margem.toFixed(1)),
    etapa: "preparacao",
    formaPagamento: "PIX",
    dataVenda: new Date().toISOString(),
    prazoEntrega: prazo,
    codigoRastreio: "LOUNI-BR" + Math.floor(10000000 + Math.random() * 90000000),
    enviadoAvisado: false,
    obs: obs
  };

  state.vendas.unshift(novoPedido);
  saveState();
  fecharModal('modal-pedido');
  renderDashboard();
  renderPedidos();
  renderEstoque();
  renderCharts();
}

function fecharModal(id) {
  document.getElementById(id).classList.add('hidden');
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  renderDashboard();
  renderCharts();
  renderPedidos();
  renderEstoque();
  renderMargens();
  renderClientes();
});

