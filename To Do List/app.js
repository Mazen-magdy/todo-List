let color = document.getElementById('color');
let form = document.getElementById('form');
let text = document.getElementById('text');
let submit = document.getElementById('submit');
let container = document.getElementById('container');
let theNumberOfDivs = container.childElementCount;
let innerInput = container.getElementsByTagName('input');
let initial = -1;
// let selections = innerDiv.getElementsByTagName('input');
let completed;
let arr = [];
let cap = function(string){
  let result = string.replace(string.charAt(0), string.charAt(0).toUpperCase())
  return result;
}
submit.addEventListener('click', () => {
  if(text.value !==""){
  event.preventDefault();
  let div = document.createElement('div');
  let secondDiv = document.createElement('div');
  let h1 = document.createElement('h1');
  let doo = document.createTextNode(cap(text.value));
  let select = document.createElement('input');
  let close = document.createElement('button');
  let x = document.createTextNode('x')
  select.type = 'checkbox';
  arr.push(select.checked);
  select.addEventListener('change',() => {
    let parent = select.parentElement;
    let grandparent = parent.parentElement;
  if(select.checked){
    grandparent.style.opacity = '0.4';
  }
    else{
      grandparent.style.opacity = '1';
    }
  });
    close.addEventListener('click',() => {
      let parent = close.parentElement;
      parent.style.display = 'none';
    });
  if(color.value === '#000000'){
    div.style.color = 'white';
    div.style.border = '3px solid white';   // doesn't run fix it
    }
  else{
      div.style.border = '3px solid #000';
    };
  div.style.backgroundColor = color.value;
  h1.appendChild(doo);
  close.appendChild(x);
  secondDiv.appendChild(select);
  secondDiv.appendChild(h1);
  div.appendChild(secondDiv);
  div.appendChild(close);
  container.appendChild(div);
  text.value = "";
  color.value = 'black';}
  else {
    alert("you have to fill the text input")
  }
})
