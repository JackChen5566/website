document.addEventListener("DOMContentLoaded", () => {
  const inquiryButtons = document.querySelectorAll(".inquiry-btn");

  inquiryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const carName = button.dataset.car;
      alert(`你選擇了 ${carName}。\n下一步可以把這裡改成「預約賞車表單」或串接後端 API。`);
    });
  });
});
