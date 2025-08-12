document.addEventListener("DOMContentLoaded", function () {
    loadDashboardData();
    setupTaskForm();
});

// Load data from JSON
function loadDashboardData() {
    const data = {
        dashboardCards: [
            {
                title: "Unresolved",
                number: "60",
                active: false,
            },
            {
                title: "Overdue",
                number: "16",
                active: true,
            },
            {
                title: "Open",
                number: "43",
                active: false,
            },
            {
                title: "On hold",
                number: "64",
                active: false,
            },
        ],
        tasks: [
            {
                title: "Finish ticket update",
                badge: "URGENT",
                badgeClass: "urgent",
                completed: false,
            },
            {
                title: "Create new ticket example",
                badge: "NEW",
                badgeClass: "new",
                completed: false,
            },
            {
                title: "Update ticket report",
                badge: "DEFAULT",
                badgeClass: "default",
                completed: true,
            },
            {
                title: "Review customer feedback",
                badge: "NEW",
                badgeClass: "new",
                completed: false,
            },
        ],
        stats: [
            {
                label: "Resolved",
                value: "449",
            },
            {
                label: "Received",
                value: "426",
            },
            {
                label: "Average first response time",
                value: "33m",
            },
            {
                label: "Average response time",
                value: "3h 8m",
            },
            {
                label: "Resolution within SLA",
                value: "94%",
            },
        ],
    };

    populateDashboardCards(data.dashboardCards);
    populateTaskList(data.tasks);
    populateStats(data.stats);
}

// Create cards using forEach
function populateDashboardCards(cards) {
    const container = document.querySelector(".dashboard-cards");
    container.innerHTML = "";

    cards.forEach((card) => {
        const cardElement = document.createElement("div");
        cardElement.className = `dashboard-card ${card.active ? "active" : ""}`;

        cardElement.innerHTML = `
                    <span class="card-title">${card.title}</span>
                    <span class="card-number">${card.number}</span>
                `;

        container.appendChild(cardElement);
    });
}

// Create tasks using for loop
function populateTaskList(tasks) {
    const taskList = document.querySelector(".task-list");
    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const listItem = document.createElement("li");

        listItem.innerHTML = `
                    <span class="task-circle ${task.completed ? "checked" : ""
            }"></span>
                    <span class="task-title">${task.title}</span>
                    <span class="badge ${task.badgeClass}">${task.badge}</span>
                `;

        taskList.appendChild(listItem);
    }
}

// Create stats using forEach
function populateStats(stats) {
    const statsContainer = document.querySelector(".trends-stats");
    statsContainer.innerHTML = "";

    stats.forEach((stat) => {
        const statElement = document.createElement("div");
        statElement.className = "stat";

        statElement.innerHTML = `
                    <span class="label">${stat.label}</span>
                    <span class="value">${stat.value}</span>
                `;

        statsContainer.appendChild(statElement);
    });
}

// Handle form submission
function setupTaskForm() {
    const form = document.querySelector("#taskModal form");
    const taskList = document.querySelector(".task-list");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const title = document.getElementById("taskTitle").value;
        const priority = document.getElementById("taskPriority").value;

        if (title && priority) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                        <span class="task-circle"></span>
                        <span class="task-title">${title}</span>
                        <span class="badge ${priority}">${priority.toUpperCase()}</span>
                    `;

            taskList.appendChild(listItem);
            form.reset();
            const modal = bootstrap.Modal.getInstance(
                document.getElementById("taskModal")
            );
            modal.hide();
        }
    });
}
