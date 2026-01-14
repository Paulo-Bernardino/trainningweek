/* ---------- Configuração da Rádio ---------- */
const radioAudio = new Audio("https://stream.zeno.fm/71ntub27u18uv");
radioAudio.crossOrigin = "anonymous"; 
radioAudio.preload = "auto";

/* ---------- Dados de Treino ---------- */
const treinoData = {
    "Segunda": { grupo: "Pernas", icon: "🦵", exercicios: [{ id: 101, nome: "Aquecimento", series: 1, reps: "5 min", calorias: 45 }, { id: 102, nome: "Elevação Pélvica", series: "10x10", reps: "—", calorias: 110 }, { id: 103, nome: "Cadeira Adutora", series: "5x12", reps: "—", calorias: 70 }, { id: 104, nome: "Mesa Flexora", series: 4, reps: 12, calorias: 55 }, { id: 105, nome: "Cadeira Extensora", series: 4, reps: 12, calorias: 60 }, { id: 106, nome: "Agachamento Smith", series: "4x10", reps: "—", calorias: 150 }, { id: 107, nome: "Leg Press", series: "8 séries", reps: "20", calorias: 190 }, { id: 108, nome: "Panturrilha", series: "8x15", reps: "—", calorias: 65 }] },
    "Terça": { grupo: "Peito / Tríceps", icon: "🔥", exercicios: [{ id: 201, nome: "Supino Reto", series: "4x10", reps: "—", calorias: 85 }, { id: 202, nome: "Crucifixo Inclinado", series: "4x12", reps: "—", calorias: 110 }, { id: 203, nome: "CrossOver", series: 4, reps: 15, calorias: 95 }, { id: 204, nome: "Tríceps Corda", series: 4, reps: 12, calorias: 55 }, { id: 205, nome: "Tríceps Pulley", series: "7x Limit", reps: "—", calorias: 80 }] },
    "Quarta": { 
        grupo: "Costas / Panturrilha", 
        icon: "💪", 
        exercicios: [
            { id: 301, nome: "PullDown", series: 4, reps: 15, calorias: 60 },
            { id: 302, nome: "Barra Fixa", series: 4, reps: 10, calorias: 95 },
            { id: 303, nome: "Remada Curvada", series: "4x12", reps: "—", calorias: 85, videoUrl: "https://www.youtube.com/embed/cMQpvkZGQrE?autoplay=1&mute=1&loop=1&playlist=cMQpvkZGQrE" },
            // REMADA BAIXA COM VÍDEO EMBUTIDO
            { 
                id: 304, 
                nome: "Remada Baixa", 
                series: "4x10", 
                reps: "Drop", 
                calorias: 105,
                videoUrl: "https://www.youtube.com/embed/TZpDTv1Xmzc?autoplay=1&mute=1&loop=1&playlist=TZpDTv1Xmzc" 
            },
            { id: 305, nome: "Panturrilha", series: "8x15", reps: "—", calorias: 65 }
        ] 
    },
    "Quinta": { grupo: "Cardio + Abdômen", icon: "🏃", exercicios: [{ id: 401, nome: "Escada", series: 1, reps: "20 min", calorias: 165 }] },
    "Sexta": { grupo: "Pernas", icon: "🦵", exercicios: [{ id: 501, nome: "Agachamento", series: "4x10", reps: "—", calorias: 150 }, { id: 502, nome: "Leg Press", series: "4x15", reps: "—", calorias: 190 }, { id: 503, nome: "Extensora", series: "4x12", reps: "—", calorias: 60 }] },
    "Sábado": { grupo: "Ombro / Bíceps", icon: "🔥", exercicios: [{ id: 601, nome: "Desenvolvimento", series: "4x10", reps: "—", calorias: 90 }, { id: 602, nome: "Elevação Lateral", series: "4x12", reps: "Drop", calorias: 95 }, { id: 603, nome: "Rosca Direta", series: 4, reps: 12, calorias: 55 }, { id: 604, nome: "Rosca Martelo", series: 4, reps: 12, calorias: 60 }] },
    "Domingo": { isRest: true, icon: "🧘", motivo: "Recuperação Total" }
};

