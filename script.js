function changeText() {
    const messages = [
        "CI/CD is awesome 🚀",
        "Automation saves time!",
        "Deploy faster with CI/CD 🔥",
        "Build → Test → Deploy 💡",
        "Continuous Integration rocks!",
        "Ship code with confidence 😎",
        "DevOps makes life easier!",
        "Zero downtime deployments 💪",
        "Push → Build → Deploy ⚡",
        "CI/CD = Speed + Quality ✅"
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById("message").innerText = messages[randomIndex];
}
