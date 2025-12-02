// كود الجافاسكريبت للموقع
document.addEventListener('DOMContentLoaded', function() {
    // تأثيرات للقوائم
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // نموذج التواصل
    const contactForm = document.querySelector('form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // هنا في الواقع يتم إرسال البيانات للخادم
            // لكننا سنكتفي برسالة تنبيه للتوضيح
            alert('شكراً لك! تم استلام رسالتك وسأتواصل معك قريباً.');
            this.reset();
        });
    }
    
    // تأثيرات عند التمرير
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // مراقبة العناصر
    document.querySelectorAll('.project-card, .account-card').forEach(el => {
        observer.observe(el);
    });
    
    // تحديث السنة في الفوتر
    const yearElement = document.querySelector('.copyright');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2023', currentYear);
    }
});
