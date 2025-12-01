/* ---------- Dados (treino) ---------- */
const exerciciosFixos = [
    { nome: "Abdominal na Máquina", series: 4, reps: 20, calorias: 46, url: "https://youtube.com/shorts/MkMfujLgb-M" },
    { nome: "Prancha", series: 4, reps: "1 minuto", calorias: 40, url: "https://youtube.com/shorts/UwCFLBJv4ek" },
    { nome: "Esteira", series: 1, reps: "45 minutos", velocidade: "6 km/h", inclinacao: 6, calorias: 536 }
];

const treinoData = {
    "Segunda": {
        grupo: "Peito + Panturrilha",
        tempoMock: "1h 37 min",
        cor: "from-pink-500/20 to-rose-900/20",
        icon: "🔥",
        exercicios: [
            { nome: "Supino Inclinado Com Halter", series: 4, reps: 10, calorias: 62, url: "https://youtube.com/shorts/Fa-X2ByLHaY?si=z8PRuIqqEUK6XOhe" }, 
            { nome: "Supino Reto Com Halter", series: 4, reps: 10, calorias: 55, url: "https://youtu.be/Cjh2fIMQHk0?si=AgxP5_lxR5j47NQb" }, 
            { nome: "Crucifixo Com Halteres", series: 4, reps: 10, calorias: 45, url: "https://youtube.com/shorts/_N6tFhPtr2U?si=HQkP8XfOhxCklcWq" }, 
            { nome: "Crucifixo Inclinado Com Halteres", series: 4, reps: 10, calorias: 48, url: "https://youtube.com/shorts/oepL3KalMYQ?si=pOJiMTVLO_6XnDNn" }, 
            { nome: "Mergulhos (Paralela)", series: 3, reps: "Falha", calorias: 70, url: "https://youtube.com/shorts/1P0HiOYDadE?si=Cd2Fx2dIpgSOkRJF" }, 
            { nome: "CrossOver Reto", series: 3, reps: 12, calorias: 40, url: "https://youtube.com/shorts/YyFaD_mt8kQ?si=7VmZ-donJXa8LqeT" }, 
            { nome: "Elevação De Panturrilha Em Pé", series: 5, reps: 20, calorias: 35, url: "https://youtube.com/shorts/_W3G3vJ54JU?si=JqpIZl6mpIcwCOnH" }, 
            { nome: "Elevação De Panturrilha Sentado", series: 5, reps: 25, calorias: 40, url: "https://youtube.com/shorts/6eJ9EVwazXk?si=DSHw9SHKoiA_Gqqi" }, 
            ...exerciciosFixos
        ],
        playlist: [
            { nome: "Music Training!", url: "https://paulo-bernardino.github.io/trainningweek/music/segunda.mp3" }
        ]
    },

    "Terça": {
        grupo: "Costas",
        tempoMock: "1h 34 min",
        cor: "from-blue-500/20 to-indigo-900/20",
        icon: "💪",
        exercicios: [
            { nome: "Levantamento Terra", series: 3, reps: 10, calorias: 95, url: "https://youtu.be/50AkPBZwACQ?si=mKVaF1G3ZvVQ7xd9" }, 
            { nome: "PullDown Com Cordas", series: 4, reps: 15, calorias: 48, url: "https://youtube.com/shorts/faBzkqlJzXU?si=C5z2Wysxad69bbwL" }, 
            { nome: "Remada Curvada Com Barra", series: 4, reps: 12, calorias: 60, url: "https://youtube.com/shorts/TZpDTv1Xmzc?si=d13yCwRT8-ORVZpy" }, 
            { nome: "Remada Com Halter Banco 45", series: 4, reps: 10, calorias: 55, url: "https://youtube.com/shorts/3s70yR3tbjs?si=uFS37-9phorqHOEG" }, 
            { nome: "Barra Fixa Aberta", series: 4, reps: 10, calorias: 50, url: "https://youtube.com/shorts/BYYxtz9MtDc?si=JdoXn7yZqoMmUxHI" }, 
            { nome: "Puxada Alta Aberta", series: 4, reps: 12, calorias: 45, url: "https://youtube.com/shorts/I-my22VjbdY?si=V9W-fSVUiBKEzMcw" }, 
            { nome: "Remada Sentada Cabo Triangulo", series: 4, reps: 12, calorias: 50, url: "https://youtube.com/shorts/6aN15TtOrL0?si=yxB79Kb-aLHP9Uvg" }, 
            { nome: "Hipertensão Lombar", series: 3, reps: 12, calorias: 40, url: "https://youtube.com/shorts/5RlGMbwH2S4?si=t5BgGFbcwFuoecA-" }, 
            ...exerciciosFixos
        ],
        playlist: [
            { nome: "Music Training!", url: "https://paulo-bernardino.github.io/trainningweek/music/terca.mp3" }
        ]
    },

    "Quarta": { 
        isRest: true,
        icon: "🛌",
        motivo: "Dia reservado para recuperação muscular total."
    },

    "Quinta": {
        grupo: "Pernas",
        tempoMock: "2h 10 min",
        cor: "from-green-500/20 to-emerald-900/20",
        icon: "🦵",
        exercicios: [
            { nome: "Cadeira Adutora", series: 4, reps: "12", calorias: 40, url: "https://youtube.com/shorts/AmHRbGPzJ70?si=gFxiKFrtQobTkISl" }, 
            { nome: "Cadeira Abdutora", series: 4, reps: "12", calorias: 40, url: "https://youtube.com/shorts/wMvvQ5l7VNE?si=syNajohh6h__H1xI" }, 
            { nome: "Elevação Pelvica Com Barra", series: 5, reps: "12", calorias: 63, url: "https://youtube.com/shorts/1qVDDCXbfks?si=UYF0UUufNH7BYlKX" }, 
            { nome: "Cadeira Extensora", series: 4, reps: "12", calorias: 45, url: "https://youtube.com/shorts/4mLtKKD6IUE?si=XYIgeJjuEca87gsu" }, 
            { nome: "Mesa Flexora", series: 5, reps: "12", calorias: 50, url: "https://youtube.com/shorts/ne-J--fK0tE?si=H0lKHfmHUpmR5hp_" }, 
            { nome: "Leg Press", series: 5, reps: "12", calorias: 60, url: "https://youtube.com/shorts/lHZUF_s3q9c?si=KlVL1za8WHyd98fn" }, 
            { nome: "Agachamento no Smith", series: 4, reps: "12", calorias: 54, url: "https://youtube.com/shorts/8pjN_4fkxgU?si=PZnllpET-W9YQjW7" }, 
            { nome: "Elevação De Panturrilha Em Pé", series: 5, reps: 20, calorias: 54, url: "https://youtube.com/shorts/_W3G3vJ54JU?si=JqpIZl6mpIcwCOnH" }, 
            { nome: "Elevação De Panturrilha Sentado", series: 5, reps: 25, calorias: 61, url: "https://youtube.com/shorts/6eJ9EVwazXk?si=DSHw9SHKoiA_Gqqi" }, 
            { nome: "Panturrilha Leg Press", series: 5, reps: 15, calorias: 47, url: "https://youtube.com/shorts/83e3vyu0_XE?si=r7h1_64cUj3TO4H4" }, 
            ...exerciciosFixos
        ],
        playlist: [
            { nome: "Music Training!", url: "https://paulo-bernardino.github.io/trainningweek/music/quinta.mp3" }
        ]
    },

    "Sexta": {
        grupo: "Braços",
        tempoMock: "1h 32 min",
        cor: "from-yellow-500/20 to-amber-900/20",
        icon: "💪",
        exercicios: [
            { nome: "Tríceps Pulley Com Barra W", series: 4, reps: "12", calorias: 58, url: "https://youtube.com/shorts/qRYakaSLipc?si=FDE2aayeqr_WwzAd" }, 
            { nome: "Triceps Pulley Com Corda", series: 4, reps: "12", calorias: 52, url: "https://youtube.com/shorts/rhC2dgBnRRQ?si=jUywYB5w7rnNliVN" }, 
            { nome: "Triceps Testa Com Corda na Pulley", series: 4, reps: 15, calorias: 60, url: "https://youtube.com/shorts/2OymsPc-9Tw?si=k0AxDyLl4rK1lsjh" }, 
            { nome: "Mergulhos (Paralela)", series: 3, reps: "Falha", calorias: 110, url: "https://youtube.com/shorts/1P0HiOYDadE?si=Cd2Fx2dIpgSOkRJF" }, 
            { nome: "Rosca Spider W", series: 4, reps: "12", calorias: 58, url: "https://youtube.com/shorts/xzJofB3KdJ4?si=nlix5zDKGsymSpY2" }, 
            { nome: "Rosca Alternada Banco 45 Pulley", series: 4, reps: "12", calorias: 55, url: "https://youtube.com/shorts/F_EkPpuJV4k?si=HqCH2XKAjP368oVE" }, 
            { nome: "Rosca Inversa Com Barra W", series: 4, reps: "12", calorias: 62, url: "https://youtube.com/shorts/b57Wyr7c1Xk?si=R8_9AQUjAscyy0gl" }, 
            { nome: "Rosca Martelo Pulley", series: 4, reps: "12", calorias: 62, url: "https://youtube.com/shorts/N1Rt9ddr_I0?si=hfsz6-gNRIUN3lRC" }, 
            ...exerciciosFixos
        ],
        playlist: [
            { nome: "Music Training!", url: "https://paulo-bernardino.github.io/trainningweek/music/sexta.mp3" }
        ]
    },

    "Sábado": {
        grupo: "Ombros e Panturrilhas",
        tempoMock: "1h 26 min",
        cor: "from-orange-500/20 to-red-900/20",
        icon: "🔥",
        exercicios: [
            { nome: "Desenvolvimento Com Halter", series: 4, reps: "12", calorias: 70, url: "https://youtube.com/shorts/GeoBNo3lhCk?si=RPXW2vEKLYjr7P9l" }, 
            { nome: "Elevação Lateral Pulley", series: 4, reps: 12, calorias: 55, url: "https://youtube.com/shorts/54ukTywvKxU?si=ZRSyCGkeJO6mSxyE" }, 
            { nome: "Elevação Frontal Pulley", series: 4, reps: 12, calorias: 52, url: "https://youtube.com/shorts/lPci3C3wzT4?si=A60UxRJn-aj46OJ5" }, 
            { nome: "Arnold Press", series: 3, reps: "12", calorias: 58, url: "https://youtube.com/shorts/oF_mzfe4m08?si=6STkXzo5obAS_1MM" }, 
            { nome: "Voador Inverso", series: 4, reps: "15", calorias: 62, url: "https://youtube.com/shorts/IbmM78SlAAM?si=b1ZPIqlYi6Fif1gw" }, 
            { nome: "Encolhimento com Barra", series: 4, reps: "12", calorias: 65, url: "https://youtube.com/shorts/B5nkXSil68o?si=nZ08GmOIOKdY-97Y" }, 
            { nome: "Elevação De Panturrilha Em Pé", series: 5, reps: 20, calorias: 54, url: "https://youtube.com/shorts/_W3G3vJ54JU?si=JqpIZl6mpIcwCOnH" }, 
            { nome: "Elevação De Panturrilha Sentado", series: 5, reps: 25, calorias: 61, url: "https://youtube.com/shorts/6eJ9EVwazXk?si=DSHw9SHKoiA_Gqqi" }, 
            { nome: "Panturrilha Leg Press", series: 5, reps: 15, calorias: 47, url: "https://youtube.com/shorts/83e3vyu0_XE?si=r7h1_64cUj3TO4H4" }, 
            ...exerciciosFixos
        ],
        playlist: [
            { nome: "Music Training!", url: "https://paulo-bernardino.github.io/trainningweek/music/sabado.mp3" }
        ]
    },

    "Domingo": { 
        isRest: true,
        icon: "🧘",
        motivo: "Alongamento, relaxamento e recuperação."
    }
};

