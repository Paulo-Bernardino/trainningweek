/* ---------- Dados de Treino ---------- */
const exerciciosFixos = [
    { nome: "Abdominal na Máquina", series: 4, reps: 40, calorias: 50, url: "https://youtube.com/shorts/MkMfujLgb-M" },
    { nome: "Prancha", series: 4, reps: "2 minuto", calorias: 85, url: "https://youtube.com/shorts/UwCFLBJv4ek" },
    { nome: "Esteira", series: 1, reps: "30 minutos", velocidade: "6 km/h", inclinacao: 6, calorias: 330 }
];

const treinoData = {
    "Segunda": { grupo: "Pernas", tempoMock: "1h 50 min", cor: "from-green-500/20 to-emerald-900/20", icon: "🦵", exercicios: [{ nome: "Aquecimento na Esteira", series: 1, reps: "5 min (140 bpm)", calorias: 45 }, { nome: "Elevação Pélvica com Barra", series: "10x10", reps: "—", calorias: 110 }, { nome: "Cadeira Adutora + Abdutora", series: "5x12", reps: "—", calorias: 70 }, { nome: "Mesa Flexora", series: 4, reps: 12, calorias: 55 }, { nome: "Cadeira Extensora", series: 4, reps: 12, calorias: 60 }, { nome: "Agachamento Smith", series: "2x12 / 2x10 / 1x8", reps: "—", calorias: 150 }, { nome: "Leg Press (Progressivo)", series: "8 séries", reps: "15→30 / 25→15", calorias: 190 }, { nome: "Panturrilha em Pé + Sentado", series: "8x15", reps: "—", calorias: 65 }] },
    "Terça": { grupo: "Peito / Tríceps", tempoMock: "1h 40 min", cor: "from-pink-500/20 to-rose-900/20", icon: "🔥", exercicios: [{ nome: "Supino Reto", series: "2x12 / 2x10", reps: "—", calorias: 85 }, { nome: "Crucifixo Inclinado Cabo + Supino Inclinado Livre", series: "2x12 / 2x10", reps: "—", calorias: 110 }, { nome: "CrossOver Baixo", series: 4, reps: 15, calorias: 60 }, { nome: "CrossOver", series: "7x Limit", reps: "—", calorias: 95 }, { nome: "Paralelas", series: 4, reps: 10, calorias: 90 }, { nome: "Tríceps Testa W", series: 4, reps: 12, calorias: 65 }, { nome: "Tríceps Corda", series: 4, reps: 12, calorias: 55 }, { nome: "Tríceps Pulley W", series: "7x Limit", reps: "—", calorias: 80 }, { nome: "Prancha Abdominal", series: 4, reps: "2 min", calorias: 85 }, { nome: "Abdominal Máquina", series: 4, reps: 40, calorias: 50 }] },
    "Quarta": { grupo: "Costas / Panturrilha", tempoMock: "1h 35 min", cor: "from-blue-500/20 to-indigo-900/20", icon: "💪", exercicios: [{ nome: "PullDown Corda", series: 4, reps: 15, calorias: 60 }, { nome: "Barra Fixa Peito", series: 4, reps: 10, calorias: 95 }, { nome: "Puxador Alto Triângulo", series: "2x15 / 2x12", reps: "—", calorias: 55 }, { nome: "Remada Curvada Pronada", series: "2x12 / 2x10", reps: "—", calorias: 85 }, { nome: "Remada Curvada 45°", series: "2x12 / 2x10", reps: "—", calorias: 80 }, { nome: "Remada Baixa (Drop)", series: "4 Drops", reps: "10/10/10", calorias: 105 }, { nome: "Encolhimento com Halter", series: 4, reps: 15, calorias: 55 }, { nome: "Hipertensão Lombar", series: 4, reps: 20, calorias: 60 }, { nome: "Panturrilha em Pé + Sentado", series: "8x15", reps: "—", calorias: 65 }] },
    "Quinta": { grupo: "Cardio + Abdômen", tempoMock: "1h 10 min", cor: "from-cyan-500/20 to-sky-900/20", icon: "🏃", exercicios: [{ nome: "Escada", series: 1, reps: "—", calorias: 165 }] },
    "Sexta": { grupo: "Pernas", tempoMock: "1h 50 min", cor: "from-green-500/20 to-emerald-900/20", icon: "🦵", exercicios: [{ nome: "Aquecimento na Esteira", series: 1, reps: "5 min (140 bpm)", calorias: 45 }, { nome: "Elevação Pélvica com Barra", series: "10x10", reps: "—", calorias: 110 }, { nome: "Cadeira Adutora + Abdutora", series: "5x12", reps: "—", calorias: 70 }, { nome: "Mesa Flexora", series: 4, reps: 12, calorias: 55 }, { nome: "Cadeira Extensora", series: 4, reps: 12, calorias: 60 }, { nome: "Agachamento Smith", series: "2x12 / 2x10 / 1x8", reps: "—", calorias: 150 }, { nome: "Leg Press (Progressivo)", series: "8 séries", reps: "15→30 / 25→15", calorias: 190 }, { nome: "Panturrilha em Pé + Sentado", series: "8x15", reps: "—", calorias: 65 }] },
    "Sábado": { grupo: "Ombro / Bíceps", tempoMock: "1h 30 min", cor: "from-orange-500/20 to-red-900/20", icon: "🔥", exercicios: [{ nome: "Elevação Frontal Corda", series: 4, reps: 12, calorias: 55 }, { nome: "Desenvolvimento Frontal", series: "2x12 / 2x10", reps: "—", calorias: 90 }, { nome: "Crucifixo Inverso + Encolhimento Halter", series: 4, reps: 12, calorias: 75 }, { nome: "Elevação Lateral Polia (Drop)", series: "4 Drops", reps: "10/10/10", calorias: 95 }, { nome: "Rosca Direta W Polia", series: 4, reps: 12, calorias: 55 }, { nome: "Rosca Martelo Corda", series: 4, reps: 12, calorias: 60 }, { nome: "Rosca Concentrada Pulley", series: 4, reps: 12, calorias: 55 }, { nome: "Rosca Spider Halter 45°", series: "7x Limit", reps: "—", calorias: 90 }, { nome: "Prancha Abdominal", series: 4, reps: "2 min", calorias: 85 }, { nome: "Abdominal Máquina", series: 4, reps: 40, calorias: 50 }] },
    "Domingo": { isRest: true, icon: "🧘", motivo: "Alongamento e recuperação geral" }
};

