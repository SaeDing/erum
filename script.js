document.addEventListener('DOMContentLoaded', () => {
    updateClock();
    setInterval(updateClock, 1000);
});

function showPage(page) {
    const tableContainer = document.getElementById('table-container');
    const companyTable = document.getElementById('company-table');
    const dormitoryTable = document.getElementById('dormitory-table');
    const clock = document.getElementById('clock');

    if (page === 'dormitory') {
        companyTable.style.display = 'none';
        dormitoryTable.style.display = 'table';
        moveClockToButton('companySwitchButton');
    } else if (page === 'company') {
        dormitoryTable.style.display = 'none';
        companyTable.style.display = 'table';
        moveClockToButton('companySwitchButton');
    }

    tableContainer.style.display = 'block';
    document.getElementById('initial-view').style.display = 'none';

    const scrollToTopButton = document.getElementById('scroll-to-top');
    scrollToTopButton.style.display = 'block';
}

function showDetails(company) {
    const detailsContainer = document.getElementById('details-container');
    let detailsContent = '';

    switch (company) {
        case 'bmc':
            detailsContent = `
                <h2>BMC</h2>
                <img src="img/bmc통근.jpg" alt="BMC Image" style="width: 100%; height: auto;">
                <img src="img/bmc버스.jpg" alt="BMC Image" style="width: 50%; height: auto;">
                <img src="img/bmc파바.jpg" alt="BMC Image" style="width: 50%; height: auto;">
                <p>BMC 관련 설명...</p>
                <p><span class="location" onclick="copyToClipboard(this)">평택시 세교산단로 22번길 119</span></p>
            `;
            break;
        case 'daerim':
            detailsContent = `
                <h2>대림정밀</h2>
                <img src="img/2.jpg" alt="Daerim Image" style="width: 100%; height: auto;">
                <p>대림정밀 관련 설명...</p>
            `;
            break;
        case 'hitech':
            detailsContent = `
                <h2>하이퍼텍</h2>
                <img src="img/포공고1.jpg" alt="Hitech Image" style="width: 50%; height: auto;">
                <p>하이퍼텍 관련 설명...</p>
            `;
            break;
        case 'joojoong':
            detailsContent = `
                <h2>주풍테크</h2>
                <img src="img/4.jpg" alt="Joojoong Image" style="width: 100%; height: auto;">
                <p>주풍테크 관련 설명...</p>
            `;
            break;
        case 'jent':
            detailsContent = `
                <h2>지엔티</h2>
                <img src="img/5.jpg" alt="Jent Image" style="width: 100%; height: auto;">
                <p>지엔티 관련 설명...</p>
            `;
            break;
        case 'cnl':
            detailsContent = `
                <h2>씨엔엠</h2>
                <img src="img/6.jpg" alt="CNL Image" style="width: 100%; height: auto;">
                <p>씨엔엠 관련 설명...</p>
            `;
            break;
        case 'somangwoorin':
            detailsContent = `
                <h2>소망유리</h2>
                <img src="img/7.jpg" alt="Somangwoorin Image" style="width: 100%; height: auto;">
                <p>소망유리 관련 설명 [9시 14시 16시 10분씩 점심시간 30분]...</p>
            `;
            break;
        case 'rotarex':
            detailsContent = `
                <h2>로타렉스코리아</h2>
                <img src="img/8.jpg" alt="Rotarex Image" style="width: 100%; height: auto;">
                <p>로타렉스코리아 관련 설명...</p>
            `;
            break;
        case 'postbank':
            detailsContent = `
                <h2>포스뱅크</h2>
                <img src="img/포공고.jpg" alt="Postbank Image" style="width: 50%; height: auto;">
                <p>포스뱅크 관련 설명...</p>
            `;
            break;
        default:
            detailsContent = '<p>회사 정보를 찾을 수 없습니다.</p>';
    }

    detailsContainer.innerHTML = detailsContent;
    detailsContainer.style.display = 'block';
    detailsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showDormDetails(dorm) {
    const detailsContainer = document.getElementById('details-container');
    let detailsContent = '';

    switch (dorm) {
        case 'su':
            detailsContent = `
                <h2>수 기숙사</h2>
                <img src="img/수파바.jpg" alt="BMC Image" style="width: 100%; height: auto;">
                <p>수 기숙사 관련 설명...</p>
            `;
            break;
        case 'ellim':
            detailsContent = `
                <h2>엘림 기숙사</h2>
                <img src="img/엘파바.jpg" alt="BMC Image" style="width: 100%; height: auto;">
                <p>엘림 기숙사 관련 설명...</p>
            `;
            break;
        case 'green':
            detailsContent = `
                <h2>그린빌 기숙사</h2>
                <img src="img/그파바.jpg" alt="BMC Image" style="width: 100%; height: auto;">
                <p>씨엔엠은 무조건 그린빌 (10일 급여일은 무조건 그린빌)...</p>
                <p>심야전기 사용</p>
            `;
            break;
        case 'sense':
            detailsContent = `
                <h2>센스 기숙사</h2>
                <img src="img/센파바.jpg" alt="BMC Image" style="width: 100%; height: auto;">
                <p>센스 기숙사 관련 설명...</p>
            `;
            break;
        case 'campus':
            detailsContent = `
                <h2>캠퍼스 기숙사</h2>
                <img src="img/캠파바.jpg" alt="BMC Image" style="width: 100%; height: auto;">
                <p>캠퍼스 기숙사 관련 설명...</p>
            `;
            break;
        case 'shinhwa':
            detailsContent = `
                <h2>신화 기숙사</h2>
                <img src="img/신파바.jpg" alt="BMC Image" style="width: 100%; height: auto;">
                <p>신화 기숙사 관련 설명...</p>
            `;
            break;
        case 'pyeonhan':
            detailsContent = `
                <h2>편한 기숙사</h2>
                <img src="img/편파바.jpg" alt="BMC Image" style="width: 100%; height: auto;">
                <p>편한 기숙사 관련 설명...</p>
            `;
            break;
        case 'cheong':
            detailsContent = `
                <h2>청룡 기숙사</h2>
                <p>청룡 기숙사 미사용중...</p>
            `;
            break;
        case 'yujin2':
            detailsContent = `
                <h2>유진빌2 기숙사</h2>
                <img src="img/유파바.jpg" alt="BMC Image" style="width: 100%; height: auto;">
                <p>유진빌2 기숙사 관련 설명...</p>
            `;
            break;
        default:
            detailsContent = '<p>기숙사 정보를 찾을 수 없습니다.</p>';
    }

    detailsContainer.innerHTML = detailsContent;
    detailsContainer.style.display = 'block';
    detailsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    // 애니메이션으로 토스트 메시지를 보여줌
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    // 1초 후에 토스트 메시지를 숨기고 제거
    setTimeout(() => {
        toast.classList.remove('show');
        toast.addEventListener('transitionend', () => {
            toast.remove();
        });
    }, 1000);
}

function scrollToTop() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, scrollTop - scrollTop / 8);
    }
}

const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}


getClock();
setInterval(getClock, 1000);

function moveClockToButton(buttonId) {
    const button = document.getElementById(buttonId);
    const clock = document.getElementById('clock');
    button.parentNode.insertBefore(clock, button.nextSibling);
    clock.style.display = 'inline-block';
    clock.style.marginLeft = '10px';
}

document.getElementById('dormButton').addEventListener('click', () => moveClockToButton('dormButton'));
document.getElementById('officeButton').addEventListener('click', () => moveClockToButton('officeButton'));
