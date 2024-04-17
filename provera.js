const form = document.getElementById("formular");



if (form == null)
    console.log("nemamo formular");

form.addEventListener('submit', function(ev) {
    const greska = document.querySelector("#greska");

    let polje = document.querySelector('#ime_prezime');

    const ime_prezime = polje.value.trim();
    const maxDuzina = polje.maxLength || 30;
    if (ime_prezime == "" || ime_prezime.length > maxDuzina) {

        greska.innerHTML = "Niste lepo uneli podatke za ime i prezime"
            //greska.textContent = "Niste lepo uneli podatke za ime i prezime";
        polje.focus();

        ev.preventDefault();
        return false;
    }

    
    

    
    polje = document.querySelector('#datum_rodjenja');
    const datum = polje.value;

    const godina = parseInt(datum.substr(0, 4));
    const mesec = parseInt(datum.substr(5, 2));
    const dan = parseInt(datum.substr(8, 2));
    
    if (isNaN(godina) || isNaN(mesec) || isNaN(dan) ||
        dan < 1 || dan > 31 || mesec < 1 || mesec > 12 || godina < 0) {
        greska.innerHTML = "Niste lepo uneli datum";
        
        //polje.focus();
        ev.preventDefault();
        return false;
    }
    
    if (datum.charAt(4) != '-' || datum.charAt(7) != '-') {
        greska.innerHTML = "Niste lepo uneli datum";
        
        //polje.focus();
        ev.preventDefault();
        return false;
    }
        
        var uGod = Date().getFullYear - godina;
        
        if(uGod < 18) {
            greska.innerHTML = "Morate imati makar 18 godina";
        
            //polje.focus();
            ev.preventDefault();
            return false;
        }

    /*provera email polja.
    Svaki mejl mora da sadrzi @ znak i da se zavrsava nekim 
    domenskim imenom i pre njega tackom
     */

    polje = document.getElementById("email");
    const email = polje.value.trim();
    if (email.indexOf('@') == -1 || email == '' || email.lastIndexOf('.') == -1 || email.lastIndexOf('.') < email.indexOf('@')) {
        greska.innerHTML = "Niste uneli ispravnu email adresu";
        //polje.focus();
        ev.preventDefault();
        return false;
    }

    polje = document.querySelector('#jmbg');    
    const jmbg = polje.value;
    //const maxD = polje.maxLength || 13;
    if (jmbg == "" || jmbg.length != 13) {

        greska.innerHTML = "Niste lepo uneli jmbg"
            
        //polje.focus();

        ev.preventDefault();
        return false;
    }
    
    polje = document.querySelectorAll('input[name="pol"]');
    let checked = false;

    for (let i = 0; i < polje.length; i++) {
        if (polje[i].checked) {
            checked = true;
            break;
        }
    }
    if (checked == false) {
        greska.innerHTML = "Niste cekirali pol";

        ev.preventDefault();
        return false;

    } 
    
    
    var date1p = document.getElementById("#datum_od").value;
    var date2p = document.getElementById("#datum_do").value;
    var date1 = new Date(date1p);  
    var date2 = new Date(date2p);  
    var diffTime = date2.getTime() - date1.getTime();
    var diffDays = diffTime / (1000 * 60 * 60 * 24);
    console.log(print(diffDays));
    if(diffDays > 10) {
        greska.innerHTML = "Rezervacija ne moze biti duza od 30 dana";
        
        ev.preventDefault();
        return false;
    }

   
   

    
});
//ubacuje novu unos za datum
function addCode() {
    
    var a = 1, b = 2;
    var div = document.createElement('div');
    div.setAttribute('class', 'post block bc2');
    div.innerHTML = `   
    
    <fieldset class="form-group" id="addAff">
            <legend>Licni podaci</legend>
            <div class="form-group">
                <label for="ime_prezime">Ime i prezime</label>
                <input type="text" id="ime_prezime" name="ime_prezime" maxlength="30" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="datum_rodjenja">Datum rodjenja</label>
                <input type="date" id="datum_rodjenja" name="datum_rodjenja" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" class="form-control" autocomplete="off" required>
            </div>  
            <div class="form-group">
                <label for="email">JMBG</label>
                <input type="email" id="jmbg" name="jmbg" class="form-control" size="13" required>
            </div> 
            <div class="col-6">
                <label>Pol</label>
                <div class="form-check form-check-inline">
                    <input name="pol" value="1" type="radio" id="muski" class="grupa_radio_dugmica"/><label for="muski" >Muski</label>
                </div>
                <div class="form-check form-check-inline">
                    <input name="pol" value="2" type="radio" id="zenski" class="grupa_radio_dugmica" /><label for="zenski">Zenski</label>
                </div>
                
            </div>
        </fieldset>
       
`;
    document.getElementById('d1').appendChild(div);
    
    }


    function removeLocation() {

        var select = document.getElementById('d1');
        select.removeChild(select.lastChild);

    } 
            
    const vm = Vue.createApp({
        data() {
            return {
                destinacije: [
                            {naziv: "Karibi", osoba: "2/3/4", cena:"1700/2400/3000"},
                            {naziv: "Maldivi", osoba: "2/3/4/5", cena:"1700/2400/3000/3300"},
                            {naziv: "Zanzibar", osoba: "2/3/4/5", cena:"1700/2400/3050/3400"},
                            {naziv: "Bora-Bora", osoba: "2/3/4/5", cena:"1700/2400/3100/3300"}
                        ],
                dest : ""
            }
        },
        methods: {
            nekaFun: function() {
                let ff = this.dest;
                return this.destinacije.filter(function(el) {
                    return el.naziv == ff;
                });
            }
        }
        
    }).mount("#ceneLista");



