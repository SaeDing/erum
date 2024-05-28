document.addEventListener('DOMContentLoaded', function() {
    updateClock();
    setInterval(updateClock, 60000); // Update every minute

    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        navbar.style.bottom = '0'; // 네비게이션 바 항상 화면 하단에 고정
    });

    const table = document.getElementById('company-table');
    const rows = table.getElementsByTagName('tr');

 for (let i = 0; i < rows.length; i++) {
        rows[i].addEventListener('click', function() {
            // 기존의 모든 행에서 강조 표시 제거
            for (let j = 0; j < rows.length; j++) {
                rows[j].classList.remove('highlighted');
            }
            // 클릭된 행에 강조 표시 추가
            this.classList.add('highlighted');
        });
    }
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
    showToast('기기에 복사되었습니다.');
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
                <img src="img/bmc통근.jpg" alt="BMC Image" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/bmc버스.jpg" alt="BMC Image" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/bmc파바.jpg" alt="BMC Image" style="width: 50%; height: auto;" onclick="openModal(this)">
                <p>BMC 관련 설명...</p>
                <p>연차수당:  </span></p>
                <p>기숙사가능여부:  </span></p>
                <p>통근여부:  </span></p>
                <p>휴식시간:  </span></p>
                <p>시급:  </span></p>
                <p>근무형태:  </span></p>
                <p>특이사항:  </span></p>
                <p>특이사항2:  </span></p>

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





function openModal(image) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = image.src;
}

function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeModal();
    }
}


function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}`;
}



