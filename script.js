//your JS code here. If required.
    const openBtn = document.getElementById('openModal');
    const closeBtn = document.getElementById('closeModal');
    const modal = document.getElementById('modal');

    openBtn.addEventListener('click', () => modal.classList.add('active'));
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));

    window.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });