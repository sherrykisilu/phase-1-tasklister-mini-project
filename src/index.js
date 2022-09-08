document.addEventListener("DOMContentLoaded", () => {
  const form=document.getElementById("create-task-form")
 form.addEventListener("submit",function(event){
  event.preventDefault();
  displayData(event.target.new_task_description.value)
  form.reset()
 })
function displayData(task){
const input=document.getElementById("tasks");
const data=document.createElement('li');
const button=document.createElement("button")
button.addEventListener("click",function(event){
event.target.parentNode.remove();
})
data.textContent=`${task}`;
button.textContent=" x ";
data.appendChild(button);
input.appendChild(data);
}
});
