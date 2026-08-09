document.querySelector(".menu").addEventListener("click",()=>{
    document.querySelector(".container").classList.toggle("change");

})
const links=document.querySelectorAll(".menu-link");
links.forEach(link=>{
    link.addEventListener("click",()=>{
        document.querySelector(".container").classList.remove("change");
    });
});


document.querySelectorAll('.menu-link, .banner button').forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href') || '#destinations';
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


const revealTargets = document.querySelectorAll('.service, .destination-card, .guide');
revealTargets.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealTargets.forEach(el => revealObserver.observe(el));


const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.menu-link');

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(l => l.classList.remove('active-link'));
            const activeLink = document.querySelector(`.menu-link[href="#${entry.target.id}"]`);
            if (activeLink) activeLink.classList.add('active-link');
        }
    });
}, { threshold: 0.4 });

sections.forEach(sec => navObserver.observe(sec));