function es1(){

    // Creare un array di oggetti: ogni oggetto descriverà
    // una bici da corsa con le seguenti proprietà: nome e peso.
    // Stampare a schermo la bici con peso minore.

   let biciclette = [

       {'nome' : 'bici1' , 'peso' : 10 },
       {'nome' : 'bici2' , 'peso' : 13 },
       {'nome' : 'bici3' , 'peso' : 5 },
       {'nome' : 'bici4' , 'peso' : 7 },

    ]

     let [bici1,bici2,bici3,bici4] = biciclette

     console.log(bici3);
     console.log(bici3['nome'] + ' ' + bici3['peso']);

     let lightBike = {nome : '', peso: 100}


     for(let i = 0; i < biciclette.length; i++){

       const bike = biciclette[i];
       let {peso} = bike;

       if (peso < lightBike['peso']){

         lightBike = bike;

       }
     }

     console.log(lightBike);

}

function es2e3(){

     // Creare un array di oggetti di squadre di calcio.
     // Ogni squadra avrà diverse proprietà:
     // nome, punti fatti, falli subiti.
     // Nome sarà l'unica proprietà da compilare,
     // le altre saranno tutte settate a 0.

     let teams = [

      {'nome': 'juve', 'punti fatti' : 0, 'falli subiti': 0},
      {'nome': 'inter', 'punti fatti' : 0, 'falli subiti': 0},
      {'nome': 'roma', 'punti fatti' : 0, 'falli subiti': 0},
      {'nome': 'lazio', 'punti fatti' : 0, 'falli subiti': 0},

    ];

    // Generare numeri random al posto degli 0 nelle proprietà:
    // punti fatti e falli subiti.
    // Usando la destrutturazione creiamo un nuovo array
    // i cui elementi contengono solo nomi e falli subiti
    // e stampiamo tutto in console.

    let teams2 = []
    var nomeT = teams['nome']

    for (let i = 0; i < teams.length; i++ ){

      const team = teams[i];
      var nomeT = team['nome']

      let puntirnd = Math.floor(Math.random() * 40) + 1
      let fallirnd = Math.floor(Math.random() * 50) + 1

      team['punti fatti'] = puntirnd
      team['falli subiti'] = fallirnd

      teams2.push(nomeT)
      teams2.push(fallirnd)

}

console.log(teams);
console.log(teams2);

}


function init() {

console.log('hello');
es1()
es2e3()

}

$(document).ready(init)
