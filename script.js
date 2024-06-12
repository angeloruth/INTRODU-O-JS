function updateStats() {
    // Apenas um exemplo simples de atualização de estatísticas
    document.getElementById('goals').textContent = Math.floor(Math.random() * 30);
    document.getElementById('assists').textContent = Math.floor(Math.random() * 20);
}
