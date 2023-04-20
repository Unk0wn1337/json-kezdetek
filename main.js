let LISTA = [];
let POKEMON = []
$(function () {
console.log("betöltődés után, ",LISTA);
let vegpont = "adatoj.json";
adatBeolvas(vegpont,LISTA, megjelenit);

console.log("adatbeolvas() metódus után", LISTA);

vegpont = "https://pokeapi.co/api/v2/pokemon/ditto";
adatBeolvas(vegpont, POKEMON,pokemonMegjelenit);


});
function adatTorles(vegpont,id){
    vegpont=vegpont+","+id
    console.log(
    fetch(vegpont, {
        method: "DELETE",
    })
        .then((response) => response.json());
        .then((data) => {
            console.log(data);
        })
        .catch((error) => console.log(error);
    )


}

function adatBeolvas(vegpont, lista,callbackFv) {
    
    fetch (vegpont, {
        method: "GET",
        
    })
        .then((response) => response.json()) 
        .then((data) => {
            
            lista = data;
            callbackFv(lista);
            

        })   
        .catch((error) => console.log(error));
    }
    function megjelenit (lista) {
        console.log("megjelenit",lista)

    }
    function pokemonMegjelenit(adat) {
        console.log(adat);
        console.log(adat.sprites.front_default  );
        // let eleresiUt=adat.sprites.front_default;
        // let pokemonNev = adat.name;
        const pokeObj = {
            eleres: adat.sprites.front_default,
            pokemonNev:adat.name,
            
        }
        let megjelenit = $(".pokemon");
        let pokenev= `<h1>${pokemonNev}</h1> `+`<img src=${Pokobj.eleres}>`
        console.log(pokenev);
        megjelenit.html(pokenev); 
        
    }



