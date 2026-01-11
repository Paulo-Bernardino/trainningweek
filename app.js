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

/* ---------- Dados de Dieta ---------- */
const dietaData = {
    ON: [
        { time: "04:30", item: "L-Cartinina 2ml", obs: "Aumentar 1ml a cada 3 dias" },
        { time: "06:00", item: "Creatina 7g", obs: "Pós-acordar" },
        { time: "08:00", item: "Café 100ml", obs: "Sem açúcar" },
        { time: "10:00", item: "Café 100ml", obs: "Sem açúcar" },
        { time: "12:00", item: "Whey Protein (2 scoops)", obs: "60g de proteína" },
        { time: "14:00", item: "Café 100ml", obs: "Sem açúcar" },
        { time: "16:00", item: "Whey Protein (2 scoops)", obs: "60g de proteína" },
        { time: "18:00", item: "Arroz + Frango", obs: "100g Arroz + 200g Frango" },
        { time: "20:00", item: "5HTP", obs: "5 cápsulas" },
        { time: "21:30", item: "Gaba 1g", obs: "Antes de dormir" }
    ],
    OFF: [
        { time: "04:30", item: "Mix de Chás", obs: "Hibisco + Cavalinha + Verde (10g cada)" },
        { time: "06:00", item: "Creatina 7g", obs: "Pós-acordar" },
        { time: "08:00", item: "Café 100ml", obs: "Sem açúcar" },
        { time: "10:00", item: "Café 100ml", obs: "Sem açúcar" },
        { time: "12:00", item: "Whey Protein (2 scoops)", obs: "60g de proteína" },
        { time: "14:00", item: "Café 100ml", obs: "Sem açúcar" },
        { time: "16:00", item: "Whey Protein (2 scoops)", obs: "60g de proteína" },
        { time: "18:00", item: "Arroz + Frango", obs: "100g Arroz + 200g Frango" },
        { time: "20:00", item: "5HTP", obs: "5 cápsulas" },
        { time: "21:30", item: "Gaba 1g", obs: "Antes de dormir" }
    ]
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

const physicalForm = document.getElementById('physicalForm');
const bmrValueEl = document.getElementById('bmrValue');
const bmrResult = document.getElementById('bmrResult');

/* ---------- Lógica de Abas ---------- */
function switchTab(target) {
    Object.keys(tabs).forEach(key => {
        const isTarget = key === target;
        tabs[key].btn.classList.toggle('active', isTarget);
        tabs[key].content.classList.toggle('hidden', !isTarget);
        
        if (isTarget) {
            tabs[key].btn.classList.add('bg-violet-600', 'text-white');
            tabs[key].btn.classList.remove('text-gray-400');
        } else {
            tabs[key].btn.classList.remove('bg-violet-600', 'text-white');
            tabs[key].btn.classList.add('text-gray-400');
        }
    });

    if (target === 'diet') renderDiet('ON');
}

/* ---------- Funções de Dieta ---------- */
function renderDiet(tipo) {
    const container = document.getElementById('dietContainer');
    const btnOn = document.getElementById('btnDietOn');
    const btnOff = document.getElementById('btnDietOff');

    if (tipo === 'ON') {
        btnOn.className = "flex-1 py-3 rounded-lg font-bold transition-all bg-violet-600 text-white shadow-lg";
        btnOff.className = "flex-1 py-3 rounded-lg font-bold transition-all text-gray-400 hover:text-white";
    } else {
        btnOff.className = "flex-1 py-3 rounded-lg font-bold transition-all bg-violet-600 text-white shadow-lg";
        btnOn.className = "flex-1 py-3 rounded-lg font-bold transition-all text-gray-400 hover:text-white";
    }

    const items = dietaData[tipo];
    container.innerHTML = items.map((d, index) => `
        <div id="diet-card-${index}" class="diet-item flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl transition-all duration-300">
            <div class="flex items-center gap-4 cursor-pointer" onclick="toggleDietItem(${index})">
                <div class="text-violet-400 font-black text-lg w-12">${d.time}</div>
                <div>
                    <div class="font-bold text-white text-base">${d.item}</div>
                    <div class="text-xs text-gray-500">${d.obs}</div>
                </div>
            </div>
            <input type="checkbox" onchange="toggleDietItem(${index})" id="check-diet-${index}" class="w-6 h-6 rounded-full border-2 border-violet-500 accent-violet-500">
        </div>
    `).join('');
}

function toggleDietItem(index) {
    const card = document.getElementById(`diet-card-${index}`);
    const check = document.getElementById(`check-diet-${index}`);
    if (check.checked) {
        card.classList.add('diet-done');
        card.querySelector('.font-bold').classList.add('line-through-text');
    } else {
        card.classList.remove('diet-done');
        card.querySelector('.font-bold').classList.remove('line-through-text');
    }
}

/* ---------- Funções de Treino ---------- */
function toggleExercise(id) {
    const checkbox = document.getElementById(id);
    const card = document.getElementById(`card-${id}`);
    const title = card.querySelector('strong');
    
    if (checkbox.checked) {
        card.classList.add('exercise-done');
        title.classList.add('line-through-text');
    } else {
        card.classList.remove('exercise-done');
        title.classList.remove('line-through-text');
    }
}

function renderWorkoutDay(dia) {
    const data = treinoData[dia];
    if (data.isRest) {
        dayContent.innerHTML = `<div class="p-10 text-center bg-white/5 rounded-3xl border border-white/10"><span class="text-6xl">${data.icon}</span><h2 class="text-2xl font-bold mt-4">${data.motivo}</h2></div>`;
        updateRingAndTotal(0);
        return;
    }

    const isPernas = data.grupo.includes("Pernas");
    const lista = isPernas ? data.exercicios : [...data.exercicios, ...exerciciosFixos];
    const totalCal = lista.reduce((s, ex) => s + (Number(ex.calorias) || 0), 0);

    dayContent.innerHTML = `
        <div class="p-6 rounded-3xl bg-gradient-to-br ${data.cor} border border-white/10 shadow-2xl">
            <div class="flex items-center gap-4 mb-6">
                <span class="text-5xl">${data.icon}</span>
                <div>
                    <h2 class="text-2xl font-black">${dia}</h2>
                    <p class="text-sm opacity-70">Foco: ${data.grupo}</p>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-4 mb-6 py-4 border-y border-white/10 text-center">
                <div><p class="text-[10px] uppercase opacity-50">Tempo</p><p class="font-bold text-cyan-300">${data.tempoMock}</p></div>
                <div><p class="text-[10px] uppercase opacity-50">Calorias</p><p class="font-bold text-pink-400">${totalCal} kcal</p></div>
            </div>
            <div class="space-y-3">
                ${lista.map((ex, i) => `
                    <div id="card-ex-${i}" class="p-4 bg-black/20 rounded-xl flex items-center justify-between group transition-all">
                        <div class="flex items-center gap-4 flex-grow cursor-pointer" onclick="document.getElementById('check-ex-${i}').click()">
                            <input type="checkbox" id="check-ex-${i}" onchange="toggleExercise('check-ex-${i}')" class="w-5 h-5 rounded-full accent-violet-500">
                            <div>
                                <strong class="block text-sm transition-all">${ex.nome}</strong>
                                <span class="text-[10px] opacity-60">${ex.series} series • ${ex.reps} reps</span>
                            </div>
                        </div>
                        ${ex.url ? `<button onclick="window.open('${ex.url}')" class="text-violet-400 p-2"><i class="fas fa-play"></i></button>` : ''}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    updateRingAndTotal(totalCal);
}

/* ---------- Cálculos e Persistência de Dados ---------- */
function updateRingAndTotal(trainingCal) {
    // Busca dados salvos para o cálculo
    const savedData = JSON.parse(localStorage.getItem('iTrainPhysical')) || { bmr: 0 };
    const total = trainingCal + savedData.bmr;
    totalCalEl.textContent = total;

    const circumference = 440;
    const goal = 3500; 
    const offset = circumference - (Math.min(total / goal, 1) * circumference);
    caloriesRing.style.strokeDashoffset = offset;
}

function saveAndCalculatePhysical() {
    const w = parseFloat(document.getElementById('weight').value);
    const h = parseFloat(document.getElementById('height').value);
    const a = parseInt(document.getElementById('age').value);
    const g = document.getElementById('gender').value;

    let bmr = (10 * w) + (6.25 * h) - (5 * a);
    bmr += (g === 'male' ? 5 : -161);
    bmr = Math.round(bmr);

    // Salva TUDO em um objeto só para carregar depois
    const physicalData = { weight: w, height: h, age: a, gender: g, bmr: bmr };
    localStorage.setItem('iTrainPhysical', JSON.stringify(physicalData));

    // UI Update
    bmrValueEl.textContent = bmr;
    bmrResult.classList.remove('hidden');
    
    // Recalcula o total do dia com o novo basal
    renderWorkoutDay(daySelect.value);
}

function loadPhysicalData() {
    const saved = localStorage.getItem('iTrainPhysical');
    if (saved) {
        const data = JSON.parse(saved);
        // Preenche os inputs
        document.getElementById('weight').value = data.weight;
        document.getElementById('height').value = data.height;
        document.getElementById('age').value = data.age;
        document.getElementById('gender').value = data.gender;
        
        // Mostra o resultado do BMR
        bmrValueEl.textContent = data.bmr;
        bmrResult.classList.remove('hidden');
    }
}

/* ---------- Inicialização ---------- */
function init() {
    daySelect.innerHTML = Object.keys(treinoData).map(d => `<option value="${d}">${d}</option>`).join('');
    
    tabs.training.btn.addEventListener('click', () => switchTab('training'));
    tabs.diet.btn.addEventListener('click', () => switchTab('diet'));
    tabs.physical.btn.addEventListener('click', () => switchTab('physical'));

    physicalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        saveAndCalculatePhysical();
    });

    daySelect.addEventListener('change', (e) => renderWorkoutDay(e.target.value));

    // 1. Carrega os dados físicos primeiro
    loadPhysicalData();
    
    // 2. Renderiza o treino (que já vai ler o BMR carregado acima)
    renderWorkoutDay(daySelect.value);
}

window.onload = init;