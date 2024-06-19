let arr = []
        document.addEventListener('DOMContentLoaded', function () {
            const editor = CodeMirror.fromTextArea(document.getElementById('code'), {
                lineNumbers: true,  
                mode: 'javascript'  
            });
            
            
            editor.setValue(JSON.stringify(arr));

            
            function updateArray() {
                try {
                    const updatedArr = JSON.parse(editor.getValue());
                    if (Array.isArray(updatedArr)) {
                        
                        arr = updatedArr;
                    
                        deleteArray()
                        createArray(arr)
                        array_created = true
                    } else {
                        throw new Error('Input is not a valid array');
                    }
                } catch (error) {
                    console.error('Invalid JSON:', error);
                }
                return arr
            }

            
            document.getElementById('array').addEventListener('click', updateArray);
        });