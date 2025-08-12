// JSON data
const dashboardData = {
    cards: [
        {
            title: "Total Users",
            value: "2,847",
            active: false,
        },
        {
            title: "Revenue",
            value: "$45.2K",
            active: false,
        },
    ],
};

// Load cards from JSON
function loadCards() {
    const cardsContainer = document.getElementById("dashboard-cards");

    dashboardData.cards.forEach((card) => {
        const cardElement = document.createElement("div");
        cardElement.className = `dashboard-card json-card ${card.active ? "active" : ""
            }`;
        cardElement.innerHTML = `
                    <span class="card-title">${card.title}</span>
                    <span class="card-number">${card.value}</span>
                `;
        cardsContainer.appendChild(cardElement);
    });
}

// Add JSON task
function addJsonTasks() {
    const taskList = document.getElementById("task-list");
    const jsonTasks = [
        {
            title: "Review security protocols",
            priority: "urgent",
            completed: false,
        },
        { title: "Update documentation", priority: "new", completed: false },
        { title: "Team meeting preparation", priority: "default", completed: true },
    ];

    jsonTasks.forEach((task) => {
        const li = document.createElement("li");
        const badgeClass =
            task.priority === "urgent"
                ? "urgent"
                : task.priority === "new"
                    ? "new"
                    : "default";
        const circleClass = task.completed ? "task-circle checked" : "task-circle";

        li.innerHTML = `
                    <span class="${circleClass}"></span>
                    <span class="task-title">${task.title}</span>
                    <span class="badge ${badgeClass}">${task.priority.toUpperCase()}</span>
                `;
        taskList.appendChild(li);
    });
}

// Load on page ready
document.addEventListener("DOMContentLoaded", function () {
    loadCards();
    addJsonTasks();
});
