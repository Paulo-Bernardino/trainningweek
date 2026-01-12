/* ---------- Configuração da Rádio ---------- */
// Link direto via HTTPS (obrigatório para mobile)
const radioAudio = new Audio("https://stream.zeno.fm/71ntub27u18uv");
radioAudio.crossOrigin = "anonymous"; 
radioAudio.preload = "auto";

/* ---------- Dados de Treino ---------- */
const exerciciosFixos = [
    { nome: "Abdominal na Máquina", series: 4, reps: 40, calorias: 50 },
    { nome: "Prancha", series: 4, reps: "2 min", calorias: 85 },
    { nome: "Esteira", series: 1, reps: "30 min", calorias: 330 }
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

    "Domingo": { 
        isRest: true,
        icon: "🧘",
        motivo: "Alongamento, relaxamento e recuperação."
    }


/* ---------- Player de Música (Blindado para Mobile) ---------- */
function setupRadio() {
    const playBtn = document.getElementById('playPauseButton');
    const playIcon = document.getElementById('playPauseIcon');
    const songTitle = document.getElementById('songTitle');
    const wave = document.getElementById('music-wave');

    if (!playBtn) return;

    playBtn.addEventListener('click', () => {
        if (radioAudio.paused) {
            // Garante que o link está correto antes de disparar
            if (!radioAudio.src || radioAudio.src === "") {
                radioAudio.src = "https://stream.zeno.fm/71ntub27u18uv";
            }

            // Forçamos um load rápido e esperamos 150ms para o hardware mobile processar
            radioAudio.load();
            
            setTimeout(() => {
                const playPromise = radioAudio.play();
                
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        playIcon.classList.replace('fa-play', 'fa-pause');
                        if (songTitle) songTitle.innerText = "TOCANDO PHONK";
                        if (wave) wave.classList.remove('hidden');
                    }).catch(error => {
                        console.log("Reiniciando buffer...");
                        // Tentativa de recuperação automática se for erro de interrupção
                        radioAudio.play();
                    });
                }
            }, 150);
        } else {
            radioAudio.pause();
            playIcon.classList.replace('fa-pause', 'fa-play');
            if (songTitle) songTitle.innerText = "TREINO ATIVO";
            if (wave) wave.classList.add('hidden');
        }
    });
}

/* ---------- Sistema de Abas ---------- */
function switchTab(target) {
    const allTabs = {
        training: { btn: document.getElementById('tabTraining'), content: document.getElementById('contentTraining') },
        diet: { btn: document.getElementById('tabDiet'), content: document.getElementById('contentDiet') },
        physical: { btn: document.getElementById('tabPhysical'), content: document.getElementById('contentPhysical') }
    };

    Object.keys(allTabs).forEach(key => {
        const isTarget = key === target;
        if (allTabs[key].btn) {
            allTabs[key].btn.classList.toggle('active', isTarget);
            allTabs[key].btn.classList.toggle('text-gray-500', !isTarget);
        }
        if (allTabs[key].content) {
            isTarget ? allTabs[key].content.classList.remove('hidden') : allTabs[key].content.classList.add('hidden');
        }
    });

    if (target === 'diet') renderDiet('ON');
}

/* ---------- Treino e Calorias ---------- */
function renderWorkoutDay(dia) {
    const dayContent = document.getElementById('dayContent');
    const data = treinoData[dia];
    
    if (data.isRest) {
        dayContent.innerHTML = `<div class="p-10 text-center bg-[#1A1B24] rounded-3xl border border-white/5 shadow-2xl">
            <span class="text-7xl block mb-4">${data.icon}</span>
            <h2 class="text-2xl font-black italic tracking-tighter">${data.motivo}</h2>
        </div>`;
        updateRingAndTotal(0);
        return;
    }

    const lista = data.grupo.includes("Pernas") ? data.exercicios : [...data.exercicios, ...exerciciosFixos];
    const totalCal = lista.reduce((s, ex) => s + (Number(ex.calorias) || 0), 0);

    dayContent.innerHTML = lista.map(ex => `
        <div class="bg-[#1A1B24] p-4 rounded-2xl border border-white/5 flex items-center group mb-3">
            <label class="relative flex items-center cursor-pointer flex-grow">
                <input type="checkbox" class="task-check hidden peer">
                <div class="w-7 h-7 border-2 border-violet-500/50 rounded-lg flex items-center justify-center peer-checked:bg-violet-500 peer-checked:border-violet-500 transition-all">
                    <i class="fas fa-check text-white text-[10px] scale-0 peer-checked:scale-100 transition-transform"></i>
                </div>
                <div class="ml-4 task-text flex-grow">
                    <div class="flex items-center justify-between mb-1">
                        <strong class="text-sm font-bold text-gray-100">${ex.nome}</strong>
                        <span class="kcal-tag">${ex.calorias} kcal</span>
                    </div>
                    <div class="flex gap-3 text-[10px] font-black uppercase text-violet-400">
                        <span>${ex.series} Séries</span>
                        <span class="text-cyan-400">${ex.reps}</span>
                    </div>
                </div>
            </label>
        </div>`).join('');
    
    updateRingAndTotal(totalCal);
}

