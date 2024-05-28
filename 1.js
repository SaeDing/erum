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
                <img src="img/대림통근.png" alt="Daerim Image" style="width: 100%; height: auto;">
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


var modal = document.getElementById("myModal");

// 이미지를 가져와서 모달 안에 삽입하고 "alt" 텍스트를 캡션으로 사용함
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block"; // 모달 창 표시
  modalImg.src = this.src; // 모달 이미지 설정
}

// 모달을 닫는 닫기 버튼(<span>) 요소를 가져옴
var span = document.getElementsByClassName("close")[0];

// 사용자가 닫기 버튼(X)을 클릭할 때 모달을 닫음
span.onclick = function() {
  modal.style.display = "none"; // 모달 창 숨김
}


function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}`;
}
