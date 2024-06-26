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
                <p>급여일 10일이면 무조건 여기 넣기.</p>
                <p>씨엔엠 인원은 무조건 여기, 심야전기 사용</p>
                <p>심야전기콘센트 막 쓰지않게 주의 꼭 줄 것 (전기세폭탄)</p>
                <img src="img/그파바.jpg" alt="Sense Dormitory" style="width: 100%; height: auto;">
                <img src="img/그린0.jpg" alt="BMC Image" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/그린1.jpg" alt="BMC Image" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/그린2.jpg" alt="BMC Image" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/그린3.jpg" alt="BMC Image" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/그린4.jpg" alt="BMC Image" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/그린5.jpg" alt="BMC Image" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/그린6.jpg" alt="BMC Image" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/그린7.jpg" alt="BMC Image" style="width: 50%; height: auto;" onclick="openModal(this)">
            
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
                <h2>다나오피스텔 기숙사</h2>
                <img src="img/다나1.jpg" alt="BMC Image" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/다나2.jpg" alt="BMC Image" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/다나3.jpg" alt="BMC Image" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/다나4.jpg" alt="BMC Image" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/다나5.jpg" alt="BMC Image" style="width: 50%; height: auto;" onclick="openModal(this)">
                <p>다나오피스텔 기숙사 관련 설명...</p>
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

function showCompanyImages(company) {
    const imageContainer = document.getElementById(`${company}-images`);
    if (imageContainer.style.display === 'block') {
        imageContainer.style.display = 'none';
        imageContainer.scrollIntoView({ behavior: 'smooth', block: 'end' });
    } else {
        imageContainer.style.display = 'block';
        imageContainer.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
}
