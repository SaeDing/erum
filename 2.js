document.addEventListener('DOMContentLoaded', function() {
    updateClock();
    setInterval(updateClock, 60000); // Update every minute
});

function scrollToTop() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, scrollTop - scrollTop / 8);
    }
}

function copyToClipboard(element) {
    const text = element.innerText;
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast('주소가 클립보드에 복사되었습니다.');
}

function showToast(message) {
    // 기존 토스트 메시지가 있으면 제거
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    // 애니메이션으로 토스트 메시지를 보여줌
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    // 3초 후에 토스트 메시지를 숨기고 제거
    setTimeout(() => {
        toast.classList.remove('show');
        toast.addEventListener('transitionend', () => {
            toast.remove();
        });
    }, 3000);
}

function showDormDetails(dorm) {
    const detailsContainer = document.getElementById('details-container');
    let detailsContent = '';

    switch (dorm) {
        case 'su':
            detailsContent = `
                <h2>수 기숙사</h2>
                <img src="img/수파바.jpg" alt="Su Dormitory" style="width: 100%; height: auto;">
                <p>수 기숙사 관련 설명...</p>
            `;
            break;
        case 'ellim':
            detailsContent = `
                <h2>엘림 기숙사</h2>
                <img src="img/엘파바.jpg" alt="Ellim Dormitory" style="width: 100%; height: auto;">
                <p>엘림 기숙사 관련 설명...</p>
            `;
            break;
        case 'green':
            detailsContent = `
                <h2>그린빌 기숙사</h2>
                <img src="img/그파바.jpg" alt="Green Dormitory" style="width: 100%; height: auto;">
                <p>그린빌 기숙사 관련 설명...</p>
                <p>심야전기 사용</p>
            `;
            break;
        case 'sense':
            detailsContent = `
                <h2>센스 기숙사</h2>
                <img src="img/센파바.jpg" alt="Sense Dormitory" style="width: 100%; height: auto;">
                <p>센스 기숙사 관련 설명...</p>
            `;
            break;
        case 'campus':
            detailsContent = `
                <h2>캠퍼스 기숙사</h2>
                <img src="img/캠파바.jpg" alt="Campus Dormitory" style="width: 100%; height: auto;">
                <p>캠퍼스 기숙사 관련 설명...</p>
            `;
            break;
        case 'shinhwa':
            detailsContent = `
                <h2>신화 기숙사</h2>
                <img src="img/신파바.jpg" alt="Shinhwa Dormitory" style="width: 100%; height: auto;">
                <p>신화 기숙사 관련 설명...</p>
            `;
            break;
        case 'pyeonhan':
            detailsContent = `
                <h2>편한 기숙사</h2>
                <img src="img/편파바.jpg" alt="Pyeonhan Dormitory" style="width: 100%; height: auto;">
                <p>편한 기숙사 관련 설명...</p>
            `;
            break;
        case 'cheong':
            detailsContent = `
                <h2>청룡 기숙사</h2>
                <img src="img/청파바.jpg" alt="Cheong Dormitory" style="width: 100%; height: auto;">
                <p>청룡 기숙사 관련 설명...</p>
            `;
            break;
        case 'yujin2':
            detailsContent = `
                <h2>유진빌2 기숙사</h2>
                <img src="img/유파바.jpg" alt="Yujin2 Dormitory" style="width: 100%; height: auto;">
                <p>유진빌2 기숙사 관련 설명...</p>
            `;
            break;
        default:
            detailsContent = '<p>기숙사 정보를 선택하세요.</p>';
    }

    detailsContainer.innerHTML = detailsContent;
    detailsContainer.style.display = 'block';
    detailsContainer.scrollIntoView({ behavior: 'smooth' });
}

function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}`;
}
