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
                <img src="1.jpg" alt="BMC Image" style="width: 100%; height: auto;">
                <p>BMC 관련 설명...</p>
            `;
            break;
        case 'daerim':
            detailsContent = `
                <h2>대림정밀</h2>
                <img src="2.jpg" alt="Daerim Image" style="width: 100%; height: auto;">
                <p>대림정밀 관련 설명...</p>
            `;
            break;
        case 'hitech':
            detailsContent = `
                <h2>하이퍼텍</h2>
                <img src="3.jpg" alt="Hitech Image" style="width: 100%; height: auto;">
                <p>하이퍼텍 관련 설명...</p>
            `;
            break;
        case 'joojoong':
            detailsContent = `
                <h2>주풍테크</h2>
                <img src="4.jpg" alt="Joojoong Image" style="width: 100%; height: auto;">
                <p>주풍테크 관련 설명...</p>
            `;
            break;
        case 'jent':
            detailsContent = `
                <h2>지엔티</h2>
                <img src="5.jpg" alt="Jent Image" style="width: 100%; height: auto;">
                <p>지엔티 관련 설명...</p>
            `;
            break;
        case 'cnl':
            detailsContent = `
                <h2>씨엔엠</h2>
                <img src="6.jpg" alt="CNL Image" style="width: 100%; height: auto;">
                <p>씨엔엠 관련 설명...</p>
            `;
            break;
        case 'somangwoorin':
            detailsContent = `
                <h2>소망유리</h2>
                <img src="7.jpg" alt="Somangwoorin Image" style="width: 100%; height: auto;">
                <p>소망유리 관련 설명...</p>
            `;
            break;
        case 'rotarex':
            detailsContent = `
                <h2>로타렉스코리아</h2>
                <img src="8.jpg" alt="Rotarex Image" style="width: 100%; height: auto;">
                <p>로타렉스코리아 관련 설명...</p>
            `;
            break;
        case 'postbank':
            detailsContent = `
                <h2>포스뱅크</h2>
                <img src="9.jpg" alt="Postbank Image" style="width: 100%; height: auto;">
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
                <p>수 기숙사 관련 설명...</p>
            `;
            break;
        case 'ellim':
            detailsContent = `
                <h2>엘림 기숙사</h2>
                <p>엘림 기숙사 관련 설명...</p>
            `;
            break;
        case 'green':
            detailsContent = `
                <h2>그린 기숙사</h2>
                <p>그린 기숙사 관련 설명...</p>
            `;
            break;
        case 'sense':
            detailsContent = `
                <h2>센스 기숙사</h2>
                <p>센스 기숙사 관련 설명...</p>
            `;
            break;
        case 'campus':
            detailsContent = `
                <h2>캠퍼스 기숙사</h2>
                <p>캠퍼스 기숙사 관련 설명...</p>
            `;
            break;
        case 'shinhwa':
            detailsContent = `
                <h2>신화 기숙사</h2>
                <p>신화 기숙사 관련 설명...</p>
            `;
            break;
        case 'pyeonhan':
            detailsContent = `
                <h2>편한 기숙사</h2>
                <p>편한 기숙사 관련 설명...</p>
            `;
            break;
        case 'cheong':
            detailsContent = `
                <h2>청룡 기숙사</h2>
                <p>청룡 기숙사 관련 설명...</p>
            `;
            break;
        case 'yujin2':
            detailsContent = `
                <h2>유진빌2 기숙사</h2>
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