/* ---------- DOM elements ---------- */
const daySelect = document.getElementById('daySelect');
const dayContent = document.getElementById('dayContent');
const caloriesRing = document.getElementById('caloriesRing');
const totalCalEl = document.getElementById('totalCalorias'); // aqui mostra TOTAL (treino + BMR)

const tabTraining = document.getElementById("tabTraining");
const tabPhysical = document.getElementById("tabPhysical");
const contentTraining = document.getElementById("contentTraining");
const contentPhysical = document.getElementById("contentPhysical");

const physicalForm = document.getElementById('physicalForm');
const bmrResult = document.getElementById('bmrResult');
const bmrValueEl = document.getElementById('bmrValue');

const inputWeight = document.getElementById('weight');
const inputHeight = document.getElementById('height');
const inputAge = document.getElementById('age');
const inputGender = document.getElementById('gender');

const messageBox = document.getElementById('messageBox');

const audioPlayer = document.getElementById('treinoAudioPlayer');
const playPauseButton = document.getElementById('playPauseButton');
const playPauseIcon = document.getElementById('playPauseIcon');
const currentSongInfo = document.getElementById('currentSongInfo');

let currentPlaylist = [];
let currentTrackIndex = 0;
let isPlaying = false;

function activateTab(tab) {
    // Remove active de todos
    document.querySelectorAll(".tab-button").forEach(btn => {
        btn.classList.remove("active");
        btn.classList.remove("bg-violet-600", "border-violet-600/50", "text-white");
        btn.classList.add("text-gray-400");
    });

    // Adiciona active no selecionado
    tab.classList.add("active");
    tab.classList.add("bg-violet-600", "border-violet-600/50", "text-white");
    tab.classList.remove("text-gray-400");
}