/* ---------- Elementos do DOM ---------- */
const daySelect = document.getElementById('daySelect');
const dayContent = document.getElementById('dayContent');
const caloriesRing = document.getElementById('caloriesRing');
const totalCalEl = document.getElementById('totalCalorias');

const tabs = {
    training: { btn: document.getElementById('tabTraining'), content: document.getElementById('contentTraining') },
    diet: { btn: document.getElementById('tabDiet'), content: document.getElementById('contentDiet') },
    physical: { btn: document.getElementById('tabPhysical'), content: document.getElementById('contentPhysical') }
};

/* ---------- Navegação de Abas ---------- */
function switchTab(target) {
    Object.keys(tabs).forEach(key => {
        const isTarget = key === target;
        // Adiciona/Remove classe ativa no botão
        tabs[key].btn.classList.toggle('active', isTarget);
        tabs[key].btn.classList.toggle('text-gray-500', !isTarget);
        
        // Mostra/Esconde o conteúdo
        if (isTarget) {
            tabs[key].content.classList.remove('hidden');
        } else {
            tabs[key].content.classList.add('hidden');
        }
    });

    // IMPORTANTE: Renderiza a dieta se mudar para a aba de dieta
    if (target === 'diet') {
        renderDiet('ON');
    }
}

/* ---------- Funções de Treino ---------- */
function renderWorkoutDay(dia) {
    const data = treinoData[dia];
    if (data.isRest) {
        dayContent.innerHTML = `
            <div class="p-10 text-center bg-[#1A1B24] rounded-3xl border border-white/5 shadow-2xl">
                <span class="text-7xl block mb-4">${data.icon}</span>
                <h2 class="text-2xl font-black italic tracking-tighter">${data.motivo}</h2>
            </div>`;
        updateRingAndTotal(0);
        return;
    }

    const isPernas = data.grupo.includes("Pernas");
    const lista = isPernas ? data.exercicios : [...data.exercicios, ...exerciciosFixos];
    const totalCal = lista.reduce((s, ex) => s + (Number(ex.calorias) || 0), 0);

    dayContent.innerHTML = `
        <div class="space-y-3">
            ${lista.map((ex, i) => `
                <div class="bg-[#1A1B24] p-4 rounded-2xl border border-white/5 flex items-center justify-between group transition-all hover:bg-[#1f202b]">
                    <label class="relative flex items-center cursor-pointer flex-grow">
                        <input type="checkbox" class="task-check hidden peer">
                        
                        <div class="w-7 h-7 border-2 border-violet-500/50 rounded-lg flex items-center justify-center peer-checked:bg-violet-500 peer-checked:border-violet-500 transition-all shadow-lg shadow-violet-500/0 peer-checked:shadow-violet-500/20">
                            <i class="fas fa-check text-white text-[10px] scale-0 peer-checked:scale-100 transition-transform"></i>
                        </div>

                        <div class="ml-4 task-text flex-grow">
                            <div class="flex items-center justify-between mb-1">
                                <strong class="text-sm font-bold text-gray-100 tracking-tight">${ex.nome}</strong>
                                <span class="kcal-tag">${ex.calorias} kcal</span>
                            </div>
                            <div class="flex gap-3">
                                <span class="text-[10px] font-black text-violet-400 uppercase tracking-tighter">
                                    <i class="fas fa-layer-group mr-1"></i>${ex.series} Séries
                                </span>
                                <span class="text-[10px] font-black text-cyan-400 uppercase tracking-tighter">
                                    <i class="fas fa-redo mr-1"></i>${ex.reps} Reps
                                </span>
                            </div>
                        </div>
                    </label>
                </div>`).join('')}
        </div>`;

    updateRingAndTotal(totalCal);
}

