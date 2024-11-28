// Chart.js Example for Data Visualization
document.addEventListener("DOMContentLoaded", function () {
    const ctx1 = document.getElementById("statisticsChart").getContext("2d");
    const statisticsChart = new Chart(ctx1, {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            datasets: [{
                label: "Users",
                data: [30, 50, 70, 40, 60, 80, 100],
                backgroundColor: "rgba(93, 212, 212, 0.2)",
                borderColor: "#5dd4d4",
                borderWidth: 2,
            }]
        },
        options: {
            responsive: true,
        }
    });

    const ctx2 = document.getElementById("activityChart").getContext("2d");
    const activityChart = new Chart(ctx2, {
        type: "doughnut",
        data: {
            labels: ["Completed", "Pending", "Failed"],
            datasets: [{
                label: "Activity",
                data: [67, 20, 13],
                backgroundColor: ["#5dd4d4", "#af6e4d", "#79443b"],
            }]
        },
        options: {
            responsive: true,
        }
    });
});