tabTraining.addEventListener("click", () => {
    activateTab(tabTraining);
    contentTraining.classList.remove("hidden");
    contentPhysical.classList.add("hidden");
});

tabPhysical.addEventListener("click", () => {
    activateTab(tabPhysical);
    contentTraining.classList.add("hidden");
    contentPhysical.classList.remove("hidden");
});

/* ---------- Storage helpers ---------- */
function loadAppData() {
    try {
        const s = localStorage.getItem('iTrainData');
        if (!s) return { physicalConfig: { weight:112, height:181, age:29, gender:'male', bmr:0 }, currentDay: null };
        return JSON.parse(s);
    } catch (e) {
        console.error('load error', e);
        return { physicalConfig: { weight:112, height:181, age:29, gender:'male', bmr:0 }, currentDay: null };
    }
}
function saveAppData(data) {
    try { localStorage.setItem('iTrainData', JSON.stringify(data)); } catch(e){ console.error('save error', e); }
}
let appData = loadAppData();

/* ---------- Utils ---------- */
function showMessage(msg, type='success') {
    messageBox.textContent = msg;
    messageBox.className = 'fixed top-4 left-1/2 -translate-x-1/2 p-4 rounded-xl shadow-xl transition-opacity duration-300 opacity-0 hidden z-[100]';
    messageBox.classList.add(type === 'success' ? 'bg-green-600' : 'bg-red-600');
    messageBox.classList.remove('hidden');
    setTimeout(()=> messageBox.classList.remove('opacity-0'), 10);
    setTimeout(()=> {
        messageBox.classList.add('opacity-0');
        setTimeout(()=> messageBox.classList.add('hidden'), 300);
    }, 3000);
}

