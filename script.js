
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.hidden').forEach(element => {
  observer.observe(element);
});

window.addEventListener('scroll', () => {
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      item.classList.add('visible');
    }
  });
});

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "size": {
      "value": 3,
      "random": true
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out"
    },
    "line_linked": {
      "enable": true,
      "opacity": 0.2
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      }
    }
  }
});




window.addEventListener('scroll', () => {
  const timelineItems = document.querySelectorAll('.timeline-item');
  const line = document.getElementById('timeline-line');
  

  timelineItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      item.classList.add('visible');
    }
  });

 
  const lineHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;
  line.style.height = `${(scrolled / lineHeight) * 100}vh`;
});

window.addEventListener('scroll', () => {
  const skills = document.querySelectorAll('.skill');
  skills.forEach(skill => {
    const rect = skill.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      skill.classList.add('visible');
      const skillProgress = skill.querySelector('.skill-progress');
      const skillValue = skill.getAttribute('data-skill');
      skillProgress.style.width = `${skillValue}%`;
    }
  });
});
