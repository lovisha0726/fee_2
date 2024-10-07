const form = document.getElementById('profileForm');
const displayName = document.getElementById('displayName');
const displayBio = document.getElementById('displayBio');
const displayPicture = document.getElementById('displayPicture');
const imageUpload = document.getElementById('imageUpload');
const nameInput = document.getElementById('nameInput');
const bioInput = document.getElementById('bioInput');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const updatedName = nameInput.value;
    const updatedBio = bioInput.value;

    displayName.textContent = updatedName;
    displayBio.textContent = updatedBio;

    console.log('Form Submitted');
    console.log('Updated Name:', updatedName);
    console.log('Updated Bio:', updatedBio);
});

imageUpload.addEventListener('change', function() {
    const file = imageUpload.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            displayPicture.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});