function calculateBMR(weightKg, heightCm, age, gender) {
    let bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age);
    bmr += (gender === 'male') ? 5 : -161;
    return Math.round(bmr);
}

/* ---------- Populate days select ---------- */
function populateDaySelect() {
    const days = Object.keys(treinoData);
    daySelect.innerHTML = days.map(d => `<option value="${d}">${d}</option>`).join('');
    const stored = appData.currentDay;
    const daysOfWeek = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
    const today = daysOfWeek[new Date().getDay()];
    daySelect.value = stored && days.includes(stored) ? stored : (days.includes(today) ? today : days[0]);
}

/* ---------- Animations & ring ---------- */
function animateValueDOM(el, start, end, duration=700) {
    start = Number(start) || 0; end = Number(end) || 0;
    const range = end - start;
    let startTime = null;
    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime)/duration, 1);
        el.textContent = Math.floor(start + range * progress);
        if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}

function updateRingAndTotal(trainingCalories) {
    const bmr = (appData.physicalConfig && Number(appData.physicalConfig.bmr)) ? Number(appData.physicalConfig.bmr) : 0;
    const total = Number(trainingCalories) + bmr;

    // atualiza total animado
    animateValueDOM(totalCalEl, Number(totalCalEl.textContent) || 0, total, 700);

    // atualiza ring com base no total (ou ajuste de metas)
    const circumference = 440;
    const maxGoal = Math.max(600, total); // garantir visível
    const percent = Math.min(total / maxGoal, 1);
    const offset = circumference - circumference * percent;
    caloriesRing.style.strokeDashoffset = offset;
    caloriesRing.style.stroke = "#A855F7";
}

