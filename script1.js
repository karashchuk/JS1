var MM = 0;
var NN = 0;
var alfa=["А","Б","В","Г","Д","Е","Ё","Ж","З","И","Й","К","Л","М","Н","О","П","Р","С","Т","У","Ф","Х","Ц","Ч","Ш","Щ","Ъ","Ы","Ь","Э","Ю","Я"];
var min=0;
var max=alfa.length-1;

function getRandomInt(minimum, maximum)
{
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

function createMatrix(MM,NN)
{
    var matrix = document.getElementById('matrix');
    var n = MM * NN;	

    for (var i = 0; i < n; i++)
    {
        var div = document.createElement('div');
        div.className = 'cell';
        matrix.appendChild(div);
    }
}
window.onload = function()
{
    var btn = document.getElementById('btnRun');
    var inpM = document.getElementById('M');
    var inpN = document.getElementById('N');

    document.getElementById('btnRun').onclick = function()
    {
        MM = parseFloat(inpM.value);
        NN = parseFloat(inpN.value);
        var mWidth=MM*20;
        var mHight=NN*20;
        document.getElementById('matrix').style.width=mWidth+'px';
        document.getElementById('matrix').style.height=mHight+'px';
        
        createMatrix(MM,NN);
        btn.disabled = true;
        var n=MM*NN;
        for(var i=0; i<n; i++)
        {
            var lit = getRandomInt(min,max);
            var coli='#'+getRandomInt(100,999);
            document.getElementsByClassName('cell')[i].innerHTML=alfa[lit];
            document.getElementsByClassName('cell')[i].style.backgroundColor=coli;            
        }
    }

}
