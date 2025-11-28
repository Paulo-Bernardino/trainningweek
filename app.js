/* =========================
    TREINO MOCKADO PREMIUM
    ========================= */
const exerciciosFixos = [
    { nome: "Abdominal na Máquina", series: 4, reps: 20, calorias: 46, url: "https://youtube.com/shorts/MkMfujLgb-M?si=Y_CLGWoV8LgHYWhK" },
    { nome: "Prancha", series: 4, reps: "1 minuto", calorias: 40, url: "https://youtube.com/shorts/UwCFLBJv4ek?si=rGKiqX2I3B5yCzKA" },
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
            { nome: "Music Training!", url: "music/segunda.mp3" }
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
            { nome: "Music Training!", url: "music/terça.mp3" }
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
            { nome: "Music Training!", url: "music/quinta.mp3" }
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
            { nome: "Music Training!", url: "music/sexta.mp3" }
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
            { nome: "Music Training!", url: "music/sabado.mp3" }
        ]
    },

    "Domingo": { 
        isRest: true,
        icon: "🧘",
        motivo: "Alongamento, relaxamento e recuperação."
    }
};

const daySelect = document.getElementById("daySelect");
const dayContent = document.getElementById("dayContent");
const caloriesRing = document.getElementById("caloriesRing");
const calValue = document.getElementById("calValue");

/* =========================
    NOVAS VARIÁVEIS PARA O PLAYER DE MÚSICA
    ========================= */
const audioPlayer = document.getElementById("treinoAudioPlayer");
const playPauseButton = document.getElementById("playPauseButton");
const playPauseIcon = document.getElementById("playPauseIcon");
const currentSongInfo = document.getElementById("currentSongInfo");

let currentPlaylist = [];
let currentTrackIndex = 0;
let isPlaying = false; 

/* =========================
    FUNÇÃO PARA ABRIR O YOUTUBE APP
    ========================= */
function openYoutubeLink(e, originalUrl) {
    e.preventDefault(); 
    
    // Expressão regular para capturar o ID do vídeo
    const videoIdMatch = originalUrl.match(/(?:youtube\.com\/(?:shorts\/|watch\?v=)|youtu\.be\/)([^&?]+)/);
    
    if (videoIdMatch && videoIdMatch[1]) {
        const id = videoIdMatch[1];
        const appUrl = `vnd.youtube:${id}`;
        
        window.location.href = appUrl;

        setTimeout(() => {
            window.open(originalUrl, '_blank'); 
        }, 300); 
    } else {
        window.open(originalUrl, '_blank'); 
    }
}


/* PREENCHE SELECT */
Object.keys(treinoData).forEach(dia => {
    daySelect.innerHTML += `<option value="${dia}">${dia}</option>`;
});

daySelect.addEventListener("change", (e) => {
    selectDay(e.target.value);
});

/* =========================
    FUNÇÕES DE PLAYLIST
    ========================= */

// Tenta tocar a música atual
function playCurrentTrack() {
    if (currentPlaylist.length === 0) return;

    const track = currentPlaylist[currentTrackIndex];
    audioPlayer.src = track.url;
    currentSongInfo.innerHTML = `
        <span class="text-xs text-gray-400">Tocando ${currentTrackIndex + 1}/${currentPlaylist.length}:</span>
        <div class="font-semibold text-white">${track.nome}</div>
    `;

    audioPlayer.load(); 
    
    const playPromise = audioPlayer.play();
    if (playPromise !== undefined) {
        playPromise.then(_ => {
            isPlaying = true;
            playPauseIcon.className = "fas fa-pause";
        })
        .catch(error => {
            // Play bloqueado: Apenas atualiza o ícone para 'Play' para que o usuário clique
            isPlaying = false;
            playPauseIcon.className = "fas fa-play";
        });
    }
}

