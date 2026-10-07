'use strict';
const baskets = [
  {file:'cesta-cafe-natal',name:'Manhã de Natal',tag:'CAFÉ & CARINHO',description:'Panetone, café, biscoitos e uma caneca para começar a celebração.'},
  {file:'cesta-doces-natal',name:'Doce celebração',tag:'CHOCOLATES & DOCES',description:'Uma combinação de sabores e embalagens para presentear com encanto.'},
  {file:'cesta-brinde-natal',name:'Um brinde ao Natal',tag:'PARA CELEBRAR',description:'Uma composição especial para quem quer brindar os bons momentos.'},
  {file:'cesta-afeto-natal',name:'Caixa de afeto',tag:'MIMOS & ACONCHEGO',description:'Pequenos cuidados para transformar um mimo em um presente especial.'},
  {file:'cesta-corporativa-natal',name:'Um gesto de gratidão',tag:'PRESENTE CORPORATIVO',description:'Uma ideia para agradecer clientes, equipes e parcerias no fim do ano.'},
  {file:'cesta-familia-natal',name:'Natal em família',tag:'PARA COMPARTILHAR',description:'Uma cesta generosa para reunir sabores, carinho e boas memórias.'}
];
const gallery = document.getElementById('gallery-grid');
gallery.innerHTML = baskets.map((b,i)=>`<article class="gallery-card"><button type="button" class="gallery-image" data-basket="${i}" aria-label="Ampliar ${b.name}"><img src="assets/${b.file}.webp" alt="${b.name}" width="1254" height="1254" loading="lazy"></button><div class="gallery-copy"><span>${b.tag}</span><h3>${b.name}</h3><p>${b.description}</p></div></article>`).join('');

