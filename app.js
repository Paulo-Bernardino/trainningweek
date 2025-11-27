const workouts = {
    "Segunda-Feira": {
        calories: 430,
        exercises: [
            { name: "Agachamento Livre", series: 4, reps: "8–12", kcal: 7 },
            { name: "Leg Press 45°", series: 4, reps: "10–12", kcal: 6 },
            { name: "Cadeira Extensora (Biset)", series: 3, reps: "12–15", kcal: 5 },
            { name: "Mesa Flexora", series: 4, reps: "10–12", kcal: 5 },
            { name: "Panturrilha em Pé", series: 5, reps: "15–20", kcal: 4 },
        ]
    },
    "Terça-Feira": {
        calories: 460,
        exercises: [
            { name: "Puxada Aberta", series: 4, reps: "8–12", kcal: 6 },
            { name: "Remada Curvada", series: 4, reps: "8–10", kcal: 7 },
            { name: "Remada Baixa", series: 4, reps: "10–12", kcal: 6 },
            { name: "Elevação Lateral", series: 3, reps: "12–15", kcal: 5 },
            { name: "Desenvolvimento", series: 4, reps: "8–12", kcal: 7 },
            { name: "Remada Cavalinho (Biset)", series: 3, reps: "10–12", kcal: 7 },
        ]
    },
    "Quarta-Feira": {
        calories: 410,
        exercises: [
            { name: "Supino Reto", series: 4, reps: "8–12", kcal: 6 },
            { name: "Supino Inclinado", series: 4, reps: "8–10", kcal: 6 },
            { name: "Crossover (Triset)", series: 3, reps: "12–15", kcal: 5 },
            { name: "Crucifixo Máquina (Triset)", series: 3, reps: "12–15", kcal: 4 },
            { name: "Flexão (Triset)", series: 2, reps: "Até falhar", kcal: 8 },
        ]
    },
    "Quinta-Feira": { rest: true },
    "Sexta-Feira": {
        calories: 390,
        exercises: [
            { name: "Tríceps Polia", series: 4, reps: "10–12", kcal: 5 },
            { name: "Tríceps Testa (Biset)", series: 3, reps: "10–12", kcal: 6 },
            { name: "Rosca Direta", series: 4, reps: "8–12", kcal: 6 },
            { name: "Rosca Alternada", series: 3, reps: "10–12", kcal: 5 },
            { name: "Rosca Martelo (Triset)", series: 3, reps: "12–15", kcal: 7 },
        ]
    },
    "Sábado": {
        calories: 520,
        exercises: [
            { name: "Esteira (20 min)", series: "-", reps: "-", kcal: 8 },
            { name: "Agachamento Hack", series: 4, reps: "8–12", kcal: 7 },
            { name: "Avanço", series: 3, reps: "10–12", kcal: 6 },
            { name: "Elevação Lateral (Triset)", series: 3, reps: "12–15", kcal: 5 },
            { name: "Desenvolvimento (Triset)", series: 3, reps: "10–12", kcal: 7 },
            { name: "Elevação Frontal (Triset)", series: 3, reps: "12–15", kcal: 6 },
        ]
    },
    "Domingo": { rest: true }
};

const select = document.getElementById("daySelect");
const container = document.getElementById("workoutContainer");
const ring = document.getElementById("calorieRing");
const kcalText = document.getElementById("kcalText");

// Preenche o select
Object.keys(workouts).forEach(day => {
    select.innerHTML += `<option value="${day}">${day}</option>`;
});

// Render inicial
renderWorkout(select.value);

// Muda ao escolher outro dia
select.addEventListener("change", () => {
    renderWorkout(select.value);
});

// Render
function renderWorkout(day) {
    const data = workouts[day];

    if (data.rest) {
        container.innerHTML = `
            <div class="text-center text-gray-300 text-lg mt-6">
                🛌 Dia de descanso
            </div>
        `;
        animateRing(0);
        kcalText.textContent = "0 kcal";
        return;
    }

    animateRing(data.calories);
    kcalText.textContent = `${data.calories} kcal`;

    container.innerHTML = `
        ${data.exercises
            .map(ex => `
                <div class="card-3d bg-gradient-to-br from-[#16161A] to-[#0F0F12] border border-white/10 p-5 rounded-2xl">
                    <h3 class="text-xl font-semibold mb-2 text-white">${ex.name}</h3>
                    <div class="flex justify-between text-gray-300">
                        <span>Séries: <b>${ex.series}</b></span>
                        <span>Reps: <b>${ex.reps}</b></span>
                        <span>${ex.kcal} kcal/min</span>
                    </div>
                </div>
            `)
            .join("")}
    `;
}

// Animação do anel
function animateRing(calories) {
    const percentage = Math.min(calories / 600, 1);
    const total = 326;
    ring.style.strokeDashoffset = total - total * percentage;
}
