/*window.onload = function(){
	document.querySelector(".menu_mobile").addEventListener("click", function(){
		if(document.querySelector(".menu nav ul").style.display == 'flex') {
			document.querySelector(".menu nav ul").style.display = 'none';
		} else {
			document.querySelector(".menu nav ul").style.display = 'flex';
		}
	});
};*/

    AOS.init();

    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('close-btn');

    // Abrir menu mobile
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.add('active');
      mobileMenu.setAttribute('aria-hidden', 'false');
      // Focar no primeiro link para acessibilidade
      //const firstLink = mobileMenu.querySelector('a');
      //if (firstLink) firstLink.focus();
    });

    // Fechar menu mobile
    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      mobileMenu.setAttribute('aria-hidden', 'true');
      //menuToggle.focus();
    });

    // Fechar menu ao clicar em link no mobile
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileMenu.setAttribute('aria-hidden', 'true');
      });
    });

    // Validação simples do formulário
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (!name || !email || !message) {
        alert('Por favor, preencha todos os campos.');
        return;
      }

      // Simula envio de formulário
      alert('Mensagem enviada com sucesso! Obrigado, ' + name + '.');
      form.reset();
    });

    // Ajuste da rolagem para header fixo com altura de 140px
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetID = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetID);

      if (targetElement) {
        const headerOffset = 225; // altura do header fixo
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  }); 

  
	