/* ---------- YouTube open helper ---------- */
function openYoutubeLink(e, originalUrl) {
    e.preventDefault();
    const videoIdMatch = originalUrl.match(/(?:youtube\.com\/(?:shorts\/|watch\\?v=)|youtu\.be\/)([^&?]+)/);
    if (videoIdMatch && videoIdMatch[1]) {
        const id = videoIdMatch[1];
        const appUrl = `vnd.youtube:${id}`;
        window.location.href = appUrl;
        setTimeout(()=> window.open(originalUrl, '_blank'), 300);
    } else {
        window.open(originalUrl, '_blank');
    }
}

/* ---------- Audio player (simples) ---------- */
function setupAudioPlayer() {
    audioPlayer.addEventListener('ended', playNextTrack);
    playPauseButton.addEventListener('click', () => {
        if (currentPlaylist.length === 0 || playPauseButton.disabled) return;
        if (isPlaying) {
            audioPlayer.pause(); isPlaying = false; playPauseIcon.className = 'fas fa-play';
            currentSongInfo.innerHTML = '<span class="text-gray-400">Pausado.</span>';
        } else {
            const p = audioPlayer.play();
            if (p !== undefined) {
                p.then(()=> { isPlaying = true; playPauseIcon.className = 'fas fa-pause'; })
                 .catch(()=> { isPlaying = false; playPauseIcon.className = 'fas fa-play'; });
            } else { isPlaying = true; playPauseIcon.className = 'fas fa-pause'; }
        }
    });
}
function playCurrentTrack() {
    if (currentPlaylist.length === 0) return;
    const track = currentPlaylist[currentTrackIndex];
    audioPlayer.src = track.url;
    currentSongInfo.innerHTML = `<span class="text-xs text-gray-400">Tocando ${currentTrackIndex+1}/${currentPlaylist.length}:</span><div class="font-semibold text-white">${track.nome}</div>`;
    audioPlayer.load();
    const p = audioPlayer.play();
    if (p !== undefined) {
        p.then(()=> { isPlaying = true; playPauseIcon.className = 'fas fa-pause'; })
         .catch(()=> { isPlaying = false; playPauseIcon.className = 'fas fa-play'; });
    }
}
function playNextTrack() {
    if (currentPlaylist.length === 0) return;
    currentTrackIndex = (currentTrackIndex + 1) % currentPlaylist.length;
    playCurrentTrack();
}
function setupAudioPlayerForDay(dia) {
    const data = treinoData[dia];
    audioPlayer.pause(); audioPlayer.removeAttribute('src');
    isPlaying = false; currentPlaylist = []; currentTrackIndex = 0;
    playPauseIcon.className = 'fas fa-play'; playPauseButton.disabled = false;
    currentSongInfo.innerHTML = '<span class="text-gray-400">Pronto.</span>';
    if (!data || data.isRest || !data.playlist || data.playlist.length === 0) {
        currentSongInfo.innerHTML = '<span class="text-gray-400">Sem música neste dia.</span>';
        playPauseButton.disabled = true; return;
    }
    currentPlaylist = data.playlist.slice();
    currentTrackIndex = 0;
    audioPlayer.src = currentPlaylist[0].url;
    currentSongInfo.innerHTML = `<span class="text-xs text-gray-400">Pronta 1/${currentPlaylist.length}:</span><div class="font-semibold text-white">${currentPlaylist[0].nome}</div>`;
}

