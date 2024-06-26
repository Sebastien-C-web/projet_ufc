


async function afficherFighters() {
  const reponse = await fetch("Fighters.json");
  const FIGHTERS = await reponse.json();
  new gridjs.Grid({
    columns: [{
      id: 'FirstName',
      name:'LastName'
    },{
      id: 'Nickname',
      name: 'Nickname'
    }, {
      id: 'LastName',
      name: 'LastName'
    }, {
      id: 'WeightClass',
      name:'WeightClass'
    },{
      id: 'Wins',
      name: 'Wins'
    },{
      id: 'Losses',
      name:'Losses'
    }
    ],
    data: FIGHTERS,
    search: true,
    pagination: {
      limit: 20
    },
  }).render(document.getElementById("test"));
}
afficherFighters()




