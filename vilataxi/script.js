document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os botões de download da página
    const downloadBtns = document.querySelectorAll('.btn-store-install, .top-bar-btn');
    const apkUrl = '/vilataxi/apk/vilataxi.apk';

    downloadBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();

            // Evita múltiplos cliques se já estiver baixando
            if (btn.classList.contains('is-downloading')) return;

            btn.classList.add('is-downloading');

            const icon = btn.querySelector('i');
            const textSpan = btn.querySelector('span') || btn;

            const originalText = textSpan.textContent;
            const originalIconClass = icon ? icon.className : '';

            let progress = 0;

            if (icon) {
                icon.className = 'ri-loader-4-line ri-spin';
            }

            // Simulação de progresso fluido
            const interval = setInterval(() => {
                progress += Math.floor(Math.random() * 12) + 5; // incrementa de forma dinâmica

                if (progress >= 100) {
                    progress = 100;
                    clearInterval(interval);

                    btn.style.setProperty('--progress', '100%');
                    if (textSpan.tagName === 'SPAN') {
                        textSpan.textContent = 'Download Concluído!';
                    }
                    if (icon) {
                        icon.className = 'ri-checkbox-circle-line';
                    }

                    // Inicia o download automático do APK
                    const a = document.createElement('a');
                    a.href = apkUrl;
                    a.download = 'vilataxi.apk';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);

                    // Reseta o estado do botão após 3.5 segundos
                    setTimeout(() => {
                        btn.classList.remove('is-downloading');
                        btn.style.setProperty('--progress', '0%');
                        if (textSpan.tagName === 'SPAN') {
                            textSpan.textContent = originalText;
                        }
                        if (icon) {
                            icon.className = originalIconClass;
                        }
                    }, 3500);

                } else {
                    btn.style.setProperty('--progress', `${progress}%`);
                    if (textSpan.tagName === 'SPAN') {
                        textSpan.textContent = `Baixando... ${progress}%`;
                    }
                }
            }, 120);
        });
    });
});

