class Pointer {
    constructor(type,buttonID) {
        this.type = type;
        this.buttonStates = {};
        this.previousPointer = null;
        this.swapped = false;
        this.lastButtonID = null;
        
    }
    

    create(buttonID) {
    
        this.removePointer(this.lastButtonID);
        this.lastButtonID = buttonID;
        this.buttonStates[buttonID] = true; 
    
        let existingPointer = document.getElementById(this.type + buttonID);
        if (existingPointer) {
            existingPointer.parentNode.removeChild(existingPointer); 
        }
    
        let pointerElement = document.createElement('p');
        pointerElement.textContent = this.type === '__pointer' ? 'j' : 'i'; 
        pointerElement.setAttribute('id', this.type + buttonID);
        document.getElementById(buttonID).appendChild(pointerElement); 
    }
    
   
    deleteElement() {
        let elementToRemove = document.getElementById(this.lastButtonID);
        if (elementToRemove) {
            elementToRemove.parentNode.removeChild(elementToRemove);
        } else {
            alert('Element not found');
        }
    }

    
    movePointerLeft() {
        let currentButtonID = parseInt(this.lastButtonID, 10);
    
        
        if (currentButtonID >0) {
            let buttonID = (currentButtonID - 1).toString();
            
            
            while (!document.getElementById(buttonID) && currentButtonID > 0) {
                currentButtonID--;
                buttonID = currentButtonID.toString();
            }
            
            this.removePointer(this.lastButtonID);
            this.create(buttonID);
        }
    }
    

movePointerRight() {
    let currentButtonID = parseInt(this.lastButtonID, 10);
    let maxIndex = arr.length - 1; 

    if (currentButtonID < maxIndex) {
        let buttonID = (currentButtonID + 1).toString();
        while (!document.getElementById(buttonID) && currentButtonID < maxIndex) {
            currentButtonID++;
            buttonID = currentButtonID.toString();
        }
        this.removePointer(this.lastButtonID);
        this.create(buttonID);
    }
}

    removePointer(buttonID) {
        let existingPointer = document.getElementById(this.type + buttonID);
        if (existingPointer) {
            existingPointer.parentNode.removeChild(existingPointer);
        }
    }

    /*swapWith(otherPointer) {
        let thisPointerElement = document.getElementById(this.type + this.lastButtonID);
        let otherPointerElement = document.getElementById(otherPointer.type + otherPointer.lastButtonID);
    
        if (!thisPointerElement || !otherPointerElement) {
            alert("One or both pointers do not exist.");
            return;
        }
    
        let tempText = thisPointerElement.textContent;
        thisPointerElement.textContent = otherPointerElement.textContent;
        otherPointerElement.textContent = tempText;
    
     
        let tempId = thisPointerElement.id;
        thisPointerElement.id = otherPointerElement.id;
        otherPointerElement.id = tempId;
    
       
        let tempLastButtonID = this.lastButtonID;
        this.lastButtonID = otherPointer.lastButtonID;
        otherPointer.lastButtonID = tempLastButtonID;
}
        */

    
swapValues(otherPointer) {
    
    let thisPointerIndex = parseInt(this.lastButtonID, 10)-1;
    let otherPointerIndex = parseInt(otherPointer.lastButtonID, 10)-1;
    
    if (!isNaN(thisPointerIndex) && !isNaN(otherPointerIndex) &&
    
    typeof arr[thisPointerIndex] !== 'undefined' && typeof arr[otherPointerIndex] !== 'undefined') {
   
    [arr[thisPointerIndex], arr[otherPointerIndex]] = [arr[otherPointerIndex], arr[thisPointerIndex]];
    let thisButton = document.getElementById(this.lastButtonID);
    let otherButton = document.getElementById(otherPointer.lastButtonID);
    thisButton.textContent = arr[thisPointerIndex];
    otherButton.textContent = arr[otherPointerIndex];
    
    let buttonID = this.lastButtonID
    pointerI.create(buttonID)
    buttonID = otherPointer.lastButtonID
    pointerJ.create(buttonID);
    
    }
    
    else {
        alert("Error: Two pointers cannot be found")
    }


}

    }



