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
window.onkeydown=function(event){
    switch(event.keyCode){
        case 37:
            var r = selectedTd.parentElement.rowIndex;
            var c = selectedTd.cellIndex;
            var cnew=c-1;
            if(c<=1){cnew=1}
            selectedTd.classList.remove('highlight');
            selectedTd=myTable.rows[r].cells[cnew];
            selectedTd.classList.add('highlight');
            var cl=lit[cnew];
            if(c>1){
            document.getElementById('log').innerHTML+=cl+r+', ';                
            }
            break;
        case 38:
            var r = selectedTd.parentElement.rowIndex;
            var c = selectedTd.cellIndex;
            var rnew=r-1;
            if(r<=1){rnew=1}
            selectedTd.classList.remove('highlight');
            selectedTd=myTable.rows[rnew].cells[c];
            selectedTd.classList.add('highlight');
            var cl=lit[c];
            if(r>1){
            document.getElementById('log').innerHTML+=cl+rnew+', ';                
            }
            break;
        case 39:
            var r = selectedTd.parentElement.rowIndex;
            var c = selectedTd.cellIndex;
            var cnew=c+1;
            if(c>=8){cnew=8}
            selectedTd.classList.remove('highlight');
            selectedTd=myTable.rows[r].cells[cnew];
            selectedTd.classList.add('highlight');
            var cl=lit[cnew];
            if(c<8){
            document.getElementById('log').innerHTML+=cl+r+', ';                
            }
            break;
        case 40:
            var r = selectedTd.parentElement.rowIndex;
            var c = selectedTd.cellIndex;
            var rnew=r+1;
            if(r>=8){rnew=8}
            selectedTd.classList.remove('highlight');
            selectedTd=myTable.rows[rnew].cells[c];
            selectedTd.classList.add('highlight');
            var cl=lit[c];
            if(r<8){
            document.getElementById('log').innerHTML+=cl+rnew+', ';                
            }
            break;            
    }
}