/* ---------- Sistema de Modais ---------- */
function showModal(title, message, type = 'info') {
    const modal = document.createElement('div');
    modal.className = "fixed inset-0 bg-black/90 backdrop-blur-md z-[200] flex items-center justify-center p-6 animate-fade-in";
    const colors = type === 'error' ? 'text-red-500' : 'text-violet-400';
    
    modal.innerHTML = `
        <div class="bg-[#1A1B24] w-full max-w-sm rounded-[2rem] p-8 border border-white/10 text-center shadow-2xl">
            <div class="text-4xl mb-4 ${colors}"><i class="fas ${type === 'error' ? 'fa-exclamation-circle' : 'fa-check-circle'}"></i></div>
            <h2 class="text-xl font-black uppercase mb-2 italic text-white">${title}</h2>
            <p class="text-gray-400 text-sm mb-6 font-medium">${message}</p>
            <button onclick="this.parentElement.parentElement.remove()" class="w-full py-4 bg-violet-600 rounded-2xl font-black text-xs uppercase tracking-widest">OK</button>
        </div>
    `;
    document.body.appendChild(modal);
}

/* ---------- Lógica de Calorias e Anel ---------- */
function updateRingAndTotal(trainingCal) {
    const savedData = JSON.parse(localStorage.getItem('iTrainPhysical')) || { bmr: 0 };
    const total = trainingCal + (Number(savedData.bmr) || 0);
    
    const el = document.getElementById('totalCalorias');
    if (el) el.textContent = total.toLocaleString('pt-BR');
    
    const ring = document.getElementById('caloriesRing');
    if (ring) {
        const goal = 3500; // Meta de exemplo
        const progress = Math.min(total / goal, 1);
        const offset = 440 - (progress * 440);
        ring.style.strokeDashoffset = offset;
    }
}

/* ---------- Persistência de Exercícios (3 Horas) ---------- */
function saveTaskState(taskId, isChecked) {
    let states = JSON.parse(localStorage.getItem('taskStates')) || {};
    states[taskId] = { checked: isChecked, timestamp: Date.now() };
    localStorage.setItem('taskStates', JSON.stringify(states));
}

function getTaskState(taskId) {
    let states = JSON.parse(localStorage.getItem('taskStates')) || {};
    const state = states[taskId];
    if (!state) return false;
    
    if (Date.now() - state.timestamp > (3 * 60 * 60 * 1000)) {
        delete states[taskId];
        localStorage.setItem('taskStates', JSON.stringify(states));
        return false;
    }
    return state.checked;
}

/* ---------- Renderização de Treino ---------- */
function renderWorkoutDay(dia) {
    const dayContent = document.getElementById('dayContent');
    const data = treinoData[dia];
    
    if (data.isRest) {
        dayContent.innerHTML = `<div class="p-10 text-center bg-[#1A1B24] rounded-3xl border border-white/5"><span class="text-7xl block mb-4">${data.icon}</span><h2 class="text-2xl font-black italic">${data.motivo}</h2></div>`;
        updateRingAndTotal(0);
        return;
    }

    dayContent.innerHTML = data.exercicios.map(ex => {
        const checked = getTaskState(ex.id);
        return `
        <div class="bg-[#1A1B24] rounded-2xl border border-white/5 overflow-hidden mb-3">
            <div class="p-4 flex items-center">
                <label class="flex items-center gap-4 cursor-pointer flex-grow">
                    <input type="checkbox" class="task-check hidden peer" ${checked ? 'checked' : ''} onchange="saveTaskState(${ex.id}, this.checked)">
                    <div class="w-6 h-6 border-2 border-violet-500/50 rounded-lg flex items-center justify-center peer-checked:bg-violet-500 transition-all">
                        <i class="fas fa-check text-white text-[8px] scale-0 peer-checked:scale-100"></i>
                    </div>
                    <div class="task-text flex-grow">
                        <div class="flex items-center justify-between">
                            <strong class="text-sm font-bold text-gray-100">${ex.nome}</strong>
                            <span class="kcal-tag">${ex.calorias} kcal</span>
                        </div>
                        <div class="text-[10px] font-black uppercase text-gray-500 mt-1">
                            ${ex.series} Séries • <span class="text-cyan-400">${ex.reps}</span>
                        </div>
                    </div>
                </label>
                ${ex.videoUrl ? `<button onclick="toggleVideo('${ex.id}')" class="ml-2 text-violet-400 p-2 bg-violet-400/10 rounded-full"><i class="fas fa-video"></i></button>` : ''}
            </div>
            
            ${ex.videoUrl ? `
            <div id="video-${ex.id}" class="hidden w-full aspect-[9/16] bg-black">
                <iframe src="${ex.videoUrl}" class="w-full h-full" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>` : ''}
        </div>`;
    }).join('');
    
    const totalCal = data.exercicios.reduce((s, ex) => s + (Number(ex.calorias) || 0), 0);
    updateRingAndTotal(totalCal);
}

