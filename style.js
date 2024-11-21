function updateClock() {
    const clockElement = document.getElementById('clock');

    // Obtém a hora no fuso horário de Brasília
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

    const formattedTime = formatter.format(now);

    clockElement.textContent = formattedTime;
}

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);

// Exibe a hora imediatamente ao carregar a página
updateClock();
