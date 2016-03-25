//var Mytable = document.getElementById('Mytable');
var myTable = document.getElementById('Mytable');

var selectedTd;
var lit=['0','A','B','C','D','E','F','G','H']
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
    var r = selectedTd.parentElement.rowIndex;
    var c = selectedTd.cellIndex;
    var cl=lit[c];
    document.getElementById('log').innerHTML+=' '+cl+r+', ';
}
window.onkeypress=function(event){
    alert(event.keyCode);
}