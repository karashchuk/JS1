var MM = 0;
var NN = 0;

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
    }

}

//
// —оздание матрицы.
//
/*function createMatrix(var a,var b)
{
	var matrix = document.getElementById('matrix');
	var n = a * b;	
	
	for (var i = 0; i < n; i++)
	{
		var div = document.createElement('div');
		div.className = 'cell';
		matrix.appendChild(div);
	}
}

//
// „тение ¤чейки матрицы.
//
function getCell(row, col)
{
	// ‘ункци¤ принимает координаты ¤чейки
	// должна вернуть true, если она закрашена,
	// false, если не закрашена.
}

//
// ”становка ¤чейки матрицы.
//
function setCell(row, col, val)
{

	// ‘ункци¤ принимает координаты ¤чейки
	// если val == true, закрашивает ¤чейку,
	// иначе убирает закраску.
}

//
// “очка входа.
//
window.onload = function()
{
	createMatrix(20,20);	
	setCell(1, 1, true);

}	*/			
