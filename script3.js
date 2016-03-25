//var Mytable = document.getElementById('Mytable');
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
}