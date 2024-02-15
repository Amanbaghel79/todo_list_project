const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");
const task = localStorage.getItem("task")
  ? JSON.parse(localStorage.getItem("task"))
  : [];
  show();
 function show(){
  task.forEach((v,i)=>{
    const div = document.createElement("div");
    div.setAttribute("class","list");

    const innerdiv = document.createElement("div");
    const para =document.createElement("p");
    para.innerText=v.title;
    innerdiv.append(para);

    const span =document.createElement("span");
    span.innerText=v.description;

    innerdiv.append(span);
    
    const btn=document.createElement("button");
    btn.setAttribute("class","remove");
    btn.addEventListener("click",()=>{
        removetask();
        task.splice(i,1);
        localStorage.setItem("task",JSON.stringify(task));
        show();
    })
    btn.innerText="-";
    div.append(innerdiv);

    div.append(btn);
    container.append(div);
  })
 }
 function removetask(){
    task.forEach(()=>{
        const div = document.querySelector(".list");
        div.remove();
    })
 }

form.addEventListener("submit",(e)=>{
   e.preventDefault();
   removetask();
   task.push({
    title: title.value,
    description: description.value
   }
   );
   localStorage.setItem("task",JSON.stringify(task));
   show();
})


