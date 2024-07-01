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
                <h2>BMC(123공장)</h2>
                <img src="img/bmc통근.jpg" alt="BMC Image" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/bmc버스.jpg" alt="BMC Image" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/bmc파바.jpg" alt="BMC Image" style="width: 50%; height: auto;" onclick="openModal(this)">
                <h2>BMC(4공장)</h2>
                <img src="img/bmcbus2.png" alt="BMC Image" style="width: 50%; height: auto;" onclick="openModal(this)">

                <p>BMC 관련 설명...</p>
                <p>연차수당:1일부터 말일까지 1개 발생 다음 달에 미사용시 그 다음달에 돈으로 정산(1234공장 동일)  </span></p>
                <p>퇴직금:천안은 6개월 지나서 무조건 정규직 전환 /안성은 O </span></p>
                <p>기숙사여부:(1234공장 모두 가능) </span></p>
                <p>통근여부:위 사진 참조  </span></p>
                <p>휴식시간:오전 오후 10분 점심시간 60분  </span></p>
                <p>시급:9860 ,서울이엔지 단발프레스 첫달은 9,860원
                둘째달부터 10,360 ,금화 고속프레스 11,240 ,(2024기준)   </span></p>
                <p>근무형태:물류 1주1교대 나머지 2주2교대 (변동가능성 높음) </span></p>
                <p>특이사항:  </span></p>
                <p>특이사항2:  </span></p>

            `;
            break;
        case 'daerim':
            detailsContent = `
                <h2>대림정밀</h2>
                <img src="img/대림통근.png" alt="Daerim Image" style="width: 100%; height: auto;" onclick="openModal(this)">
                <p>대림정밀 관련 설명...</p>
                <p>연차수당:확인요망  </span></p>
                <p>퇴직금:확인요망  </span></p>
                <p>기숙사여부:확인요망  </span></p>
                <p>통근여부:위 사진 참조  </span></p>
                <p>휴식시간:점심시간 35분 오전오후 10분씩 쉼 6분빨리 끝남  </span></p>
                <p>시급:최저 시급  </span></p>
                <p>근무형태:확인요망  </span></p>
                <p>특이사항:  </span></p>
                <p>특이사항2:  </span></p>
                <button class="button1" onclick="showCompanyImages('bmc')">회사사진보기</button>
                <div class="image-container" id="bmc-images">
                <!-- Add more images as needed -->
            </div>

            `;
            break;
        case 'hitech':
            detailsContent = `
                <h2>하이퍼텍</h2>
                <p> 관련 설명...</p>
                <p>연차수당:  </span></p>
                <p>퇴직금:  </span></p>
                <p>기숙사여부:  </span></p>
                <p>통근여부:  </span></p>
                <p>휴식시간:  </span></p>
                <p>시급:  </span></p>
                <p>근무형태:  </span></p>
                <p>특이사항:  </span></p>
                <p>특이사항2:  </span></p>
            `;
            break;
        case 'joojoong':
            detailsContent = `
                <h2>주풍테크</h2>
                <img src="img/jubus1.png" alt="Jent Image" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/jubus2.png" alt="Jent Image" style="width: 50%; height: auto;" onclick="openModal(this)">


                                <div class="image-container" id="bmc-images">
                <img src="img/zoo1.jpg" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/zoo2.jpg" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/zoo3.jpg" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/zoo4.jpg" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/zoo5.jpg" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/zoo6.jpg" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/zoo7.jpg" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/jupung1.jpg" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/jupung2.jpg" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/jupung3.jpg" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">

                <!-- Add more images as needed -->
            </div>
            <button class="button1" onclick="showCompanyImages('bmc')">회사사진보기</button>
            
                <p> 관련 설명...</p>
                <p>연차수당:  </span></p>
                <p>퇴직금:  </span></p>
                <p>기숙사여부:  </span></p>
                <p>통근여부:주풍 내리 위치 7:40 코사보아 부동산  주간은 기숙사 통근 가능 주야는 자차만.  </span></p>
                <p>내리인원 주간 파리바게트 08:00 탑승함..   </span></p>
                <p>휴식시간:저녁 휴게시간 17:00-17:30 저녁X  </span></p>
                <p>시급:9860 </span></p>
                <p>근무형태:  </span></p>
                <p>특이사항: 정년 이후 계속 다닐 수 있다곤 함 </span></p>
                <p>특이사항2:  </span></p>
            `;
            break;
        case 'jent':
            detailsContent = `
                <h2>지엔티</h2>
                <img src="img/gntbus.png" alt="Jent Image" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/gntbus1.png" alt="Jent Image" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/gntbus2.png" alt="Jent Image" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/gntbus3.png" alt="Jent Image" style="width: 50%; height: auto;" onclick="openModal(this)">

                <div class="image-container" id="bmc-images">
                <img src="img/gntimg/1.png" alt="1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/gntimg/2.jpg" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/gntimg/3.jpg" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/gntimg/4.jpg" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/gntimg/5.jpg" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/gntimg/6.jpg" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/gntimg/7.jpg" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <!-- Add more images as needed -->
            </div>
            <br>
            <button class="button1" onclick="showCompanyImages('bmc')">회사사진보기</button>

                <p> 관련 설명...</p>
                <p>연차수당:  </span></p>
                <p>퇴직금:  </span></p>
                <p>기숙사여부:  </span></p>
                <p>통근여부:  </span></p>
                <p>휴식시간:  </span></p>
                <p>시급:신규 여 10,400 남 10,900  기존인원은 100원 높음</span></p>
                <p>근무형태:  </span></p>
                <p>특이사항:기숙사 인원X  </span></p>
                <p>특이사항2: <br>담당업무
                1)전처리실:<br>
                -기계를 사용하여 분쇄한 고기를 길쭉한 봉투에 담아 돈가스 원료를 만드는 작업<br>
                -해동된 고기나 새우 등을 깨끗하게 세척하는 작업<br>
                <br>
                2)전처리-배타실:<br>
                -튀김류(돈까스,새우튀김 등) 반죽을 만드는 작업<br>
                *조출 가능자(자차 소지자)*<br>
                <br>
                3)외포장실:<br>
                -완제품을 박스에 수량을 맞춰 담는 작업<br>
                <br>
                * 전처리실 만근수당 10만원 지급 * </span></p>
            `;
            break;
        case 'cnl':
            detailsContent = `
                <h2>씨엔엠</h2>
                <img src="img/cnmbus1.png" alt="Jent Image" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/cnmbus2.png" alt="Jent Image" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/cnmbus.jpg" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <p> 관련 설명...</p>
                <p>연차수당:  </span></p>
                <p>퇴직금:  </span></p>
                <p>기숙사여부:  </span></p>
                <p>통근여부:  </span></p>
                <p>휴식시간:  </span></p>
                <p>시급:  </span></p>
                <p>근무형태:  </span></p>
                <p>특이사항:  </span></p>
                <p>특이사항2:  </span></p>
            `;
            break;
        case 'somangwoorin':
            detailsContent = `
                <h2>소망유리</h2>
                
                <div class="image-container" id="bmc-images">
                <img src="img/somangimg/1.png" alt="1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/somangimg/2.png" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/somangimg/3.png" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/somangimg/4.png" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/somangimg/5.png" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/somangimg/6.png" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/somangimg/7.png" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/somangimg/8.png" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/somangimg/9.png" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/somangimg/10.png" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/somang1.jpg" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/somang2.jpg" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/somang3.jpg" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">

                <!-- Add more images as needed -->
            </div>
            <button class="button1" onclick="showCompanyImages('bmc')">회사사진보기</button>
                <p>연차수당: 확인요망 </span></p>
                <p>퇴직금: 확인요망 </span></p>
                <p>기숙사여부:여자O 남자X(자차인원)</span></p>
                 <p>자차 6:35도착 서실장님 번호 <p>

                <p>통근여부:스타렉스 카풀 06:15 내리파리바게트 2794스타렉스 (서실장님 탑승인원 공유해야함)</span></p>
                <p>휴식시간:9시 14시 16시 10분씩 점심시간 30분</span></p>
                <p>시급:년도 최저시급 </span></p>
                <p>근무형태:남자 한 달간 주간고정 후 주야교대 변경(요로) 여자 3조2교대</span></p>
                <p>특이사항:유류비 상황따라서 지급가능 </span></p>
                <p>특이사항2:출근전 복장강조 한 번 더</span></p>
                <p>특이사항3:43세까지 시력 너무 안좋으면 안됨 </span></p>
          
            </div>
            `;
            break;
        case 'rotarex':
            detailsContent = `
                <h2>로타렉스코리아</h2>
                <br>
                <img src="img/rotabus1.jpg" alt="Jent Image" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/rotabus2.jpg" alt="Jent Image" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/rotabus3.jpg" alt="Jent Image" style="width: 50%; height: auto;" onclick="openModal(this)">
                <br>

                <div class="image-container" id="bmc-images">
                <img src="img/rotaimg/1.jpg" alt="1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/rotaimg/2.jpg" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/rotaimg/3.jpg" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/rotaimg/4.jpg" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/rotaimg/5.jpg" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/rotaimg/6.jpg" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/rotaimg/7.jpg" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/rotaimg/8.jpg" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/rotaimg/9.jpg" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/rotaimg/10.jpg" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">

                <!-- Add more images as needed -->
            </div>
            <br>
            <button class="button1" onclick="showCompanyImages('bmc')">회사사진보기</button>


            `;
            break;
        case 'postbank':
            detailsContent = `
                <h2>포스뱅크</h2>
                <img src="img/posbus.png" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/posbustime.png" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                
                <div class="image-container" id="bmc-images">
                <img src="img/pos1.png" alt="1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/pos2.png" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/pos3.jpg" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/pos4.jpg" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/pos5.jpg" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/pos6.jpg" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/pos7.jpg" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/pos8.jpg" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/pos9.jpg" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                <img src="img/pos10.jpg" alt="BMC Image 1" style="width: 50%; height: auto;" onclick="openModal(this)">
                
                <!-- Add more images as needed -->
            </div>
            <br>
            <button class="button1" onclick="showCompanyImages('bmc')">회사사진보기</button>
            <br>
                <p>연차수당: 확인요망 </span></p>
                <p>퇴직금: 1년마다 정산 </span></p>
                <p>기숙사여부:X</span></p>
                <p>통근여부: 송탄 주변 (김익태이사님 버스운행)</span></p>
                <p>휴식시간: 확인요망 </span></p>
                <p>시급:년도 최저시급 </span></p>
                <p>근무형태:남자 한 달간 주간고정 후 주야교대 변경(요로) 여자 3조2교대</span></p>
                <p>특이사항:남:만근수당7만 상여금 250% 여:만근수당6만 상여금 200% </span></p>
                <p>특이사항2:</span></p>
                <p>포스뱅크</p>
                <p>근무인원은 대략 140명정도</p>
                <p>10시 20분부터 10시 30분까지 쉬는시간</p>
                <p>점심 12시 30분부터 1시간</p>
                <p>3시 20분부터 3시 30분까지 쉬는시간</p>
                <p>석식 5시 30분부터 6시까지</p>
                <p>식권받고 식사는 한식뷔페</p>
                <p>잔업 2.5시간</p>

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
