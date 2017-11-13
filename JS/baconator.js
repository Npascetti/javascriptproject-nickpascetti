params = "url=baconipsum.com/api/?callback=?"
request = new ajaxRequest()
request.open("POST", "https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1", true)
request.setRequestHeader("Content-type",
	"application/x-www-form-urlencoded")
request.setRequestHeader("Content-length", params.length)
request.setRequestHeader("Connection", "close")
request.onreadystatechange = function()
{
	if (this.readyState == 4)
	{
		if (this.status == 200)
		{
			if (this.responseText != null)
			{

					var bacon = JSON.parse(this.responseText);
					document.getElementById('baconapi').innerHTML = bacon;




			}
			else alert("Ajax error: No data received")
		}
		else alert( "Ajax error: " + this.statusText)
	}
}
request.send(params)
function ajaxRequest()
{
	try
	{
		var request = new XMLHttpRequest()
	}
	catch(e1)
	{
		try
		{
			request = new ActiveXObject("Msxml2.XMLHTTP")
		}
		catch(e2)
		{
			try
			{
				request = new ActiveXObject("Microsoft.XMLHTTP")
			}
			catch(e3)
			{
				request = false
			}
		}
	}
	return request
}

