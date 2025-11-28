const workouts = {
    "Segunda-Feira": {
        calories: 520,
        exercises: [
            { name: "Incline Barbell Bench Presses", series: 4, reps: "10", kcal: 7 },
            { name: "Dumbbell Bench Presses", series: 4, reps: "10", kcal: 7 },
            { name: "Dumbbell Chest Flyes", series: 4, reps: "10", kcal: 6 },
            { name: "Incline Dumbbell Flyes", series: 4, reps: "10", kcal: 6 },
            { name: "Dips", series: 3, reps: "Falha", kcal: 7 },
            { name: "Cable Flyes", series: 3, reps: "12", kcal: 5 },
            { name: "Standing Calf Raises", series: 5, reps: "20", kcal: 4 },
            { name: "Seated Calf Raises", series: 5, reps: "25", kcal: 4 }
        ]
    },

    "Terça-Feira": {
        calories: 560,
        exercises: [
            { name: "Levantamento Terra", series: 3, reps: "10", kcal: 8 },
            { name: "Remada Curvada com Barra", series: 4, reps: "12", kcal: 7 },
            { name: "Remada com Barra T", series: 4, reps: "10", kcal: 7 },
            { name: "Barra Fixa Pegada Aberta", series: 4, reps: "10", kcal: 7 },
            { name: "Puxada Polia Alta Pegada Larga", series: 4, reps: "12", kcal: 6 },
            { name: "Remada Sentada no Cabo", series: 4, reps: "12", kcal: 6 },
            { name: "Bom Dia", series: 3, reps: "12", kcal: 5 }
        ]
    },

    "Quarta-Feira": { rest: true },

    "Quinta-Feira": {
        calories: 600,
        exercises: [
            { name: "Agachamento Barra", series: 4, reps: "8–15", kcal: 8 },
            { name: "Agachamento Frontal", series: 4, reps: "6–10", kcal: 8 },
            { name: "Agachamento Hack", series: 4, reps: "8–12", kcal: 7 },
            { name: "Leg Press", series: 4, reps: "8–10", kcal: 7 },
            { name: "Extensão de Pernas", series: 4, reps: "8–10", kcal: 5 },
            { name: "Flexão Isquiotibiais Deitado", series: 4, reps: "8–12", kcal: 5 }
        ]
    },

    "Sexta-Feira": {
        calories: 510,
        exercises: [
            { name: "Rosca Direta com Barra", series: 4, reps: "6–12", kcal: 6 },
            { name: "Rosca Alternada com Halteres", series: 3, reps: "8–10", kcal: 5 },
            { name: "Cachos de Pregador", series: 3, reps: "15", kcal: 5 },
            { name: "Rosca de Concentração", series: 4, reps: "8–10", kcal: 5 },
            { name: "Extensão Tríceps Unilateral", series: 4, reps: "15", kcal: 6 },
            { name: "Esmagador de Crânios", series: 4, reps: "10–12", kcal: 7 },
            { name: "Panturrilha em Pé", series: 5, reps: "15–20", kcal: 4 },
            { name: "Panturrilha Sentado", series: 5, reps: "20–25", kcal: 4 }
        ]
    },

    "Sábado": {
        calories: 530,
        exercises: [
            { name: "Desenvolvimento de Ombros", series: 4, reps: "6–10", kcal: 7 },
            { name: "Elevação Lateral Halteres", series: 4, reps: "10", kcal: 5 },
            { name: "Arnold Press", series: 3, reps: "8–10", kcal: 7 },
            { name: "Posterior Inclinado", series: 4, reps: "10", kcal: 5 },
            { name: "Peck Deck Inverso", series: 4, reps: "12–15", kcal: 5 },
            { name: "Encolhimento com Barra", series: 4, reps: "10–20", kcal: 6 },
            { name: "Encolhimento com Halteres", series: 3, reps: "12–20", kcal: 6 }
        ]
    },

    "Domingo": { rest: true }
};


// ELEMENTOS
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

// Troca o treino ao mudar o dia
select.addEventListener("change", () => {
    renderWorkout(select.value);
});

// FUNÇÃO DE RENDERIZAÇÃO
function renderWorkout(day) {
    const data = workouts[day];

    // Dia de descanso
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
                <div class="card-3d bg-gradient-to-br from-[#16161A] to-[#0F0F12] border border-white/10 p-5 rounded-2xl mb-4">
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

// ANIMAÇÃO DO ANEL
function animateRing(calories) {
    const percentage = Math.min(calories / 600, 1);
    const total = 326;
    ring.style.strokeDashoffset = total - total * percentage;
}
