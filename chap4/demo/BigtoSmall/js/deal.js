function dealto(opt)
{
	var str=document.getElementById('old').value;
	switch(opt){
		case 'upper':str=str.toUpperCase();
						break;
		case 'lower':str=str.toLowerCase();
						break;
	}
	document.getElementById('new').value=str;
}