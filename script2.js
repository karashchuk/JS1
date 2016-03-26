var MM = 0;
var NN = 0;

function getRandomInt(minimum, maximum)
{
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

function createTable()
{
    var myTable = document.getElementById('Mytable');
    var myRow = 8;
    var myCol = 9

    for (var i = 0; i < myRow; i++)
    {
        var nRow = document.createElement('tr');
        myTable.appendChild(nRow);
        var NewRow=myTable.children[i+1];
        var nCol = document.createElement('td');
        //td.className = 'name';
        NewRow.appendChild(nCol);
        NewRow.children[0].style.border="1px solid transparent";
        NewRow.children[0].innerHTML= "" + (i + 1);
        
        for (var j = 1; j < myCol; j++)
        {
            var nCol = document.createElement('td');
            NewRow.appendChild(nCol);
        }
    }
    
    for(j = 1; j <= myRow; j++)
    {
        var i;
        if(j%2 == 0){
            i = 2;
        }
        else{
            i = 1;
        }
        for(i; i < myCol; i+= 2)
        {
           myTable.children[j].children[i].style.backgroundColor="gray"; 
        }
    }
}

window.onload = function()
{
    var btn = document.getElementById('btnRun');
    var inpM = document.getElementById('M');
    var inpN = document.getElementById('N');
    createTable();
}


/*//var Mytable = document.getElementById('Mytable');
var myTable = document.getElementById('Mytable');

var selectedTd;

myTable.onclick = function(event)
{
  var target = event.target;

  while (target != this) {
    if (target.tagName == 'TD') {
      highlight(target);
      return;
    }
    target = target.parentNode;
  }
}

function highlight(node) 
{
  if (selectedTd) {
    selectedTd.classList.remove('highlight');
  }
  selectedTd = node;
  selectedTd.classList.add('highlight');
}*/