

//COLLEGE DATA
let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
let inp = document.querySelector("input");
let list = document.querySelector("ul");

 function showcolleges(colleges){
     list.innerText = "";
for(col of colleges){
  
    let li = document.createElement("li");
    li.innerText= col.name;
    list.appendChild(li);
}

}
async function getCollege(){
  try{  let state = inp.value;
    let res = await axios.get(url+state);
    let colleges = res.data;

    showcolleges(colleges);
  }
  catch(err){
    console.log("error",err);

  }
}
btn.addEventListener("click",getCollege);