/* ---------- Render functions ---------- */
function renderRestDay(data) {
    dayContent.innerHTML = `
        <div class="mt-8 p-10 rounded-3xl bg-[#1A1B24] border border-white/10 text-center transition-opacity duration-300">
            <p class="text-6xl mb-4">${data.icon || '😴'}</p>
            <h2 class="text-3xl font-extrabold mb-2 text-violet-400">Dia de Descanso</h2>
            <p class="text-gray-400 text-lg">${data.motivo || 'Recuperação é parte essencial do progresso!'}</p>
        </div>`;
}

function renderWorkoutDay(dia, data, totalCal) {
    const exercisesHtml = data.exercicios.map(ex => {
        const urlButton = ex.url ? `<a href="#" onclick="openYoutubeLink(event, '${ex.url}')" class="ml-4 flex-shrink-0 bg-violet-600 hover:bg-violet-700 text-white p-3 rounded-full shadow-lg transition duration-300 transform hover:scale-105" title="Ver execução do exercício"><i class="fas fa-play"></i></a>` : '';
        return `
            <div class="p-4 bg-white/10 border border-white/10 rounded-xl hover:bg-white/20 transition duration-200 backdrop-blur-sm flex justify-between items-center">
                <div class="flex-grow">
                    <div class="flex justify-between items-center mb-1">
                        <strong class="text-lg">${ex.nome}</strong>
                        <div class="relative inline-flex items-center">
                            <span class="text-sm font-semibold text-pink-300 bg-pink-900/40 px-3 py-1 rounded-full relative z-10">${ex.calorias} kcal</span>
                        </div>
                    </div>
                    <p class="text-sm text-gray-300 mt-1">Séries: <strong class="text-white">${ex.series}</strong> • Reps: <strong class="text-white">${ex.reps}</strong></p>
                </div>
                ${urlButton}
            </div>`;
    }).join('');

    dayContent.innerHTML = `
        <div class="p-8 rounded-3xl bg-gradient-to-br ${data.cor} backdrop-blur-2xl border border-white/10 mt-8 shadow-2xl transition-opacity duration-300">
            <div class="flex items-center mb-4">
                <span class="text-4xl mr-3">${data.icon || '🏋️'}</span>
                <div>
                    <h2 class="text-3xl font-extrabold">${dia}</h2>
                    <p class="text-gray-300 text-lg">Foco: <span class="text-white font-bold">${data.grupo || ''}</span></p>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-4 mb-6 text-center border-t border-b border-white/10 py-4">
                <div>
                    <p class="text-sm text-gray-400">Duração Estimada</p>
                    <span class="text-2xl font-bold text-cyan-300">${data.tempoMock || '-'}</span>
                </div>
                <div>
                    <p class="text-sm text-gray-400">Calorias (Treino)</p>
                    <span class="text-2xl font-bold text-pink-400">${totalCal} kcal</span>
                </div>
            </div>

            <h3 class="text-xl font-semibold mb-4 text-gray-200">Exercícios <span class="text-base font-normal">(${data.exercicios.length})</span></h3>
            <div class="space-y-4">${exercisesHtml}</div>
        </div>`;
}

