function updateStats() {
    document.getElementById('goals').textContent = Math.floor(Math.random() * 30);
    document.getElementById('assists').textContent = Math.floor(Math.random() * 20);
}

function updateSkills() {
    document.getElementById('speed').textContent = Math.floor(Math.random() * 100);
    document.getElementById('dribble').textContent = Math.floor(Math.random() * 100);
    document.getElementById('finishing').textContent = Math.floor(Math.random() * 100);
    document.getElementById('stamina').textContent = Math.floor(Math.random() * 100);
}
