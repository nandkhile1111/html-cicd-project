<script>
function changeText() {
    const messages = [
        "CI/CD is awesome 🚀",
        "Automation saves time!",
        "Deploy faster with CI/CD 🔥"
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById("message").innerText = messages[randomIndex];
}
</script>
