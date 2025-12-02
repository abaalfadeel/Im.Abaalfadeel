// تفعيل القائمة المتنقلة على الجوال
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    const scrollTopBtn = document.getElementById('scrollTop');
    const currentYear = document.getElementById('currentYear');
    const messageForm = document.getElementById('messageForm');
    
    // تحديث السنة الحالية في الفوتر
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
    
    // فتح/إغلاق القائمة على الجوال
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.querySelector('i').classList.toggle('fa-bars');
            this.querySelector('i').classList.toggle('fa-times');
        });
    }
    
    // إغلاق القائمة عند النقر على رابط
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            menuToggle.querySelector('i').classList.remove('fa-times');
            menuToggle.querySelector('i').classList.add('fa-bars');
        });
    });
    
    // إظهار/إخفاء زر الانتقال للأعلى
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    
    // الانتقال إلى الأعلى عند النقر على الزر
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // إرسال نموذج الرسالة (وهمي)
    if (messageForm) {
        messageForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // في الواقع هنا يتم إرسال البيانات للخادم
            // لكننا سنعرض رسالة نجاح للتوضيح
            alert('شكراً لك! تم استلام رسالتك وسأتواصل معك قريباً.');
            this.reset();
        });
    }
    
    // تأثيرات عند التمرير (Scroll Animations)
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.project-card, .account-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // تعيين الخصائص الأولية للعناصر المتحركة
    document.querySelectorAll('.project-card, .account-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    // تفعيل تأثيرات التمرير
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
    
    // تأثيرات Hover على بطاقات الحسابات
    document.querySelectorAll('.account-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // إضافة تأثير عند النقر على الأزرار
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
});
