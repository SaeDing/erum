function showDetails(company) {
    const detailsContainer = document.getElementById('details-container');
    
    let detailsContent = '';
    
    switch(company) {
        case 'bmc':
            detailsContent = `
                <h2>BMC 계열사</h2>
                <img src="1.jpg" alt="BMC Image" style="width: 100%; height: auto;">
                <p>기숙사 가능 안성내리~~~ 통근버스표</p>
                <a id="back-to-top" href="#" onclick="scrollToTop()">맨 위로 이동</a>
            `;
            break;
        case 'daerim':
            detailsContent = `
                <h2>대림정밀</h2>
                <img src="2.jpg" alt="Daerim Image" style="width: 100%; height: auto;">
                <p>대림정밀 관련 설명...</p>
                <a id="back-to-top" href="#" onclick="scrollToTop()">맨 위로 이동</a>
            `;
            break;
        case 'hitech':
            detailsContent = `
                <h2>하이테크</h2>
                <img src="3.jpg" alt="Hitech Image" style="width: 100%; height: auto;">
                <p>하이테크 관련 설명...</p>
                <a id="back-to-top" href="#" onclick="scrollToTop()">맨 위로 이동</a>
            `;
            break;
        case 'joojoong':
            detailsContent = `
                <h2>주중테크</h2>
                <img src="4.jpg" alt="Joojoong Image" style="width: 100%; height: auto;">
                <p>주중테크 관련 설명...</p>
                <a id="back-to-top" href="#" onclick="scrollToTop()">맨 위로 이동</a>
            `;
            break;
        case 'jent':
            detailsContent = `
                <h2>지엔티</h2>
                <img src="5.jpg" alt="Jent Image" style="width: 100%; height: auto;">
                <p>지엔티 관련 설명...</p>
                <a id="back-to-top" href="#" onclick="scrollToTop()">맨 위로 이동</a>
            `;
            break;
        case 'cnl':
            detailsContent = `
                <h2>씨엔엘</h2>
                <img src="6.jpg" alt="CNL Image" style="width: 100%; height: auto;">
                <p>씨엔엘 관련 설명...</p>
                <a id="back-to-top" href="#" onclick="scrollToTop()">맨 위로 이동</a>
            `;
            break;
        case 'somangwoorin':
            detailsContent = `
                <h2>소망우리</h2>
                <img src="7.jpg" alt="Somangwoorin Image" style="width: 100%; height: auto;">
                <p>소망우리 관련 설명...</p>
                <a id="back-to-top" href="#" onclick="scrollToTop()">맨 위로 이동</a>
            `;
            break;
        case 'rotarex':
            detailsContent = `
                <h2>로타렉스코리아</h2>
                <img src="8.jpg" alt="Rotarex Image" style="width: 100%; height: auto;">
                <p>로타렉스코리아 관련 설명...</p>
                <a id="back-to-top" href="#" onclick="scrollToTop()">맨 위로 이동</a>
            `;
            break;
        case 'postbank':
            detailsContent = `
                <h2>포스뱅크</h2>
                <img src="9.jpg" alt="Postbank Image" style="width: 100%; height: auto;">
                <p>포스뱅크 관련 설명...</p>
                <a id="back-to-top" href="#" onclick="scrollToTop()">맨 위로 이동</a>
            `;
            break;
        default:
            detailsContent = '<p>회사 정보를 찾을 수 없습니다.</p>';
    }

    detailsContainer.innerHTML = detailsContent;
    detailsContainer.style.display = 'block';
}

function copyToClipboard(element) {
    const text = element.innerText;
    if (navigator.clipboard && window.isSecureContext) {
        // Secure context 사용 시
        navigator.clipboard.writeText(text).then(() => {
            alert('위치가 클립보드에 복사되었습니다.');
        }, () => {
            alert('복사 실패. 다시 시도해주세요.');
        });
    } else {
        // 비안전 맥락용 복사 방법
        let textArea = document.createElement("textarea");
        textArea.value = text;
        // Avoid scrolling to bottom
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
            alert('위치가 클립보드에 복사되었습니다.');
        } catch (err) {
            alert('복사 실패. 다시 시도해주세요.');
        }
        document.body.removeChild(textArea);
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
