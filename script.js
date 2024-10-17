// script.js
document.getElementById('satisfaction-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const formData = new FormData(this);
    const satisfaction = formData.get('satisfaction');

    fetch('https://script.google.com/macros/s/AKfycbzmclcoNLwyvdtzqF7i00h5rdMt5Qib1ZxmJIlbhdRYSbLuuXSi5kvo_dmI0TkTQi-T/exec', {
        method: 'POST',
        body: JSON.stringify({ satisfaction: satisfaction }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        alert('Resposta enviada com sucesso!');
        this.reset(); // Limpa o formulário
    })
    .catch(error => {
        console.error('Erro ao enviar a resposta:', error);
        alert('Houve um erro ao enviar sua resposta.');
    });
});