function updateRingAndTotal(trainingCal) {
    const savedData = JSON.parse(localStorage.getItem('iTrainPhysical')) || { bmr: 0 };
    const total = trainingCal + (Number(savedData.bmr) || 0);
    const el = document.getElementById('totalCalorias');
    if (el) el.textContent = total.toLocaleString('pt-BR');
    
    const progress = Math.min(total / 3500, 1);
    const offset = 440 - (progress * 440);
    const ring = document.getElementById('caloriesRing');
    if (ring) ring.style.strokeDashoffset = offset;
}

/* ---------- Dieta ---------- */
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
function renderDiet(tipo) {
    const container = document.getElementById('dietContainer');
    const btnOn = document.getElementById('btnDietOn');
    const btnOff = document.getElementById('btnDietOff');

    if (btnOn && btnOff) {
        btnOn.className = `flex-1 py-3 rounded-xl font-black text-xs transition-all ${tipo==='ON'?'bg-violet-600 text-white shadow-lg shadow-violet-500/30':'text-gray-500 bg-black/20'}`;
        btnOff.className = `flex-1 py-3 rounded-xl font-black text-xs transition-all ${tipo==='OFF'?'bg-violet-600 text-white shadow-lg shadow-violet-500/30':'text-gray-500 bg-black/20'}`;
    }

    if(container) {
        container.innerHTML = dietaData[tipo].map(d => `
            <div class="flex items-center p-5 bg-[#1A1B24] border border-white/5 rounded-2xl mb-3">
                <label class="flex items-center gap-5 cursor-pointer flex-grow">
                    <input type="checkbox" class="task-check hidden peer">
                    <div class="w-6 h-6 border-2 border-violet-500/50 rounded-full flex items-center justify-center peer-checked:bg-violet-500 transition-all">
                        <i class="fas fa-check text-white text-[8px] scale-0 peer-checked:scale-100 transition-transform"></i>
                    </div>
                    <div class="task-text">
                        <div class="text-violet-400 font-black text-xs uppercase mb-1">${d.time}</div>
                        <div class="font-bold text-white">${d.item}</div>
                        <div class="text-[10px] text-gray-500">${d.obs}</div>
                    </div>
                </label>
            </div>`).join('');
    }
}

/* ---------- Físico ---------- */
function saveAndCalculatePhysical() {
    const w = parseFloat(document.getElementById('weight').value);
    const h = parseFloat(document.getElementById('height').value);
    const a = parseInt(document.getElementById('age').value);
    const g = document.getElementById('gender').value;

    if(!w || !h || !a) return alert("Preencha todos os campos!");

    let bmr = Math.round((10 * w) + (6.25 * h) - (5 * a) + (g === 'male' ? 5 : -161));
    localStorage.setItem('iTrainPhysical', JSON.stringify({ weight: w, height: h, age: a, gender: g, bmr: bmr }));
    
    document.getElementById('bmrValue').textContent = bmr.toLocaleString('pt-BR');
    document.getElementById('bmrResult').classList.remove('hidden');
    renderWorkoutDay(document.getElementById('daySelect').value);
}

/* ---------- Inicialização ---------- */
function init() {
    // Interação inicial necessária para navegadores mobile
    document.body.addEventListener('touchstart', () => {
        if (radioAudio.readyState === 0) radioAudio.load();
    }, { once: true });

    const daySelect = document.getElementById('daySelect');
    if (daySelect) {
        daySelect.innerHTML = Object.keys(treinoData).map(d => `<option value="${d}">${d}</option>`).join('');
        daySelect.addEventListener('change', (e) => renderWorkoutDay(e.target.value));
    }

    document.getElementById('tabTraining')?.addEventListener('click', () => switchTab('training'));
    document.getElementById('tabDiet')?.addEventListener('click', () => switchTab('diet'));
    document.getElementById('tabPhysical')?.addEventListener('click', () => switchTab('physical'));
    document.getElementById('btnDietOn')?.addEventListener('click', () => renderDiet('ON'));
    document.getElementById('btnDietOff')?.addEventListener('click', () => renderDiet('OFF'));

    document.getElementById('physicalForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        saveAndCalculatePhysical();
    });

    const saved = localStorage.getItem('iTrainPhysical');
    if (saved) {
        const data = JSON.parse(saved);
        if(document.getElementById('weight')) document.getElementById('weight').value = data.weight;
        if(document.getElementById('height')) document.getElementById('height').value = data.height;
        if(document.getElementById('age')) document.getElementById('age').value = data.age;
        if(document.getElementById('gender')) document.getElementById('gender').value = data.gender;
        if(document.getElementById('bmrValue')) {
            document.getElementById('bmrValue').textContent = data.bmr.toLocaleString('pt-BR');
            document.getElementById('bmrResult').classList.remove('hidden');
        }
    }

    setupRadio();
    if (daySelect) renderWorkoutDay(daySelect.value);
}

init();