function toggleVideo(id) {
    const videoDiv = document.getElementById(`video-${id}`);
    videoDiv.classList.toggle('hidden');
}

/* ---------- Sistema de Dieta ---------- */
function renderDiet(tipo) {
    const container = document.getElementById('dietContainer');
    const db = JSON.parse(localStorage.getItem('dietaUsuario')) || { ON: [], OFF: [] };
    const itens = db[tipo] || [];

    // Estilo dos botões
    const btnOn = document.getElementById('btnDietOn');
    const btnOff = document.getElementById('btnDietOff');
    if(btnOn && btnOff) {
        btnOn.className = `flex-1 py-3 rounded-xl font-black text-xs ${tipo==='ON'?'bg-violet-600 text-white':'text-gray-500 bg-black/20'}`;
        btnOff.className = `flex-1 py-3 rounded-xl font-black text-xs ${tipo==='OFF'?'bg-violet-600 text-white':'text-gray-500 bg-black/20'}`;
    }

    container.innerHTML = itens.map(d => `
        <div class="flex items-center p-4 bg-[#1A1B24] border border-white/5 rounded-2xl mb-3">
            <div class="flex-grow">
                <div class="text-violet-400 font-black text-[10px] uppercase">${d.type} • ${d.time}</div>
                <div class="font-bold text-white">${d.item}</div>
                <div class="text-[10px] text-gray-500">${d.qty}</div>
            </div>
            <div class="flex items-center gap-2">
                ${d.link ? `<a href="${d.link}" target="_blank" class="p-2 text-cyan-400"><i class="fas fa-shopping-cart"></i></a>` : ''}
                <button onclick="deleteDietItem('${tipo}', ${d.id})" class="p-2 text-red-500"><i class="fas fa-trash"></i></button>
            </div>
        </div>`).join('') || '<p class="text-center py-10 text-gray-600">Nada cadastrado.</p>';
}

/* ---------- Sistema de Confirmação de Deleção ---------- */

