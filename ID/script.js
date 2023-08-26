function generateIDCard(name, collegeName, location, photo) {
    var photoPreview = document.getElementById('photo-preview');
    var namePreview = document.getElementById('name-preview');
    console.log(photoPreview)
    var collegeNamePreview = document.getElementById('student-id-preview');
    var locationPreview = document.getElementById('course-preview');
  
    console.log(locationPreview)

    photoPreview.src = URL.createObjectURL(photo);
  
    namePreview.innerHTML = `<span class="label">Name:</span> <span class="data">${name}</span>`;
    collegeNamePreview.innerHTML = `<span class="label">College:</span> <span class="data">${collegeName}</span>`;
    locationPreview.innerHTML = `<span class="label">Location:</span> <span class="data">${location}</span>`;
  }
  
  function validateForm() {
    var name = document.getElementById('name').value;
    var collegeName = document.getElementById('student-id').value;
    var location = document.getElementById('course').value;
    var photo = document.getElementById('photo').files[0];
  
    if (name && collegeName && location && photo) {
        console.log(name, collegeName, location, photo)
      generateIDCard(name, collegeName, location, photo);
    } else {
      alert('Please fill in all the fields.');
    }
  }
  