// Passa para a próxima música e **repete a playlist** se for o fim
function playNextTrack() {
    if (currentPlaylist.length === 0) return;

    currentTrackIndex++;
    
    // Repete: Se o índice for maior ou igual ao tamanho da lista, volta para o início (0)
    if (currentTrackIndex >= currentPlaylist.length) {
        currentTrackIndex = 0;
    }
    
    playCurrentTrack();
}

// Configura os eventos de áudio (clique e fim de música)
function setupAudioPlayer() {
    // 1. EVENTO DE FIM DE MÚSICA: Toca a próxima
    // Isso garante que a playlist toque e repita sem parar.
    audioPlayer.addEventListener('ended', playNextTrack);

    // 2. CONTROLE MANUAL (Botão Play/Pause)
    playPauseButton.addEventListener('click', () => {
        if (currentPlaylist.length === 0 || playPauseButton.disabled) return;

        if (isPlaying) {
            audioPlayer.pause();
            isPlaying = false;
            playPauseIcon.className = "fas fa-play";
        } else {
            // Se já tiver uma fonte e estiver pausado, apenas continua
            if (audioPlayer.src && audioPlayer.paused) {
                 audioPlayer.play();
                 isPlaying = true;
                 playPauseIcon.className = "fas fa-pause";
            } else {
                 // Caso contrário, inicia a playlist a partir do zero
                 playCurrentTrack();
            }
        }
    });
}

// Atualiza a playlist quando o dia muda
function setupAudioPlayerForDay(dia) {
    const data = treinoData[dia];
    
    // Para a música atual e reseta o estado
    audioPlayer.pause();
    isPlaying = false;
    playPauseIcon.className = "fas fa-play";
    
    // Se for dia de descanso ou não tiver playlist
    if (data.isRest || !data.playlist || data.playlist.length === 0) {
        currentPlaylist = [];
        currentSongInfo.innerHTML = '<span class="text-gray-400">Sem música neste dia.</span>';
        playPauseButton.disabled = true;
        audioPlayer.removeAttribute('src'); // Limpa a fonte do player
        return;
    }

    // Configura nova playlist e o primeiro track
    playPauseButton.disabled = false;
    currentPlaylist = data.playlist;
    currentTrackIndex = 0;
    
    // Define a fonte da primeira música, mas não toca automaticamente
    audioPlayer.src = currentPlaylist[0].url;
    currentSongInfo.innerHTML = `
        <span class="text-xs text-gray-400">Pronta ${currentTrackIndex + 1}/${currentPlaylist.length}:</span>
        <div class="font-semibold text-white">${currentPlaylist[0].nome}</div>
    `;
}


/* =========================
    FUNÇÃO PRINCIPAL
    ========================= */
function selectDay(dia) {
    const data = treinoData[dia];
    
    dayContent.style.opacity = 0; // Inicia a transição de saída

    setTimeout(() => {
        if (data.isRest) {
            updateRing(0, "white", "0"); 
            renderRestDay(data);
        } else {
            const totalCal = data.exercicios.reduce((acc, ex) => acc + ex.calorias, 0);
            updateRing(totalCal, "#A855F7", 600); 
            renderWorkoutDay(dia, data, totalCal);
        }
        dayContent.style.opacity = 1; // Finaliza a transição de entrada
        
        // NOVO: Chama a função para carregar a playlist do dia
        setupAudioPlayerForDay(dia); 
    }, 200); 
}

/* Renderiza o dia de Descanso */
function renderRestDay(data) {
    // ... (função renderRestDay inalterada) ...
    dayContent.innerHTML = `
        <div class="mt-8 p-10 rounded-3xl bg-[#1A1B24] border border-white/10 card-3d text-center transition-opacity duration-300">
            <p class="text-6xl mb-4">${data.icon || '😴'}</p>
            <h2 class="text-3xl font-extrabold mb-2 text-violet-400">Dia de Descanso</h2>
            <p class="text-gray-400 text-lg">${data.motivo || 'Recuperação é parte essencial do progresso!'}</p>
        </div>
    `;
}