const photo = (name,cls='screen-photo') => `<img class="${cls}" src="assets/${name}.webp" width="1254" height="1254" loading="lazy" alt="">`;
const row = (label,value) => `<div class="screen-row"><span>${label}</span><b>${value}</b></div>`;
const screens = [
  {title:'01 · Seu planejamento',description:'Datas comemorativas e atalhos para organizar sua produção.',body:`<span class="screen-label">VAMOS PREPARAR O SEU NATAL?</span><div class="screen-hero"><span>PRÓXIMA CELEBRAÇÃO</span><b>Natal</b><span>25 de dezembro · prepare suas ideias</span></div><h4>O que vamos criar?</h4>${row('✧ Gerar uma cesta','↗')}${row('✧ Calcular meus custos','↗')}${row('✧ Textos para divulgar','↗')}<span class="screen-action">Explorar as datas</span>`},
  {title:'02 · Escolha sua ideia',description:'Selecione os produtos e monte a combinação do seu presente.',body:`<span class="screen-label">GERADOR DE CESTAS</span><h4>Qual é a sua inspiração?</h4><p>Escolha o estilo para começar.</p><div class="screen-choice">${photo('cesta-cafe-natal','mini-photo')}<span><b>Café da manhã</b>Um Natal com carinho</span></div><div class="screen-choice">${photo('cesta-doces-natal','mini-photo')}<span><b>Doces & chocolates</b>Pequenos encantos</span></div><div class="screen-choice">${photo('cesta-afeto-natal','mini-photo')}<span><b>Mimos & presentes</b>Seu toque especial</span></div><span class="screen-action">Escolher meus produtos</span>`},
  {title:'03 · A cesta visual',description:'Apresente a combinação de produtos de forma organizada.',body:`<span class="screen-label">SUA IDEIA GANHANDO FORMA</span>${photo('cesta-cafe-natal')}<h4>Manhã de Natal</h4>${row('Panetone','1 un.')}${row('Caneca + café','1 kit')}${row('Biscoitos + geleia','1 kit')}<span class="screen-action">Preparar meu catálogo</span>`},
  {title:'04 · Seus custos',description:'Considere os produtos e a embalagem antes de definir o preço.',body:`<span class="screen-label">CALCULADORA</span><h4>Vamos fazer as contas?</h4><p>Exemplo de valores para planejamento.</p>${row('Produtos','R$ 45,00')}${row('Embalagem + bilhete','R$ 8,00')}<div class="screen-total"><span>Custo dos materiais</span><b>R$ 53,00</b></div><p style="margin-top:12px">Inclua também mão de obra, taxas e demais despesas.</p><span class="screen-action">Definir o preço de venda</span>`},
  {title:'05 · Preço e margem',description:'Veja o que entra e o que sobra após os custos que informar.',body:`<span class="screen-label">SIMULAÇÃO POR CESTA</span><h4>Conheça seus números.</h4>${row('Preço de venda','R$ 150,00')}${row('Produtos + embalagem','R$ 53,00')}${row('Mão de obra','R$ 20,00')}${row('Taxas (5%)','R$ 7,50')}<div class="screen-total"><span>Saldo após esses custos</span><b>R$ 69,50</b></div><p style="margin-top:12px">Antes de frete, impostos e despesas fixas. Valores de exemplo.</p>`},
  {title:'06 · Guia Célia',description:'Encontre orientação para planejar suas ideias de cestas.',body:`<span class="screen-label">GUIA CÉLIA</span><h4>Um apoio para começar.</h4><div class="chat-bubble question">Quero organizar minhas cestas de Natal. Por onde começo?</div><div class="chat-bubble">Defina a faixa de preço, selecione os produtos e calcule os custos. Depois, prepare a foto e uma descrição clara.</div><span class="screen-action">Planejar a próxima ideia</span>`},
  {title:'07 · Hora de divulgar',description:'Personalize os textos e apresente sua oferta às clientes.',body:`<span class="screen-label">TEXTOS DE VENDA</span><h4>Um convite para presentear.</h4><div class="chat-bubble">Neste Natal, presenteie com carinho! Estou preparando cestas personalizadas por encomenda. Me chame para conhecer as opções e os prazos.</div>${row('Para usar no','WhatsApp')}${row('Personalize','Itens e prazos')}<span class="screen-action">Preparar minha mensagem</span><p>Exemplo de divulgação. Ajuste à sua oferta.</p>`}
];
document.getElementById('app-rail').innerHTML = screens.map(s=>`<article class="app-slide"><div class="phone" role="img" aria-label="Prévia: ${s.description}"><div class="phone-heading">Cesta Certa <span>✦</span></div><div class="phone-content">${s.body}</div><div class="screen-nav"><span>⌂ Início</span><span>✧ Cestas</span><span>▦ Custos</span><span>♡ Ideias</span></div></div><h3>${s.title}</h3><p>${s.description}</p></article>`).join('');

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
document.querySelectorAll('[data-rail]').forEach(button=>button.addEventListener('click',()=>{
  const rail=document.getElementById(button.dataset.rail),card=rail.querySelector('.app-slide');
  const gap=parseFloat(getComputedStyle(rail).gap)||0;
  rail.scrollBy({left:(card.getBoundingClientRect().width+gap)*Number(button.dataset.direction),behavior:reduceMotion.matches?'instant':'smooth'});
}));

const money = new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'});
const form=document.getElementById('calculator');
function updateCalculation(){
  const inputs=[...form.querySelectorAll('input[type="number"]')],values=inputs.map(input=>input.valueAsNumber);
  const outputs=['gross-total','cost-total','net-total'].map(id=>document.getElementById(id));
  if(inputs.some(input=>!input.validity.valid)||values.some(value=>!Number.isFinite(value))){outputs.forEach(out=>out.textContent='—');return;}
  const [price,quantity,materials,labor,fee]=values;
  const gross=price*quantity,cost=(materials+labor+price*fee/100)*quantity;
  [gross,cost,gross-cost].forEach((value,i)=>outputs[i].textContent=money.format(value));
}
form.addEventListener('submit',event=>event.preventDefault());
form.addEventListener('input',updateCalculation);updateCalculation();

const modal=document.getElementById('gallery-modal');
gallery.addEventListener('click',event=>{
  const button=event.target.closest('[data-basket]');if(!button)return;
  const basket=baskets[Number(button.dataset.basket)];
  document.getElementById('modal-title').textContent=basket.name;
  const image=document.getElementById('modal-image');image.src=`assets/${basket.file}.webp`;image.alt=basket.name;
  document.body.classList.add('modal-open');modal.showModal();
});
const closeModal=()=>modal.close();
document.getElementById('modal-close').addEventListener('click',closeModal);
const syncModalLock=()=>document.body.classList.toggle('modal-open',Boolean(document.querySelector('dialog[open]')));
modal.addEventListener('close',syncModalLock);
modal.addEventListener('click',event=>{if(event.target===modal){const rect=modal.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)closeModal();}});
document.getElementById('modal-cta').addEventListener('click',closeModal);

