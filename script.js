document.addEventListener('DOMContentLoaded', function () {
    const fireworksContainer = document.querySelector('.fireworks');

    function createFirework() {
        const firework = document.createElement('span');
        const xPos = Math.random() * window.innerWidth;
        const yPos = Math.random() * window.innerHeight;

        firework.style.left = `${xPos}px`;
        firework.style.top = `${yPos}px`;

        fireworksContainer.appendChild(firework);

        // 在动画结束后移除烟花元素
        setTimeout(() => {
            firework.remove();
        }, 1500);
    }

    // 每隔100毫秒创建一个烟花
    setInterval(createFirework, 100);

    // 获取小窗口和按钮
    const popup = document.querySelector('.popup');
    const acknowledgeButton = document.getElementById('acknowledgeButton');
    const imageContainer = document.getElementById('imageContainer');

    // 按钮点击事件
    acknowledgeButton.addEventListener('click', function() {
        // 隐藏小窗口
        popup.style.display = 'none';

        // 创建并显示图片
        const img = document.createElement('img');
        img.src = 'images/celebration-image.png'; // 替换为你想要显示的图片路径
        img.alt = '庆祝图片';
        img.style.width = '300px'; // 设置图片大小
        img.style.height = 'auto';
        imageContainer.appendChild(img); // 将图片添加到页面上
    });
});
