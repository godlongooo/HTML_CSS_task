document.querySelector('.hamburger').addEventListener('click', function(){ /* ハンバーガーメニューをクリックした際クラスを追加 */
    this.classList.toggle('active'); /* 指定したクラスにactiveクラスを追加 */
    document.querySelector('.slide-menu').classList.toggle('active');
    document.querySelector('body').classList.toggle('active');
  })