/* ---------- Cálculos e Basal ---------- */
function updateRingAndTotal(trainingCal) {
    const savedData = JSON.parse(localStorage.getItem('iTrainPhysical')) || { bmr: 0 };
    const total = trainingCal + (Number(savedData.bmr) || 0);
    
    // Animação numérica simples
    totalCalEl.textContent = total.toLocaleString('pt-BR');

    const circumference = 440; // Mesmo valor do stroke-dasharray no HTML
    const goal = 3500; // Meta diária de queima
    const progress = Math.min(total / goal, 1);
    const offset = circumference - (progress * circumference);
    
    caloriesRing.style.strokeDashoffset = offset;
}

function saveAndCalculatePhysical() {
    const w = parseFloat(document.getElementById('weight').value);
    const h = parseFloat(document.getElementById('height').value);
    const a = parseInt(document.getElementById('age').value);
    const g = document.getElementById('gender').value;

    if(!w || !h || !a) {
        alert("Preencha todos os campos para calcular!");
        return;
    }

    // Equação de Mifflin-St Jeor
    let bmr = (10 * w) + (6.25 * h) - (5 * a);
    bmr += (g === 'male' ? 5 : -161);
    bmr = Math.round(bmr);

    // Salva no LocalStorage
    localStorage.setItem('iTrainPhysical', JSON.stringify({ 
        weight: w, height: h, age: a, gender: g, bmr: bmr 
    }));

    // Exibe o resultado
    const bmrValueEl = document.getElementById('bmrValue');
    const bmrResultContainer = document.getElementById('bmrResult');
    
    if (bmrValueEl && bmrResultContainer) {
        bmrValueEl.textContent = bmr.toLocaleString('pt-BR');
        bmrResultContainer.classList.remove('hidden');
    }

    // Atualiza o anel de calorias na Home
    renderWorkoutDay(daySelect.value);
}

