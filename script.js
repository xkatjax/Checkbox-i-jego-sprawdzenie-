window.onload = function ()
{
    var myForm = document.getElementById("myForm");
    var submitButton = document.getElementById("myForm").submitButton;

    var info = document.getElementById("info");

    submitButton.onclick = function (e)
    {
        var tmpString = "";
        for (var i = 0; i < myForm.nazwaKursu.length; i++)
        {
            if (myForm.nazwaKursu[i].checked)
            tmpString += myForm.nazwaKursu[i].value + " ";
        }
        
        info.innerHTML += tmpString + "<br>";
      
        e.preventDefault ();
    };

    myForm.akceptacjaRegulaminu[0].onclick = function ()
    {
        submitButton.disabled = false;
    }

    myForm.akceptacjaRegulaminu[1].onclick = function ()
    {
        submitButton.disabled = true;
    }
};