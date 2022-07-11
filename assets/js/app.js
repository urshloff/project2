(() => {
  document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.hero__img--1')) {
      const imgMale = document.querySelector(".hero__img--1");
      imgMale.addEventListener("click", () => {
        imgMale.classList.toggle("active");
      });
    }

    if (document.querySelector('.btn')) {
      document.querySelectorAll('.btn').forEach(function (btn) {
        btn.addEventListener('click', function (event) {
          const path = event.currentTarget.dataset.path;
          btn.classList.toggle('active')
          document.querySelector(`[data-target="${path}"]`).classList.toggle('open');
        });
      });
    } else {
      console.log('Not Found');
    }
  })
})();