function loadPhysicalData() {
    const saved = localStorage.getItem('iTrainPhysical');
    if (saved) {
        const data = JSON.parse(saved);
        if(document.getElementById('weight')) document.getElementById('weight').value = data.weight;
        if(document.getElementById('height')) document.getElementById('height').value = data.height;
        if(document.getElementById('age')) document.getElementById('age').value = data.age;
        if(document.getElementById('gender')) document.getElementById('gender').value = data.gender;
        
        const bmrValueEl = document.getElementById('bmrValue');
        const bmrResultContainer = document.getElementById('bmrResult');
        
        if (bmrValueEl && bmrResultContainer) {
            bmrValueEl.textContent = data.bmr.toLocaleString('pt-BR');
            bmrResultContainer.classList.remove('hidden');
        }
    }
}

/* ---------- Dieta ---------- */
const dietaData = { 
    ON: [ { time: "04:30", item: "L-Cartinina 2ml", obs: "Aumentar 1ml a cada 3 dias" }, { time: "06:00", item: "Creatina 7g", obs: "Pós-acordar" }, { time: "08:00", item: "Café 100ml", obs: "Sem açúcar" }, { time: "12:00", item: "Whey Protein", obs: "60g de proteína" }, { time: "18:00", item: "Arroz + Frango", obs: "100g Arroz + 200g Frango" }, { time: "21:30", item: "Gaba 1g", obs: "Dormir" } ], 
    OFF: [ { time: "04:30", item: "Mix de Chás", obs: "Hibisco + Cavalinha" }, { time: "06:00", item: "Creatina 7g", obs: "Pós-acordar" }, { time: "12:00", item: "Whey Protein", obs: "60g de proteína" }, { time: "18:00", item: "Arroz + Frango", obs: "100g Arroz + 200g Frango" } ] 
};

function renderDiet(tipo) {
    const container = document.getElementById('dietContainer');
    const btnOn = document.getElementById('btnDietOn');
    const btnOff = document.getElementById('btnDietOff');

    // Estilo dos botões da dieta
    btnOn.className = `flex-1 py-3 rounded-xl font-black transition-all text-xs ${tipo==='ON'?'bg-violet-600 text-white shadow-lg shadow-violet-500/30':'text-gray-500 bg-black/20'}`;
    btnOff.className = `flex-1 py-3 rounded-xl font-black transition-all text-xs ${tipo==='OFF'?'bg-violet-600 text-white shadow-lg shadow-violet-500/30':'text-gray-500 bg-black/20'}`;

    container.innerHTML = dietaData[tipo].map((d, i) => `
        <div class="flex items-center justify-between p-5 bg-[#1A1B24] border border-white/5 rounded-2xl group">
            <label class="flex items-center gap-5 cursor-pointer flex-grow">
                <input type="checkbox" class="task-check hidden peer">
                <div class="w-6 h-6 border-2 border-violet-500/50 rounded-full flex items-center justify-center peer-checked:bg-violet-500 peer-checked:border-violet-500 transition-all">
                    <i class="fas fa-check text-white text-[8px] scale-0 peer-checked:scale-100 transition-transform"></i>
                </div>
                <div class="task-text transition-all">
                    <div class="text-violet-400 font-black text-xs uppercase tracking-tighter mb-1">${d.time}</div>
                    <div class="font-bold text-white">${d.item}</div>
                    <div class="text-[10px] text-gray-500 font-medium">${d.obs}</div>
                </div>
            </label>
        </div>`).join('');
}

/* ---------- Inicialização ---------- */
function init() {
    // Popula o Select
    daySelect.innerHTML = Object.keys(treinoData).map(d => `<option value="${d}">${d}</option>`).join('');
    
    // Listeners das Abas
    tabs.training.btn.addEventListener('click', () => switchTab('training'));
    tabs.diet.btn.addEventListener('click', () => switchTab('diet'));
    tabs.physical.btn.addEventListener('click', () => switchTab('physical'));
    
    // Form físico
    document.getElementById('physicalForm').addEventListener('submit', (e) => { 
        e.preventDefault(); 
        saveAndCalculatePhysical(); 
    });

    // Change do dia
    daySelect.addEventListener('change', (e) => renderWorkoutDay(e.target.value));

    // Start
    loadPhysicalData();
    renderWorkoutDay(daySelect.value);
}

window.onload = init;