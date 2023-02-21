let mylist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < mylist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("X");
  span.className = "close";
  span.appendChild(txt);
  mylist[i].appendChild(span);
}
let close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    let div = this.parentElement;
    div.style.display = "none";
  }
}
let list = document.querySelector('ul').onclick = (ev) => {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  } else {
    false;
  }
}
document.getElementById("add").onclick = () => {
  let li = document.createElement("li");
  let input = document.getElementById("myInput").value;
  let t = document.createTextNode(input);
  li.appendChild(t);
  if (input === "") {
    console.log("Please Write something");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("X");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = () => {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}
