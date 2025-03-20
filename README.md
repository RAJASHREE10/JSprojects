******while****
let n=10;
let i=0;
while(i<=n){
    i++;
    console.log(i);
}

*****do while****
let n=10;
do{
    i++;
    console.log(i);
}while(i<=n);

****Functions are two types *****
  **user defined
     no arg
     no return
     no arg with return
     with arg no return
     with arg with return
     
  **pre defined
    array
    obj
    math
    string 
    date 
    tym
------------------------------------------------------------------------
              *****todo list******
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
</head>
<body>

    <form>
        <input type="text" id="todo" value="" placeholder="Enter a TODO"/>
        <input type ="button" value="ADD" id="btn"/>

    </form>
    <table>
        <thead>
            <tr>
                <th>SNO</th>
                <th>Description</th>
                <th>Action</th>
                
            </tr>
        </thead>
    </table>
   

    
<script src="./app.js"></script>
</body>
</html>
---------------------------------------------------------------------------------------------------
              ****array****
push --is a function which is to add the element in the end of array
          
let itemList =[];
let addItem = () =>{
    let item=document.getElementById('todo').value;
    itemList.push(item);
    console.log(itemList);
    document.getElementById('todo').value="";
    getItem();
}
let getItem =() =>{
    let emptystr="";
    let sno=0;
    itemList.forEach(function(value,index){
        sno +=1;
        emptystr += "<tr><td>" +sno+"</td><td>"+value+"</td><td>Remove</td></tr>"

    })
document.getElementById('tbl').innerHTML=emptystr;
}


-------------------------------------
