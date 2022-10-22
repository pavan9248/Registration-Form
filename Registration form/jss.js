

var list1=[];
var list2=[];
var list3=[];
var list4=[];
var list5=[];

var n=1;
var x=0;
function Addrow()
{
    var addrow=document.getElementById("show");
    var nrow=addrow.insertRow(n);
    list1[x]=document.getElementById("fun").value;
    list2[x]=document.getElementById("last").value;
    list3[x]=document.getElementById("mail").value;
    list4[x]=document.getElementById("age").value;
    list5[x]=document.getElementById("mob").value;
    
    if(!list1[x]||!list2[x]||!list3[x]||!list4[x]||!list5[x])
    {
        alert("Fill the details completely");
        return;
    }
    var cell1=nrow.insertCell(0);
    var cell2=nrow.insertCell(1);
    var cell3=nrow.insertCell(2);
    var cell4=nrow.insertCell(3);
    var cell5=nrow.insertCell(4);
     
    cell1.innerHTML=list1[x];
    cell2.innerHTML=list2[x];
    cell3.innerHTML=list3[x];
    cell4.innerHTML=list4[x];
    cell5.innerHTML=list5[x];
    
    n++;
    x++;

}