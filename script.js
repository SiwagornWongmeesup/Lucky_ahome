const menuOpenbutton = document.querySelector("#menu-open-button")
const menuClosebutton = document.querySelector("#menu-close-button")


menuOpenbutton.addEventListener("click",() => {
    /*Toggle mobile menu visibility(การมองเห็น)*/
    document.body.classList.toggle("show-mobile-menu");
});

menuClosebutton.addEventListener("click",() => menuOpenbutton.click
());

// Initialize Swiper
const swiper = new Swiper('.swiper', {
    loop: true,

    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
        clickable: true, // ให้คลิกจุดเพื่อเปลี่ยนสไลด์ได้
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


    
  });

  $(document).ready(function () {
    // ตรวจจับการเลื่อนหน้า
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) { // เช็คว่าถ้า scroll ลงมามากกว่า 200px
            $(".scroll-up-btn").addClass("show"); // แสดงปุ่ม
        } else {
            $(".scroll-up-btn").removeClass("show"); // ซ่อนปุ่ม
        }
    });

    // คลิกปุ่มแล้วเลื่อนกลับขึ้นไปด้านบน
    $(".scroll-up-btn").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
});

// modal button
//* **/
function showDetail(button) {
    const modal = document.getElementById("food-modal");
    const modalTitle = document.getElementById("modal-name");
    const modalDescription = document.getElementById("modal-text");
    const modalDescriptionMore = document.getElementById("modal-dec");
    const modalImage = document.getElementById("modal-image");

    // ดึงข้อมูลจากปุ่มโดยใช้ dataset
    const name = button.dataset.name;
    const description = button.dataset.text;
    const moreText = button.dataset.moreText;
    const imgSrc = button.dataset.img;

    // อัปเดตเนื้อหาใน modal
    modalTitle.textContent = name;
    modalDescription.textContent = description;
    modalDescriptionMore.textContent = moreText;
    modalImage.src = imgSrc;

    // แสดง modal
    modal.style.display = "flex";
}

// ฟังก์ชันปิด modal
function closeModal() {
    document.getElementById("food-modal").style.display = "none";
}
