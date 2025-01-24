'used strict'
// <    >  =>

window.addEventListener('DOMContentLoaded', () => {
    console.log('Funcionando!');

  const sr = ScrollReveal({
    distance: '20px',
    duration: 1000,
    easing: 'ease-in-out',
    origin: 'bottom',
    reset: true
  });

  sr.reveal('.container', {
    delay: 300
  });

  /* Header */
  const he = ScrollReveal({
    distance: '50px',
    duration: 1000,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    origin: 'top',
    reset: true
  });

  he.reveal('header img', {
    delay: 200,
    scale: 0.8,
    rotate: {x: 10, y: 10, z: 10}
  });

  he.reveal('header nav ul li', {
    delay: 400,
    interval: 100,
    scale: 0.9,
    rotate: {x: 0, y: 80, z: 0},
    origin: 'left'
  });

  he.reveal('.networks-header box-icon', {
    delay: 1000,
    interval: 200,
    scale: 0.5,
    rotate: {x: 0, y: 0, z: 360},
    origin: 'right'
  });

  const menuItems = document.querySelectorAll('header nav ul li a');
  menuItems.forEach(item => {
    item.addEventListener('mouseover', function() {
      this.style.transform = 'translateZ(20px) rotateX(10deg)';
      this.style.transition = 'transform 0.3s ease';
    });
    item.addEventListener('mouseout', function() {
      this.style.transform = 'translateZ(0) rotateX(0)';
    });
  });

  const socialIcons = document.querySelectorAll('.networks-header box-icon');
  socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', function() {
      this.style.transform = 'translateZ(30px) scale(1.2)';
      this.style.transition = 'transform 0.3s ease';
    });
    icon.addEventListener('mouseout', function() {
      this.style.transform = 'translateZ(0) scale(1)';
    });
  });

  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.pageYOffset;
    header.style.transform = `translateY(${scrollPosition * 0.5}px)`;
  });

  /* 1 Section */
  const section1Reveal = ScrollReveal({
    distance: '100px',
    duration: 1500,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    reset: true 
  });
  
  section1Reveal.reveal('.about h1', {
    origin: 'left',
    delay: 200,
    scale: 0.9,
    rotate: { x: 0, y: 20, z: 0 }
  });
  
  section1Reveal.reveal('.about p', {
    origin: 'right',
    delay: 400,
    distance: '50px'
  });
  
  section1Reveal.reveal('.description-about h1', {
    origin: 'top',
    delay: 600,
    distance: '50px',
    scale: 0.95,
    opacity: 0.7
  });
  
  section1Reveal.reveal('.description-about p', {
    origin: 'left',
    delay: 800,
    interval: 200,
    distance: '50px'
  });
  
  section1Reveal.reveal('.more', {
    origin: 'bottom',
    delay: 1200,
    scale: 0.8,
    rotate: { x: 0, y: 0, z: 10 },
    opacity: 0.8
  });
  
  section1Reveal.reveal('.img-about .person-about', {
    origin: 'left',
    delay: 1400,
    distance: '150px',
    scale: 0.8,
    rotate: { x: 0, y: 20, z: -5 }
  });
  
  section1Reveal.reveal('.img-about .blue-about', {
    origin: 'top',
    delay: 1600,
    distance: '100px',
    scale: 0.85,
    rotate: { x: -10, y: 0, z: 10 }
  });
  
  section1Reveal.reveal('.img-about .pink-about', {
    origin: 'right',
    delay: 1800,
    distance: '120px',
    scale: 0.9,
    rotate: { x: 10, y: -20, z: 0 }
  });
  
  const moreButton = document.querySelector('.more');
  moreButton.addEventListener('mousemove', function (e) {
    const { offsetX, offsetY, target } = e;
    const { clientWidth, clientHeight } = target;
  
    const xRotation = 20 * ((offsetY - clientHeight / 2) / clientHeight);
    const yRotation = -20 * ((offsetX - clientWidth / 2) / clientWidth);
  
    this.style.transform = `perspective(500px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.1)`;
    this.style.transition = 'transform 0.1s ease';
  });
  
  moreButton.addEventListener('mouseout', function () {
    this.style.transform = 'perspective(500px) rotateX(0) rotateY(0) scale(1)';
  });

  /* 2 Section */
  const section2Animations = ScrollReveal({
    distance: '80px',
    duration: 1200,
    easing: 'ease-in-out',
    reset: true 
  });
  
  section2Animations.reveal('.card-content', {
    origin: 'bottom',
    interval: 200, 
    scale: 0.95, 
    rotate: { x: 5, y: 5, z: 0 } 
  });
  
  section2Animations.reveal('.title-content', {
    origin: 'top',
    delay: 300,
    distance: '50px',
    scale: 0.9
  });
  
  section2Animations.reveal('.card-content img', {
    origin: 'left',
    delay: 400,
    distance: '100px',
    scale: 0.85,
    rotate: { x: 0, y: 20, z: 5 }
  });
  
  section2Animations.reveal('.card-content h5, .card-content p', {
    origin: 'right',
    delay: 500,
    interval: 150,
    distance: '60px',
    scale: 1
  });
  
  const images = document.querySelectorAll('.card-content img');
  window.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
  
    images.forEach((img, index) => {
      const depth = (index + 1) * 50;
      const moveX = ((clientX - centerX) / depth).toFixed(2);
      const moveY = ((clientY - centerY) / depth).toFixed(2);
      img.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotate3d(${moveY / 30}, ${-moveX / 30}, 0, 8deg)`;
      img.style.transition = 'transform 0.05s linear'; 
    });
  });

  /* 3 Section */
  const section3Reveal = ScrollReveal({
    distance: '150px',
    duration: 1500,
    easing: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
    reset: true, 
  });
  
  section3Reveal.reveal('.img-freedom img', {
    origin: 'top',
    delay: 200,
    interval: 300,
    scale: 0.8,
    rotate: { x: 10, y: -20, z: 0 }, 
    opacity: 0.7,
  });
  
  section3Reveal.reveal('.img-join.one', {
    origin: 'left',
    delay: 500,
    distance: '200px',
    scale: 0.9,
    rotate: { x: 0, y: 30, z: 10 },
  });
  
  section3Reveal.reveal('.img-join.two', {
    origin: 'right',
    delay: 700,
    distance: '200px',
    scale: 0.85,
    rotate: { x: 10, y: -20, z: 0 },
  });
  
  section3Reveal.reveal('.img-join.three', {
    origin: 'bottom',
    delay: 900,
    distance: '150px',
    scale: 0.95,
    rotate: { x: -10, y: 0, z: 20 },
  });
  
  section3Reveal.reveal('.img-join.for', {
    origin: 'top',
    delay: 1100,
    distance: '100px',
    scale: 1,
    rotate: { x: 0, y: -30, z: -10 },
  });
  
  section3Reveal.reveal('.description-join .free', {
    origin: 'left',
    delay: 200,
    interval: 200,
    distance: '100px',
    scale: 1.05,
    rotate: { x: 0, y: 10, z: 0 },
  });
  
  section3Reveal.reveal('.description-join a', {
    origin: 'bottom',
    delay: 1200,
    scale: 0.9,
    rotate: { x: 0, y: 0, z: 15 },
    opacity: 0.8,
  });
  
  const floatingImages = document.querySelectorAll('.img-join');
  window.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
  
    floatingImages.forEach((img, index) => {
      const depth = (index + 1) * 15;
      const moveX = ((clientX - centerX) / depth) * 1.5;
      const moveY = ((clientY - centerY) / depth) * 1.5;
      img.style.transform = `translate3d(${moveX}px, ${moveY}px, ${depth}px) rotate3d(${moveY / 100}, ${-moveX / 100}, 0, 12deg)`;
    });
  });

  /* 4 Section */
  const teamReveal = ScrollReveal({
    distance: '150px',
    duration: 1500,
    easing: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
    reset: true,
  });
  
  teamReveal.reveal('.description-team h1', {
    origin: 'top',
    scale: 1.2,
    delay: 200,
  });
  teamReveal.reveal('.description-team p', {
    origin: 'bottom',
    distance: '100px',
    delay: 400,
    scale: 0.9,
  });
  
  teamReveal.reveal('.card-team', {
    origin: 'bottom',
    delay: 600,
    interval: 300,
    distance: '200px',
    rotate: { x: 10, y: -10, z: 0 },
    opacity: 0.8,
  });
  
  const teamCards = document.querySelectorAll('.card-team');
  teamCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * 10; 
      const rotateY = ((x - centerX) / centerX) * -10; 
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
  
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
    });
  });

  /* 5 Section */
  const communityReveal = ScrollReveal({
    distance: '100px',
    duration: 1500,
    easing: 'ease-in-out',
    reset: true,
    origin: 'bottom',
  });
  
  communityReveal.reveal('.community-1', { delay: 300, scale: 0.9, rotate: { x: 10, y: 10, z: 0 } });
  communityReveal.reveal('.community-2', { delay: 500, scale: 0.9, rotate: { x: -10, y: 0, z: 0 } });
  communityReveal.reveal('.community-3', { delay: 700, scale: 0.9, rotate: { x: 0, y: 10, z: 0 } });
  communityReveal.reveal('h1', { delay: 900, scale: 1.1 });
  communityReveal.reveal('p', { delay: 1200, scale: 0.95 });
  
  const buttons = document.querySelectorAll('.buttons a');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateZ(20px) scale(1.1)';
      button.style.transition = 'transform 0.3s ease';
    });
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateZ(0) scale(1)';
    });
  });

  /* Footer */
  ScrollReveal().reveal('.container-footer', {
    duration: 1000,
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    easing: 'ease-out',
    opacity: 0,
    reset: true
  });
  
  ScrollReveal().reveal('.li', {
    duration: 1000,
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    easing: 'ease-out',
    opacity: 0,
    interval: 200,
    reset: true
  });
  
  ScrollReveal().reveal('.copy', {
    duration: 1000,
    delay: 400,
    distance: '50px',
    origin: 'bottom',
    easing: 'ease-out',
    opacity: 0,
    reset: true
  });
  
  ScrollReveal().reveal('.network-footer a', {
    duration: 1000,
    delay: 500,
    distance: '50px',
    origin: 'bottom',
    easing: 'ease-out',
    opacity: 0,
    interval: 100,
    reset: true
  });



















































































});