let buttonStates = {}
let array_created = false;
let arrSize = 0;
let num = arr.length - 1;
let pointerType = '_pointer'; 
let swapped = false;
const pointerI = new Pointer('_pointer');
const pointerJ = new Pointer('__pointer');
const buttonI = document.getElementById('i')
        buttonI.style.backgroundColor = 'black'
        buttonI.style.color = 'white'

document.getElementById("swapvalues").addEventListener("click",function(event){
    pointerI.swapValues(pointerJ);
})

document.getElementById("i").addEventListener("click", function(event) {
    if (event.target && event.target.nodeName === "BUTTON") {
        pointerType = '_pointer'; 
        const buttonJ = document.getElementById('j')
        buttonJ.style.backgroundColor = 'white'
        buttonJ.style.color = 'black'
        const buttonI = document.getElementById('i')
        buttonI.style.backgroundColor = 'black'
        buttonI.style.color = 'white'
    }
});

document.getElementById("j").addEventListener("click", function(event) {
    if (event.target && event.target.nodeName === "BUTTON") {
        pointerType = '__pointer'; 
        const buttonJ = document.getElementById('j')
        buttonJ.style.backgroundColor = 'black'
        buttonJ.style.color = 'white'
        const buttonI = document.getElementById('i')
        buttonI.style.backgroundColor = 'white'
        buttonI.style.color = 'black'
    }
});

document.getElementById("buttons").addEventListener("click", function(event) {
    if (event.target && event.target.nodeName === "BUTTON") {
        const buttonID = event.target.id;
        
        
        if (pointerType === '_pointer') {
            pointerI.create(buttonID);
            
        } else {
            pointerJ.create(buttonID);
            
        }
    }
});



document.getElementById("deletearray").addEventListener("click", function(event) {
    if (event.target && event.target.nodeName === "BUTTON" && array_created==true) {
        deleteArray(arr);
        array_created = false;
        arrSize = 0
        
        num = arr.length-1
       
    }
});


function createArray(arr){
    for (let i = 0; i < arr.length; i++) {
        let array_item = document.createElement('button');
        const buttonID = `${arr[i]}`;
        array_item.setAttribute("id", buttonID);
        array_item.textContent = buttonID;
        document.getElementById("buttons").appendChild(array_item);
        buttonStates[buttonID] = false
    }

}

function deleteArray() {
    arr_created = false
    let buttonsContainer = document.getElementById("buttons");
    
    while (buttonsContainer.firstChild) {
        buttonsContainer.removeChild(buttonsContainer.firstChild);
    }
    
    buttonStates = {};
    previousPointer = null;
}

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;


    if (e.keyCode == '37') {
       if (pointerType == '__pointer')
        pointerJ.movePointerLeft()
       else{
        pointerI.movePointerLeft()
       }
    }
    else if (e.keyCode == '39') {
        if(pointerType == '__pointer'){
       pointerJ.movePointerRight()}
        else{
            pointerI.movePointerRight()

        }}
   
    
         
    else if(e.keyCode =='74'){
        pointerType = '__pointer'
        const buttonJ = document.getElementById('j')
        buttonJ.style.backgroundColor = 'black'
        buttonJ.style.color = 'white'
        const buttonI = document.getElementById('i')
        buttonI.style.backgroundColor = 'white'
        buttonI.style.color = 'black'
    }
    
    else if(e.keyCode =='73'){
        pointerType = '_pointer'
        const buttonI = document.getElementById('i')

        buttonI.style.backgroundColor = 'black'
        buttonI.style.color = 'white'
        const buttonJ = document.getElementById('j')
        buttonJ.style.backgroundColor = 'white'
        buttonJ.style.color = 'black'
        
    }
    
    }
        
