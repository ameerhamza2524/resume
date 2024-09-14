document.addEventListener('DOMContentLoaded', () => {
    const experienceSection = document.getElementById('experience-section') as HTMLElement | null;
    const experienceList = document.getElementById('experience-list') as HTMLElement | null;
  
    if (experienceSection && experienceList) {
      // Check if the experience list is empty
      if (experienceList.childElementCount === 0) {
        experienceSection.style.display = 'none';
      }
    }
  });
  