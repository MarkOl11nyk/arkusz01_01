function obliczRate() {
        
        var zaznaczonyReact = document.getElementById('react').checked;
        var zaznaczonyJS = document.getElementById('js').checked;
        var liczbaRat = parseInt(document.getElementById('raty').value);

        var miasto = document.getElementById('miasto').value;

        var cenaReact = 5000;
        var cenaJS = 3000;
        var suma = 0;

        if (zaznaczonyReact) 
        {
            suma = suma + cenaReact;
        }
        if (zaznaczonyJS) 
        {
            suma = suma + cenaJS;
        }

       
        if (isNaN(liczbaRat) || liczbaRat <= 0 || suma === 0) 
        {
            document.getElementById('wynik').innerHTML = "Wybierz kurs i wpisz poprawną liczbę rat.";
            return;
        }

        var rata = Math.round((suma / liczbaRat) * 100) / 100;

        document.getElementById('wynik').innerHTML ="Kurs odbędzie się w " + miasto + ".<br>" +"Koszt całkowity: " + suma + " zł.<br>" +
        "Płacisz " + liczbaRat + " rat po " + rata + " zł.";
    }

    window.onload = function () 
    {
        document.getElementById('przycisk').onclick = obliczRate;
    }
