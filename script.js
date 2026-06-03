// ===== NAVIGATION : scroll fluide =====
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const cible = document.querySelector(this.getAttribute('href'));
        if (cible) {
            cible.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
 
// ===== BOUTON HERO : message de bienvenue =====
const btnContact = document.getElementById('btnContact');
if (btnContact) {
    btnContact.addEventListener('click', () => {
        alert('Merci de votre visite !');
    });
}
 
// ===== BOUTON MAIL : redirection mailto =====
const btnMail = document.getElementById('btnMail');
if (btnMail) {
    btnMail.addEventListener('click', () => {
        window.location.href = 'mailto:contact@monportfolio.com';
    });
}
 
// ===== ANIMATION D'APPARITION au scroll =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });
 
document.querySelectorAll('.skill, .project').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});
