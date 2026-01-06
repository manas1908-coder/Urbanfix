document.addEventListener('DOMContentLoaded', () => {
    
   
    const reportForm = document.getElementById('reportForm');
    const successMessage = document.getElementById('successMessage');

    if (reportForm) {
        reportForm.addEventListener('submit', (e) => {
            e.preventDefault(); 

          
            reportForm.style.display = 'none';

            
            successMessage.classList.remove('hidden'); 
            
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    
    const fileInput = document.getElementById('fileInput');
    const fileLabelText = document.querySelector('.file-label span');
    const fileIcon = document.querySelector('.file-label i');

    if (fileInput) {
        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                
                fileLabelText.textContent = e.target.files[0].name;
                
                
                fileIcon.className = "fa-solid fa-check";
                fileIcon.style.color = "#00f5d4";
            }
        });
    }
});