/* ---------- selectDay (central) ---------- */
function selectDay(dia) {
    const data = treinoData[dia];

    // reset UI
    dayContent.innerHTML = '';
    totalCalEl.textContent = '0';
    caloriesRing.style.strokeDashoffset = 440;
    audioPlayer.pause(); audioPlayer.removeAttribute('src');
    isPlaying = false; currentPlaylist = []; currentTrackIndex = 0;
    playPauseIcon.className = 'fas fa-play';
    currentSongInfo.innerHTML = '';

    if (!data) {
        dayContent.innerHTML = `<div class="mt-8 p-6 rounded-xl bg-[#1A1B24] text-center">Dia não encontrado.</div>`;
        return;
    }
    if (data.isRest) {
        renderRestDay(data);
        setupAudioPlayerForDay(dia);
        updateRingAndTotal(0);
        appData.currentDay = dia; saveAppData(appData);
        return;
    }

    // setup audio, render treino e atualizar total+BMR
    setupAudioPlayerForDay(dia);
    const totalCal = data.exercicios.reduce((s, ex) => s + (Number(ex.calorias) || 0), 0);
    renderWorkoutDay(dia, data, totalCal);
    updateRingAndTotal(totalCal);
    appData.currentDay = dia; saveAppData(appData);
}

/* ---------- Physical form ---------- */
function renderPhysicalConfig() {
    const cfg = appData.physicalConfig || { weight:112, height:181, age:29, gender:'male', bmr:0 };
    inputWeight.value = cfg.weight;
    inputHeight.value = cfg.height;
    inputAge.value = cfg.age;
    inputGender.value = cfg.gender;
    if (cfg.bmr && Number(cfg.bmr) > 0) {
        bmrValueEl.textContent = `${Number(cfg.bmr).toLocaleString()} kcal/dia`;
        bmrResult.classList.remove('hidden');
    } else {
        bmrValueEl.textContent = `0 kcal/dia`;
        bmrResult.classList.add('hidden');
    }
}

physicalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const w = parseFloat(inputWeight.value);
    const h = parseFloat(inputHeight.value);
    const a = parseInt(inputAge.value, 10);
    const g = inputGender.value;
    if (isNaN(w) || isNaN(h) || isNaN(a) || w<=0 || h<=0 || a<=0) {
        showMessage('Insira valores válidos para Peso, Altura e Idade.', 'error');
        return;
    }
    const bmr = calculateBMR(w,h,a,g);
    appData.physicalConfig = { weight:w, height:h, age:a, gender:g, bmr };
    saveAppData(appData);
    renderPhysicalConfig();
    showMessage(`TMB calculado: ${bmr.toLocaleString()} kcal. Dados salvos!`);
    // se já houver dia selecionado, atualiza o total mostrado
    const currentDay = daySelect.value;
    if (currentDay) {
        const data = treinoData[currentDay];
        const trainingCal = data && data.exercicios ? data.exercicios.reduce((s, ex) => s + (Number(ex.calorias)||0), 0) : 0;
        updateRingAndTotal(trainingCal);
    }
});

/* ---------- Tabs ---------- */
function handleTabSwitch(tabName) {
    const isTraining = tabName === 'training';
    tabTraining.classList.toggle('active', isTraining);
    tabPhysical.classList.toggle('active', !isTraining);
    contentTraining.classList.toggle('hidden', !isTraining);
    contentPhysical.classList.toggle('hidden', isTraining);
    if (!isTraining) renderPhysicalConfig();
}

/* ---------- Init ---------- */
function init() {
    setupAudioPlayer();
    populateDaySelect();

    daySelect.addEventListener('change', (e) => selectDay(e.target.value));
    tabTraining.addEventListener('click', ()=> handleTabSwitch('training'));
    tabPhysical.addEventListener('click', ()=> handleTabSwitch('physical'));

    if (!appData.physicalConfig) appData.physicalConfig = { weight:112, height:181, age:29, gender:'male', bmr:0 };
    renderPhysicalConfig();

    // render initial day
    selectDay(daySelect.value);

    playPauseButton.disabled = false;
}

window.addEventListener('load', init);