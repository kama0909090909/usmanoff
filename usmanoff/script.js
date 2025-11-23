
function createSnowflake() {
    const snow = document.createElement('div');
    snow.classList.add('snowflake');
    snow.innerHTML = '❄';
    snow.style.left = Math.random() * 100 + 'vw';
    snow.style.animationDuration = 3 + Math.random() * 5 + 's';
    snow.style.opacity = Math.random();
    snow.style.fontSize = 12 + Math.random() * 20 + 'px';
    document.body.appendChild(snow);
    setTimeout(() => snow.remove(), 8000);
}
setInterval(createSnowflake, 150);


const animatedItems = document.querySelectorAll('.animated-item');
function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.9;
    animatedItems.forEach(item => {
        const boxTop = item.getBoundingClientRect().top;
        if (boxTop < triggerBottom) item.classList.add('show');
    });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();


function createOrnament() {
    const ornament = document.createElement('div');
    ornament.classList.add('ornament');
    ornament.innerHTML = '🎁';
    ornament.style.left = Math.random() * 100 + 'vw';
    ornament.style.animationDuration = 6 + Math.random() * 6 + 's';
    ornament.style.fontSize = 20 + Math.random() * 30 + 'px';
    document.body.appendChild(ornament);
    setTimeout(() => ornament.remove(), 12000);
}
setInterval(createOrnament, 4000);

function createChat() {
    const chat = document.createElement('div');
    chat.id = 'chat-box';
    chat.innerHTML = `
    <div id="chat-header">Поддержка 🎅</div>
    <div id="chat-messages" style="display:none;"></div>
    <div id="chat-input-area" style="display:none; padding: 10px; display:flex; gap:4px;">
      <input type="text" id="chat-input" placeholder="Напишите сообщение...">
      <button id="chat-send">Отправить</button>
    </div>
  `;
    document.body.appendChild(chat);

    const header = chat.querySelector('#chat-header');
    const messages = chat.querySelector('#chat-messages');
    const inputArea = chat.querySelector('#chat-input-area');
    const input = chat.querySelector('#chat-input');
    const sendBtn = chat.querySelector('#chat-send');


    header.addEventListener('click', () => {
        const isOpen = messages.style.display === 'flex';
        messages.style.display = isOpen ? 'none' : 'flex';
        inputArea.style.display = isOpen ? 'none' : 'flex';
        chat.style.maxHeight = isOpen ? '40px' : '400px';
    });

    sendBtn.addEventListener('click', () => {
        if (input.value.trim() !== '') {
            const msg = document.createElement('div');
            msg.classList.add('user-msg');
            msg.textContent = input.value;
            messages.appendChild(msg);
            input.value = '';
            messages.scrollTop = messages.scrollHeight;

            setTimeout(() => {
                const supportMsg = document.createElement('div');
                supportMsg.classList.add('support-msg');
                supportMsg.textContent = 'Поддержка: Мы получили ваше сообщение и скоро ответим! 🎄';
                messages.appendChild(supportMsg);
                messages.scrollTop = messages.scrollHeight;
            }, 1500);
        }
    });
}

const askBtn = document.querySelector('.ask-btn');
askBtn.addEventListener('click', () => {
    if (!document.querySelector('#chat-box')) createChat();
});


document.querySelectorAll('.card img').forEach(img => {
    img.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        const imgEl = document.createElement('img');
        imgEl.src = img.src;
        lightbox.appendChild(imgEl);
        document.body.appendChild(lightbox);

        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });
    });
});
