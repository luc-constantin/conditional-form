const showOptions = () => {
    const device = document.getElementById('device').value;
    const iphoneOptions = document.getElementById('iphoneOptions');
    const ipadOptions = document.getElementById('ipadOptions');
  
    iphoneOptions.classList.add('hidden');
    ipadOptions.classList.add('hidden');
  
    if (device === 'iphone') {
      iphoneOptions.classList.remove('hidden');
    } else if (device === 'ipad') {
      ipadOptions.classList.remove('hidden');
    }
  };
  
  const showColor = () => {
    const iphoneModel = document.getElementById('iphoneModel').value;
    const ipadModel = document.getElementById('ipadModel').value;
    const iphoneColor = document.getElementById('iphoneColor');
    const iphoneStorage = document.getElementById('iphoneStorage');
    const iphoneOtherStorage = document.getElementById('iphoneOtherStorage');
    const ipadColor = document.getElementById('ipadColor');
    const ipadStorage = document.getElementById('ipadStorage');
    const ipadOtherStorage = document.getElementById('ipadOtherStorage');
  
    iphoneColor.classList.add('hidden');
    iphoneStorage.classList.add('hidden');
    iphoneOtherStorage.classList.add('hidden');
    ipadColor.classList.add('hidden');
    ipadStorage.classList.add('hidden');
    ipadOtherStorage.classList.add('hidden');
  
    if (iphoneModel === 'other') {
      iphoneOtherStorage.classList.remove('hidden');
    } else if (iphoneModel !== '') {
      iphoneColor.classList.remove('hidden');
      iphoneStorage.classList.remove('hidden');
    }

 
  
    if (ipadModel === 'other') {
      ipadOtherStorage.classList.remove('hidden');
    } else if (ipadModel !== '') {
      ipadColor.classList.remove('hidden');
      ipadStorage.classList.remove('hidden');
    }
  };
  
  document.getElementById('myForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://script.google.com/macros/s/your_google_script_id/exec', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Successful submission
        alert('Form submitted successfully!');
        form.reset();
      } else if (xhr.readyState === 4 && xhr.status !== 200) {
        // Error in submission
        alert('An error occurred while submitting the form as it is not connected to an API for g-sheet.');
      }
    };
    xhr.send(new URLSearchParams(formData).toString());
  });
  