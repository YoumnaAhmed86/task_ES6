async function fetchUsers() {
    var response =await fetch("https://jsonplaceholder.typicode.com/users");
    var users=await response.json();
    return users;
}
function showUsers(users){
    var Tbody=document.getElementById("tbody");
    Tbody.innerHTML=" ";
    users.forEach(user =>{
        var tr=document.createElement("tr");
        tr.innerHTML=`
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.address.city}</td>
        <td>${user.phone}</td>
        <td>${user.company.name}</td>
        <td>${user.website}</td>
        <td> <button id="btn2" onclick="deleteUser(this)">Delete</button> </td>
        `;
        Tbody.appendChild(tr);
    })
}
function deleteUser(button){
    var tr=button.parentElement.parentElement;
    tr.remove();
}
document.getElementById("btn1").addEventListener("click",async()=>{
    var users=await fetchUsers();
    showUsers(users);
})