/* Renderiza o dia de Treino */
function renderWorkoutDay(dia, data, totalCal) {
    // ... (função renderWorkoutDay inalterada) ...
    dayContent.innerHTML = `
        <div class="p-8 rounded-3xl bg-gradient-to-br ${data.cor} backdrop-blur-2xl border border-white/10 mt-8 shadow-2xl card-3d transition-opacity duration-300">

            <div class="flex items-center mb-4">
                <span class="text-4xl mr-3">${data.icon || '🏋️'}</span>
                <div>
                    <h2 class="text-3xl font-extrabold">${dia}</h2>
                    <p class="text-gray-300 text-lg">Foco: <span class="text-white font-bold">${data.grupo}</span></p>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-4 mb-6 text-center border-t border-b border-white/10 py-4">
                <div>
                    <p class="text-sm text-gray-400">Duração Estimada</p>
                    <span class="text-2xl font-bold text-cyan-300">${data.tempoMock}</span>
                </div>
                <div>
                    <p class="text-sm text-gray-400">Calorias (Estimativa)</p>
                    <span class="text-2xl font-bold text-pink-400">${totalCal} kcal</span>
                </div>
            </div>

            <h3 class="text-xl font-semibold mb-4 text-gray-200">Exercícios <span class="text-base font-normal">(${data.exercicios.length})</span></h3>
            
            <div class="space-y-4">
                ${data.exercicios.map(ex => `
                    <div class="p-4 bg-white/10 border border-white/10 rounded-xl hover:bg-white/20 transition duration-200 backdrop-blur-sm flex justify-between items-center">
                        <div class="flex-grow">
                            <div class="flex justify-between items-center mb-1">
                                <strong class="text-lg">${ex.nome}</strong>
                                <div class="relative inline-flex items-center">
                                    <span class="text-sm font-semibold text-pink-300 bg-pink-900/40 px-3 py-1 rounded-full relative z-10 calorie-value">
                                        ${ex.calorias} kcal
                                    </span>
                                </div>
                            </div>
                            <p class="text-sm text-gray-300 mt-1">
                                Séries: <strong class="text-white">${ex.series}</strong> • Reps: <strong class="text-white">${ex.reps}</strong>
                            </p>
                        </div>
                        ${ex.url ? `<a href="#" onclick="openYoutubeLink(event, '${ex.url}')" class="ml-4 flex-shrink-0 bg-violet-600 hover:bg-violet-700 text-white p-3 rounded-full shadow-lg transition duration-300 transform hover:scale-105" title="Ver execução do exercício"><i class="fas fa-play"></i></a>` : ''}
                    </div>
                `).join("")}
            </div>

        </div>
    `;
}


/* =========================
    APPLE WATCH RING ANIMATION
    ========================= */
function updateRing(calories, color = "#A855F7", maxGoal = 600) {
    const max = maxGoal; 
    const percent = Math.min(calories / max, 1);
    const circumference = 440;

    const offset = circumference - circumference * percent;

    caloriesRing.style.strokeDashoffset = offset;
    caloriesRing.style.stroke = color;

    // Animação do valor de calorias (apenas no número)
    const currentCal = parseInt(calValue.textContent);
    animateValue(calValue, currentCal, calories, 1000); 
}

// Função de animação simples (melhora o visual do anel)
function animateValue(obj, start, end, duration) {
    let startTime = null;

    const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        obj.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };

    window.requestAnimationFrame(step);
}

/* Dia padrão - Inicia na Segunda-feira ou no dia atual, se for o caso */
// Obtém o dia atual da semana
const daysOfWeek = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
const today = daysOfWeek[new Date().getDay()];
daySelect.value = today; // Define o select para o dia atual

selectDay(daySelect.value || "Segunda");

// Inicializa o player de áudio e configura os eventos de clique e "fim de música"
setupAudioPlayer();