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
    "Segunda": { grupo: "Pernas", icon: "🦵", exercicios: [{ nome: "Aquecimento", series: 1, reps: "5 min", calorias: 45 }, { nome: "Elevação Pélvica", series: "10x10", reps: "—", calorias: 110 }, { nome: "Cadeira Adutora", series: "5x12", reps: "—", calorias: 70 }, { nome: "Mesa Flexora", series: 4, reps: 12, calorias: 55 }, { nome: "Cadeira Extensora", series: 4, reps: 12, calorias: 60 }, { nome: "Agachamento Smith", series: "4x10", reps: "—", calorias: 150 }, { nome: "Leg Press", series: "8 séries", reps: "20", calorias: 190 }, { nome: "Panturrilha", series: "8x15", reps: "—", calorias: 65 }] },
    "Terça": { grupo: "Peito / Tríceps", icon: "🔥", exercicios: [{ nome: "Supino Reto", series: "4x10", reps: "—", calorias: 85 }, { nome: "Crucifixo Inclinado", series: "4x12", reps: "—", calorias: 110 }, { nome: "CrossOver", series: 4, reps: 15, calorias: 95 }, { nome: "Tríceps Corda", series: 4, reps: 12, calorias: 55 }, { nome: "Tríceps Pulley", series: "7x Limit", reps: "—", calorias: 80 }] },
    "Quarta": { grupo: "Costas / Panturrilha", icon: "💪", exercicios: [{ nome: "PullDown", series: 4, reps: 15, calorias: 60 }, { nome: "Barra Fixa", series: 4, reps: 10, calorias: 95 }, { nome: "Remada Curvada", series: "4x12", reps: "—", calorias: 85 }, { nome: "Remada Baixa", series: "4x10", reps: "Drop", calorias: 105 }, { nome: "Panturrilha", series: "8x15", reps: "—", calorias: 65 }] },
    "Quinta": { grupo: "Cardio + Abdômen", icon: "🏃", exercicios: [{ nome: "Escada", series: 1, reps: "20 min", calorias: 165 }] },
    "Sexta": { grupo: "Pernas", icon: "🦵", exercicios: [{ nome: "Agachamento", series: "4x10", reps: "—", calorias: 150 }, { nome: "Leg Press", series: "4x15", reps: "—", calorias: 190 }, { nome: "Extensora", series: "4x12", reps: "—", calorias: 60 }] },
    "Sábado": { grupo: "Ombro / Bíceps", icon: "🔥", exercicios: [{ nome: "Desenvolvimento", series: "4x10", reps: "—", calorias: 90 }, { nome: "Elevação Lateral", series: "4x12", reps: "Drop", calorias: 95 }, { nome: "Rosca Direta", series: 4, reps: 12, calorias: 55 }, { nome: "Rosca Martelo", series: 4, reps: 12, calorias: 60 }] },
    "Domingo": { isRest: true, icon: "🧘", motivo: "Recuperação Total" }
};

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