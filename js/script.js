// Seleciona o menu principal
const menuPrincipal = document.querySelector('.menu-principal');

// Adiciona um event listener para o evento 'mouseover' no menu principal
menuPrincipal.addEventListener('mouseover', function() {

  // Seleciona todos os submenus
  const submenus = document.querySelectorAll('.submenu');

  // Para cada submenu
  submenus.forEach(function(submenu) {

    // Adiciona um event listener para o evento 'mouseover' no submenu
    submenu.addEventListener('mouseover', function() {

      // Altera a cor do submenu para a cor desejada
      this.style.backgroundColor = '#0000FF';

      // Remove a cor padrão do submenu quando o mouse sai do submenu
      this.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
      });
    });
  });
});


