const fileInput = document.querySelector('[type="file"]');
const preview = document.getElementById('preview');

fileInput.addEventListener('change', () => {
// This function runs when file is selected

    const fr = new FileReader(); 
    // Creates new FileReader instance

    fr.readAsDataURL(fileInput.files[0]);
    // Reads user-selected file (other reading methods possible)
    
    fr.addEventListener('load', () => {
        // This function runs when reading is complete
        
        const url = fr.result;
        // Result always available on result property on the file reader

        console.log(url); 
        // data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA14AAAOaCA... (very long!)
        
    })

});