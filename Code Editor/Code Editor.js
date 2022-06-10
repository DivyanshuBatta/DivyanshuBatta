function output() {
    console.log('Hello');
let textarea = document.getElementById('code_input');
let textareaValue = document.getElementById('code_input').value;
let output = document.getElementById('output');
// console.log(textarea.value)
output.innerHTML = textareaValue;
textarea.style.display = 'none';
output.style.display = 'block';
}