

 const contactForm = document.getElementById('contactForm');
  const successModal = document.getElementById('successModal');
  const closeSuccessBtn = document.getElementById('closeSuccessBtn');
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); 
    const name = document.getElementById('userName').value;
    const phone = document.getElementById('userPhone').value;
    const eventType = document.getElementById('eventType').value;
    const details = document.getElementById('eventDetails').value;
    if (name && phone && eventType && details) {
      successModal.classList.add('show');
      contactForm.reset();
      setTimeout(function() {
        successModal.classList.remove('show');
      }, 5000);
      
      
      console.log('Message sent successfully!');
      console.log('Name:', name);
      console.log('Phone:', phone);
      console.log('Event Type:', eventType);
      console.log('Details:', details);
    } else {
      alert('Please fill in all fields before sending.');
    }
  });
  
  // Close modal ni sya
  closeSuccessBtn.addEventListener('click', function() {
    successModal.classList.remove('show');
  });
  
  // Close modal ni sya once i click nimo outside sa content
  successModal.addEventListener('click', function(e) {
    if (e.target === successModal) {
      successModal.classList.remove('show');
    }
  });

  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  let mx = 0, my = 0, fx = 0, fy = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function animCursor() {
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
    fx += (mx - fx) * 0.12;
    fy += (my - fy) * 0.12;
    follower.style.left = fx + 'px';
    follower.style.top = fy + 'px';
    requestAnimationFrame(animCursor);
  }
  animCursor();
  document.querySelectorAll('a, button, .service-card, .gal-item, .vocal-tag').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
      follower.style.transform = 'translate(-50%, -50%) scale(1.6)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      follower.style.transform = 'translate(-50%, -50%) scale(1)';
    });
  });

  // Navigation scroll niya para maka balo ka
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Scroll reveal pud ni niya timan e ni kay ipa debugg gyud ka
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.12 });
  reveals.forEach(r => observer.observe(r));

  // Smooth scroll for all nav links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });