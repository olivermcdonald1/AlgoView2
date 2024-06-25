
document.addEventListener('DOMContentLoaded', function () {
    const editor = CodeMirror.fromTextArea(document.getElementById('code'), {
      mode: 'javascript', // Set mode to JavaScript
      
      lineNumbers: true, // Show line numbers
      autofocus: true // Automatically focus on editor
    });
  
    // Set initial content of the editor (optional)
    editor.setValue('')
    // Function to run the code when the "Run" button is clicked
    document.getElementById('array').addEventListener('click', function () {
      // Clear console or output area (if any)
  
      try {
        // Execute the code in the editor

        eval(editor.getValue()); // Example: Assuming the function modifies variables in yourscript.js
        deleteArray()
        createArray(arr)
      } catch (e) {
        console.error('Error executing code:', e);
      }
    
    });
    
  });
  