document.getElementById('generate-resume-btn').addEventListener('click', function() {

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const linkedin = document.getElementById('linkedin').value;
    const github = document.getElementById('github').value;
    const workExperience = document.getElementById('work-experience').value;

    document.getElementById('resume-name').textContent = name;
    document.getElementById('resume-email').textContent = email;
    document.getElementById('resume-phone').textContent = phone;
    document.getElementById('resume-linkedin').href = linkedin;
    document.getElementById('resume-linkedin').textContent = linkedin;
    document.getElementById('resume-github').href = github;
    document.getElementById('resume-github').textContent = github;
    document.getElementById('resume-work-experience').textContent = workExperience;

    const imageUpload = document.getElementById('image-upload').files[0];
    const resumeImage = document.getElementById('resume-image');
    if (imageUpload) {
        const reader = new FileReader();
        reader.onload = function(e) {
            resumeImage.src = e.target.result;
            resumeImage.style.display = 'block';
        };
        reader.readAsDataURL(imageUpload);
    }

    document.getElementById('form-section').style.display = 'none';
    document.getElementById('resume-section').style.display = 'block';
    
});

document.getElementById('download-resume-btn').addEventListener('click', function() {
    const element = document.getElementById('resume');
    html2pdf().from(element).save('resume.pdf');
});