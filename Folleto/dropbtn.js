document.addEventListener('DOMContentLoaded', () => {
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Al hacer clic en el botón, alternar la clase 'show'
    dropbtn.addEventListener('click', () => {
        dropdownContent.classList.toggle('show');
    });

    // Cierra el menú si se hace clic fuera de él
    window.addEventListener('click', (event) => {
        if (!event.target.matches('.dropbtn')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
});
