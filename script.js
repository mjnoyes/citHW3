var wrapperEle = document.body.querySelector(".wrapper");
var data = ["dog","fish","cat","shark","cat","dog"];

function writeElement(name){
  var ele = document.createElement("div")
  if(name === "dog"){
    ele.innerHTML="borf borf";
  }
  else if(name === "cat"){
    ele.innerHTML="I am a cat";
  }
  else{
    ele.innerHTML="I am an animal";
  }
  wrapperEle.appendChild(ele);
}

for(var i=0;i<data.length;i++){
  writeElement(data[i]);
}