const sourceParams=new URLSearchParams(location.search);
document.querySelectorAll('.checkout').forEach(link=>{
  const url=new URL(link.href);
  for(const name of ['utm_source','utm_campaign','utm_medium','utm_content','utm_term','src','sck','fbclid','gclid']){
    const value=sourceParams.get(name);if(value)url.searchParams.set(name,value);
  }
  link.href=url.href;
});

const offer=document.getElementById('offer-modal');
const wheel=document.getElementById('offer-wheel');
document.querySelector('[data-plan="essencial"]').addEventListener('click',event=>{
  // Keep the approved basic checkout as a working fallback without JavaScript.
  event.preventDefault();
  document.getElementById('purchase-toast').hidden=true;
  wheel.classList.remove('is-spinning');
  offer.showModal();syncModalLock();
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    if(offer.open&&!reduceMotion.matches)wheel.classList.add('is-spinning');
  }));
});
document.getElementById('offer-close').addEventListener('click',()=>offer.close());
offer.addEventListener('close',()=>{wheel.classList.remove('is-spinning');syncModalLock();});
offer.addEventListener('click',event=>{
  if(event.target!==offer)return;
  const rect=offer.getBoundingClientRect();
  if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)offer.close();
});

// A trusted public feed of confirmed payments is required. No demo sales.
const purchaseToast=document.getElementById('purchase-toast');
const purchaseMessage=document.getElementById('purchase-message');
const seenPurchases=new Set();
try{JSON.parse(sessionStorage.getItem('cesta-confirmed-purchases')||'[]').forEach(id=>seenPurchases.add(id));}catch{}
let toastTimer,feedBusy=false,lastPurchaseShown=0;
const hidePurchase=()=>{purchaseToast.hidden=true;clearTimeout(toastTimer);};
document.getElementById('purchase-dismiss').addEventListener('click',hidePurchase);
document.addEventListener('visibilitychange',()=>{if(document.hidden)hidePurchase();});
function recentConfirmedPurchase(record){
  if(!record||typeof record!=='object'||record.status!=='paid'||!['essencial','completo'].includes(record.plan))return false;
  if(typeof record.id!=='string'||record.id.length>100||!record.id||seenPurchases.has(record.id))return false;
  if(typeof record.firstName!=='string'||!/^\p{L}[\p{L}'’-]{1,29}$/u.test(record.firstName))return false;
  if(record.lastInitial!=null&&(typeof record.lastInitial!=='string'||!/^\p{L}$/u.test(record.lastInitial)))return false;
  const age=Date.now()-Date.parse(record.paidAt);
  return Number.isFinite(age)&&age>=0&&age<=10*60*1000;
}
async function pollPurchases(){
  const endpoint=purchaseToast.dataset.feed;
  if(!endpoint||document.hidden||document.querySelector('dialog[open]')||feedBusy||Date.now()-lastPurchaseShown<30000)return;
  let url;try{url=new URL(endpoint,location.href);}catch{return;}
  if(url.protocol!=='https:')return;
  feedBusy=true;
  try{
    const response=await fetch(url,{cache:'no-store',credentials:'omit',signal:AbortSignal.timeout(8000)});
    if(!response.ok)return;
    const records=await response.json();
    if(!Array.isArray(records)||document.hidden||document.querySelector('dialog[open]'))return;
    const record=records.filter(recentConfirmedPurchase).sort((a,b)=>Date.parse(b.paidAt)-Date.parse(a.paidAt))[0];
    if(!record)return;
    const name=record.firstName+(record.lastInitial?' '+record.lastInitial.toUpperCase()+'.':'');
    const nameLabel=document.createElement('strong');nameLabel.textContent=name;
    purchaseMessage.replaceChildren(nameLabel,document.createTextNode(' acabou de garantir o Plano '+(record.plan==='completo'?'Completo':'Essencial')+'.'));
    seenPurchases.add(record.id);lastPurchaseShown=Date.now();
    try{sessionStorage.setItem('cesta-confirmed-purchases',JSON.stringify([...seenPurchases].slice(-100)));}catch{}
    purchaseToast.hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(hidePurchase,8000);
  }catch{/* A failed feed never blocks the page or creates a purchase notice. */}
  finally{feedBusy=false;}
}
if(purchaseToast.dataset.feed){pollPurchases();setInterval(pollPurchases,30000);}
