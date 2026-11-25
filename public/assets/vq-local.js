// Localhost helper for Virtual Quran forms & interactive fallbacks
document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  forms.forEach((form) => {
    // Skip interactive calculator/tracker/filter forms that don't POST to a server
    const action = (form.getAttribute('action') || '').toLowerCase();
    const method = (form.getAttribute('method') || 'get').toLowerCase();
    const isServerPost = method === 'post' || action.includes('admin-ajax') || action.includes('free-trial') || action.includes('contact');
    if (!isServerPost && !form.querySelector('input[type="email"], input[name*="phone"], textarea')) {
      return;
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let banner = form.querySelector('.vq-local-success');
      if (!banner) {
        banner = document.createElement('div');
        banner.className = 'vq-local-success';
        banner.style.cssText = 'margin-top:16px;padding:14px 18px;border-radius:10px;background:#ecfdf5;border:1px solid #10b981;color:#065f46;font-weight:600;font-size:15px;';
        form.appendChild(banner);
      }
      banner.textContent = 'JazakAllahu Khayran! Your request has been recorded locally for Virtual Quran. In production, this submits to learnquranonlinetutors@gmail.com.';
      form.reset();
    });
  });
});
