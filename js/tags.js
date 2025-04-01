document.addEventListener('DOMContentLoaded', function() {
  const skillIcons = {
    'javascript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'html': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'css': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'react': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    'vue': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    'nodejs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'php': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
  };

  function handleSkillsInput(event) {
    if (['Enter', ','].includes(event.key)) {
      event.preventDefault();
      const input = event.target;
      const skill = input.value.trim();
      
      if (skill) {
        addSkillTag(skill.replace(',', ''));
        input.value = '';
        adjustTextareaHeight();
      }
    }
  }

  function addSkillTag(skillName) {
    const tagsContainer = document.getElementById('skills-tags');
    const normalizedSkill = skillName.toLowerCase();
    
    // Empêcher les doublons
    const existingTags = [...tagsContainer.querySelectorAll('.tag span:not(.tag-remove)')]
      .map(span => span.textContent.toLowerCase());
    if (existingTags.includes(normalizedSkill)) return;

    const tag = document.createElement('div');
    tag.className = 'tag';
    
    if (skillIcons[normalizedSkill]) {
      const icon = new Image();
      icon.src = skillIcons[normalizedSkill];
      icon.className = 'tag-icon';
      icon.alt = skillName;
      tag.appendChild(icon);
    }
    
    const skillText = document.createElement('span');
    skillText.textContent = skillName;
    tag.appendChild(skillText);
    
    const removeBtn = document.createElement('span');
    removeBtn.className = 'tag-remove';
    removeBtn.innerHTML = '&times;';
    removeBtn.onclick = () => {
      tag.remove();
      updateHiddenInput();
      adjustTextareaHeight();
    };
    
    tag.appendChild(removeBtn);
    tagsContainer.appendChild(tag);
    updateHiddenInput();
    adjustTextareaHeight();
  }

  function adjustTextareaHeight() {
    const wrapper = document.querySelector('.tags-input-wrapper');
    const tagsList = document.getElementById('skills-tags');
    
    // Ajustement dynamique de la hauteur
    if (tagsList.children.length > 0) {
      wrapper.style.minHeight = 'auto';
      wrapper.style.height = 'auto';
      const newHeight = Math.min(150, tagsList.scrollHeight + 50);
      wrapper.style.height = `${newHeight}px`;
    } else {
      wrapper.style.minHeight = '50px';
      wrapper.style.height = 'auto';
    }
  }

  function updateHiddenInput() {
    const tags = [...document.querySelectorAll('#skills-tags .tag span:not(.tag-remove)')]
      .map(span => span.textContent);
    document.getElementById('skills').value = tags.join(', ');
    
    // Gestion du checkmark
    const checkmark = document.querySelector('.tags-container .checkmark');
    if (checkmark) {
      checkmark.style.display = tags.length > 0 ? 'inline' : 'none';
    }
    
    if (typeof hideErrorMessage === 'function') {
      hideErrorMessage();
    }
  }

  // Initialisation
  const skillsInput = document.getElementById('skills-input');
  if (skillsInput) {
    skillsInput.addEventListener('keydown', handleSkillsInput);
    // Ajustement initial
    adjustTextareaHeight();
  }
});