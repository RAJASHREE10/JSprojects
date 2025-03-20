let itemList = [];

document.getElementById('btn').addEventListener('click', addItem);

function addItem() {
    let item = document.getElementById('todo').value;
    if (item.trim() !== "") { 
        itemList.push(item);
        document.getElementById('todo').value = ""; 
        getItem();
    }
}

function getItem() {
    let emptystr = "";
    let sno = 0;
    itemList.forEach(function(value, index) {
        sno += 1;
        emptystr += `<tr>
                        <td>${sno}</td>
                        <td>${value}</td>
                        <td><button onclick="removeItem(${index})">Remove</button></td>
                     </tr>`;
    });
    document.getElementById('tbl').innerHTML = emptystr;
}

function removeItem(index) {
    itemList.splice(index, 1); 
    getItem(); 
}
