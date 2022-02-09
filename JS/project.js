let count = 1;
document.getElementById("add_btn").addEventListener("click", function () {
  const addInput = document.getElementById("add_input");
  const addInputValue = document.getElementById("add_input").value;
  if( typeof addInputValue == 'number'){
      alert("Nooooooo")
  }
  if (addInput.value == "") {
    alert("Please Enter valid Data :(");
  } else {
    const tableBody = document.getElementById("t_body");
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
            <th>${count++}</th>
            <td class= "fw-bold">${addInput.value}</td>
            <td>
             <button class= "del_btn btn btn-danger">Delete</button>
             <button class= "succ_btn btn btn-success">Done</button>
            </td>
          `;
    tableBody.appendChild(tableRow);
    const delBtn = document.getElementsByClassName("del_btn");
    const succBtn = document.getElementsByClassName("succ_btn");
    const clearAll = document.getElementsByClassName("clear_btn");

    // Delete Button 
    for (const del of delBtn) {
      del.addEventListener("click", function (e) {
        e.target.parentNode.parentNode.style.display = "none";
      });
    }

    // Done Button 
    for (const succ of succBtn) {
      succ.addEventListener("click", function (e) {
        e.target.parentNode.parentNode.style.textDecoration = "line-through";
      });
    }
    addInput.value = "";

    for(const clear of clearAll){
        clear.addEventListener("dblclick", function () {
          tableBody.style.display = "none";
        });
    }
  }
});
