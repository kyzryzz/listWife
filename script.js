const images = [
    { src: 'https://files.catbox.moe/441v93.jpg', name: 'Maria Mikhailovna Kujou', wifeNumber: 'paling utama' },
    { src: 'https://files.catbox.moe/63zvmu.jpg', name: 'Shiina Mahiru', wifeNumber: 2 },
    { src: 'https://files.catbox.moe/cdqa1v.jpg', name: 'Alisa Mikhailovna Kujou', wifeNumber: 3 },
];

const gallery = document.querySelector('.gallery');

images.forEach(image => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.innerHTML = `
        <img src="${image.src}" alt="${image.name}">
        <div class="caption">${image.name}</div>
        <div class="body-text">Istri Kyz yang ke-${image.wifeNumber}</div>
    `;
    gallery.appendChild(item);
});

const body = document.body;

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const changeBackgroundColor = () => {
    body.style.backgroundColor = getRandomColor();
};

setInterval(changeBackgroundColor, 5000);
body.addEventListener('click', changeBackgroundColor);

const createSnowflake = () => {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '٭';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.opacity = Math.random();
    body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
};

setInterval(createSnowflake, 200);

const audio = new Audio('./Kyzryzz.mp3');
addEventListener('DOMContentLoaded', () => {
    Swal.fire({
        title: '👋 Halo Wibu!',
        text: "Welcome to Kyzryzz's Wife Photos Collection.",
        icon: 'success',
        confirmButtonText: 'SOK ASIK'
    }).then(async (result) => {
        if (result.isConfirmed) {
            await audio.play();
            var elem = document.documentElement;
            var requestFullScreen = elem.requestFullscreen || elem.mozRequestFullScreen || elem.webkitRequestFullscreen || elem.msRequestFullscreen;
            if (requestFullScreen) {
                requestFullScreen.call(elem);
            }
        }
    });
});
