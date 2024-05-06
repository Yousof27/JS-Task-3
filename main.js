
let styleElement = document.createElement('style');
let code = document.createTextNode("*{box-sizing: border-box;}");
styleElement.appendChild(code);
document.head.appendChild(styleElement);
document.body.style.cssText = "margin: 0; font-family: Arial, Helvetica, sans-serif";
let myInput = document.querySelectorAll('[type=text]');
let classesBox = document.querySelector('.classes-list');
let boxCon = classesBox.lastElementChild;
let currentElement = myInput[1].nextElementSibling;
let classesArr;
let inputsStyle = 'width: 250px; padding: 10px; font-size: 16px; background-color: #fafafa; border: 1px solid #ccc; margin: 5px 5px';
let boxStyle = 'color: white; background-color: #f95731; padding: 10px; border-radius: 6px; font-weight: bold'
myInput[0].parentElement.style.cssText = 'max-width: 520px; margin: 50px auto; display: flex; flex-wrap: wrap; justify-content: center';
for (let i = 0; i < myInput.length; i++) {
    myInput[i].style.cssText = inputsStyle;
}
currentElement.style.cssText = 'width: 100%; padding: 20px; text-align: center; background-color: #eee; font-size: 18px; margin-top: 25px'
classesBox.style.cssText = 'width: 100%; padding: 20px; background-color: #eee; margin-top: 25px; text-align: center;';
classesBox.firstElementChild.style.cssText = 'margin: 0px; font-size: 14px';
boxCon.style.cssText = 'width: 100%; display: flex; flex-wrap: wrap; justify-content: center; gap: 15px; margin-top: 15px';
function addClass() {
    while (myInput[0].value !== '') {
        classesArr = myInput[0].value.toLowerCase().split(' ');
        for (let i = 0; i < classesArr.length; i++) {
            currentElement.classList.add(classesArr[i]);
        }
        myInput[0].value = ''
        updateBoxes();
    }
}
function removeClass() {
    while (myInput[1].value !== '') {
        classesArr = myInput[1].value.toLowerCase().split(' ');
        for (let i = 0; i < classesArr.length; i++) {
            currentElement.classList.remove(classesArr[i]);
        }
        myInput[1].value = ''
        updateBoxes();
    }
}
function updateBoxes() {
    while (boxCon.firstChild) {
        boxCon.firstChild.remove();
    }
    if (currentElement.classList.length === 0) {
        let boxContent = document.createTextNode(`No Classes To Show`);
        boxCon.appendChild(boxContent);
    } else {
        let c = currentElement.classList.value.split(' ').sort();
        for (let i = 0; i < c.length; i++) {
            let box = document.createElement('div');
            let boxContent = document.createTextNode(`${c[i]}`);
            box.appendChild(boxContent);
            box.style.cssText = boxStyle;
            boxCon.appendChild(box);
        }
    }
}
myInput[0].onblur = addClass;
myInput[1].onblur = removeClass;
