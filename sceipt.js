document.addEventListener('DOMContentLoaded', function () {
    var experienceSection = document.getElementById('experience-section');
    var experienceList = document.getElementById('experience-list');
    if (experienceSection && experienceList) {
        // Check if the experience list is empty
        if (experienceList.childElementCount === 0) {
            experienceSection.style.display = 'none';
        }
    }
});