function showConfirmModal(title, message, onConfirm) {
    const modal = document.createElement('div');
    modal.className = "fixed inset-0 bg-black/90 backdrop-blur-md z-[250] flex items-center justify-center p-6 animate-fade-in";
    
    modal.innerHTML = `
        <div class="bg-[#1A1B24] w-full max-w-sm rounded-[2rem] p-8 border border-white/10 text-center shadow-2xl">
            <div class="text-4xl mb-4 text-red-500"><i class="fas fa-trash-alt"></i></div>
            <h2 class="text-xl font-black uppercase mb-2 italic text-white">${title}</h2>
            <p class="text-gray-400 text-sm mb-6 font-medium">${message}</p>
            <div class="flex gap-3">
                <button id="cancelBtn" class="flex-1 py-4 bg-gray-800 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all active:scale-95 text-gray-400">Cancelar</button>
                <button id="confirmBtn" class="flex-1 py-4 bg-red-600 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all active:scale-95 text-white">Excluir</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);

    // Lógica dos botões
    modal.querySelector('#cancelBtn').onclick = () => modal.remove();
    modal.querySelector('#confirmBtn').onclick = () => {
        onConfirm();
        modal.remove();
        showModal("Excluído", "O item foi removido com sucesso.", "success");
    };
}

function saveNewDietItem() {
    const name = document.getElementById('modalItemName').value;
    const qty = document.getElementById('modalItemQty').value;
    const time = document.getElementById('modalItemTime').value;
    if(!name || !qty || !time) return showModal("Erro", "Preencha os campos obrigatórios", "error");

    const db = JSON.parse(localStorage.getItem('dietaUsuario')) || { ON: [], OFF: [] };
    const tipoAtual = document.getElementById('btnDietOn').classList.contains('bg-violet-600') ? 'ON' : 'OFF';

    db[tipoAtual].push({
        id: Date.now(),
        type: document.getElementById('modalItemType').value,
        item: name, qty: qty, time: time,
        link: document.getElementById('modalItemLink').value
    });

    localStorage.setItem('dietaUsuario', JSON.stringify(db));
    closeDietModal();
    renderDiet(tipoAtual);
    showModal("Sucesso", "Item adicionado!", "success");
}

function deleteDietItem(tipo, id) {
    showConfirmModal(
        "Tem certeza?", 
        "Você está prestes a remover este item da sua dieta. Essa ação não pode ser desfeita.", 
        () => {
            let db = JSON.parse(localStorage.getItem('dietaUsuario'));
            db[tipo] = db[tipo].filter(i => i.id !== id);
            localStorage.setItem('dietaUsuario', JSON.stringify(db));
            renderDiet(tipo);
        }
    );
}

/* ---------- Perfil Físico ---------- */
function saveAndCalculatePhysical() {
    const w = document.getElementById('weight').value;
    const h = document.getElementById('height').value;
    const a = document.getElementById('age').value;
    const g = document.getElementById('gender').value;

    if(!w || !h || !a) return showModal("Erro", "Preencha todos os campos físicos", "error");

    const bmr = Math.round((10 * w) + (6.25 * h) - (5 * a) + (g === 'male' ? 5 : -161));
    localStorage.setItem('iTrainPhysical', JSON.stringify({ weight: w, height: h, age: a, gender: g, bmr: bmr }));
    
    document.getElementById('bmrValue').textContent = bmr.toLocaleString('pt-BR');
    document.getElementById('bmrResult').classList.remove('hidden');
    
    // Atualiza o anel com o novo basal
    const diaH = document.getElementById('daySelect').value;
    renderWorkoutDay(diaH);
    
    showModal("Perfil", "Dados atualizados com sucesso!", "success");
}

/* ---------- Inicialização e Abas ---------- */
function switchTab(target) {
    document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active', 'text-white'));
    document.querySelectorAll('[id^="content"]').forEach(d => d.classList.add('hidden'));
    
    const activeTab = document.getElementById('tab' + target.charAt(0).toUpperCase() + target.slice(1));
    const activeContent = document.getElementById('content' + target.charAt(0).toUpperCase() + target.slice(1));
    
    if(activeTab) activeTab.classList.add('active');
    if(activeContent) activeContent.classList.remove('hidden');

    if(target === 'diet') renderDiet('ON');
}

function setupRadio() {
    const btn = document.getElementById('playPauseButton');
    const icon = document.getElementById('playPauseIcon');
    btn?.addEventListener('click', () => {
        if (radioAudio.paused) { radioAudio.play(); icon.classList.replace('fa-play', 'fa-pause'); }
        else { radioAudio.pause(); icon.classList.replace('fa-pause', 'fa-play'); }
    });
}

function init() {
    const dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const hoje = dias[new Date().getDay()];
    
    const ds = document.getElementById('daySelect');
    if(ds) {
        ds.innerHTML = dias.map(d => `<option value="${d}" ${d===hoje?'selected':''}>${d}</option>`).join('');
        ds.addEventListener('change', (e) => renderWorkoutDay(e.target.value));
        renderWorkoutDay(hoje);
    }

    document.getElementById('tabTraining')?.addEventListener('click', () => switchTab('training'));
    document.getElementById('tabDiet')?.addEventListener('click', () => switchTab('diet'));
    document.getElementById('tabPhysical')?.addEventListener('click', () => switchTab('physical'));

    // Carregar físico salvo
    const phy = JSON.parse(localStorage.getItem('iTrainPhysical'));
    if(phy) {
        document.getElementById('weight').value = phy.weight;
        document.getElementById('height').value = phy.height;
        document.getElementById('age').value = phy.age;
        document.getElementById('bmrValue').textContent = phy.bmr.toLocaleString('pt-BR');
        document.getElementById('bmrResult').classList.remove('hidden');
    }

    setupRadio();
}

function openDietModal() { document.getElementById('dietModal').style.display = 'flex'; }
function closeDietModal() { document.getElementById('dietModal').style.display = 'none'; }