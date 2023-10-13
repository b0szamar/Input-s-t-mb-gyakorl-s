function Beolvasas(){
    var txt=document.getElementById("inp").value;
    

    adatok=[];
    if (txt!="" || txt!=" ") { 
        adatok=txt.split(",")
        document.getElementById("inp").value="";
    }

    let text=``
    for (let i = 0; i < adatok.length; i++) {
        
        text+=  `<div class="card">
          ${adatok[i]}
          </div>`
    }
    document.getElementById("kiiras").innerHTML = text;
}