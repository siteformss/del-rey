document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  if (!form) {
    console.error('Formulário não encontrado');
    return;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Campos do formulário
    const name = document.getElementById('name').value.trim();
    const service = document.getElementById('service').value;
    const dateInput = document.getElementById('date').value;
    const message = document.getElementById('message').value.trim();

    const date = dateInput ? dateInput : 'Qualquer data';

    // Mensagem para WhatsApp
    let text =
  'Olá! Meu nome é ' + name + '.\n' +
  'Gostaria de agendar o serviço: ' + service + '.\n' +
  'Data desejada: ' + date + '.\n';

if (message) {
  text += ` \nMensagem adicional: ${message}.`;
}
    

    // Número do WhatsApp
    const waNumber = '5511994793486';

  // URL do WhatsApp
const waURL = ` https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;

// Abre em nova aba
window.open(waURL, '_blank');
  });
});