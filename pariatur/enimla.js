function toggleDirection() {
    const container = document.getElementById('container');
    const currentDirection = container.classList.contains('ltr') ? 'ltr' : 'rtl';
    
    // Toggle between LTR and RTL
    if (currentDirection === 'ltr') {
        container.classList.remove('ltr');
        container.classList.add('rtl');
    } else {
        container.classList.remove('rtl');
        container.classList.add('ltr');
    }
}
