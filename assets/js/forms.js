// ===== Form Handling =====
document.addEventListener('DOMContentLoaded', function() {
    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                showToast('الرجاء ملء جميع الحقول المطلوبة', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showToast('الرجاء إدخال بريد إلكتروني صحيح', 'error');
                return;
            }
            
            // Simulate form submission
            showToast('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً', 'success');
            contactForm.reset();
        });
    }
    
    // Demo Form
    const demoForm = document.getElementById('demoForm');
    if (demoForm) {
        demoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            
            if (!fullName || !email || !phone) {
                showToast('الرجاء ملء جميع الحقول المطلوبة', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showToast('الرجاء إدخال بريد إلكتروني صحيح', 'error');
                return;
            }
            
            // Simulate form submission
            showToast('تم استلام طلبك! سنتواصل معك لتحديد موعد العرض التجريبي', 'success');
            demoForm.reset();
        });
    }
});

// ===== Email Validation =====
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===== Toast Notification =====
function showToast(message, type = 'success') {
    // Remove existing toasts
    const existingToasts = document.querySelectorAll('.toast');
    existingToasts.forEach(toast => toast.remove());
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-30px)';
        toast.style.transition = 'all 0.3s ease';
        
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 5000);
}
