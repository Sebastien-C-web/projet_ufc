

async function afficherFighters() {
  let modal = document.getElementById("modals")
  let info1 = document.getElementById("infos")
  let info2 = document.getElementById("infos2")
  const reponse = await fetch("Fighters.json");
  const FIGHTERS = await reponse.json();
  new gridjs.Grid({
    
    columns: [{
      id:'FighterId',
      name:'FighterId',
      hidden:true
    },{
      id: 'FirstName',
      name:'FirstName'
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
    },{ 
      name: 'Actions',
      formatter: (cell, row) => {
        let index;
        for(let i = 0; i < FIGHTERS.length; i++){
          if(row.cells[0].data === FIGHTERS[i].FighterId){
            index = i;
          }
        }
        info1.innerText = `${FIGHTERS[index].FirstName} '${FIGHTERS[index].Nickname}' ${FIGHTERS[index].LastName} 
              Naissance: ${FIGHTERS[index].BirthDate.replace('T00:00:00','')}
              Catégorie: ${FIGHTERS[index].WeightClass} 
              Taille: ${FIGHTERS[index].Height} Poids: ${FIGHTERS[index].Weight}
              Allonge: ${FIGHTERS[index].Reach} 
              TKO: ${FIGHTERS[index].TechnicalKnockouts} 
              Défaites sur TKO: ${FIGHTERS[index].TechnicalKnockoutsLosses}
              Soumissions: ${FIGHTERS[index].Submissions} 
              Défaites sur soumissions: ${FIGHTERS[index].SubmissionsLosses} `;
        info2.innerText = `Coups directs par minutes: ${FIGHTERS[index].CareerStats.SigStrikesLandedPerMinute}
              Precision des coups directs: ${FIGHTERS[index].CareerStats.SigStrikeAccuracy} `;

        return gridjs.h('button', {
          className: 'py-2 mb-4 px-4 border rounded-md text-white bg-blue-600',       
          onClick: () => 
             modal.showModal(),

            //  alert(`${FIGHTERS[index].FirstName} '${FIGHTERS[index].Nickname}' ${FIGHTERS[index].LastName} 
            //   Birth:${FIGHTERS[index].BirthDate.replace('T00:00:00','')}
            //   WeightClass:${FIGHTERS[index].WeightClass} 
            //   Height:${FIGHTERS[index].Height} Weight:${FIGHTERS[index].Weight}
            //   Reach:${FIGHTERS[index].Reach} 
            //   TechnicalKnockouts:${FIGHTERS[index].TechnicalKnockouts} 
            //   TechnicalKnockoutsLooses:${FIGHTERS[index].TechnicalKnockoutsLosses}
            //   Submissions:${FIGHTERS[index].Submissions} 
            //   SubmissionsLosses:${FIGHTERS[index].SubmissionsLosses} `)

        }, 'More');
      }
    },
    ],
    data: FIGHTERS,
    search: true,
    pagination: {
      limit: 20
    },
  }).render(document.getElementById("test"));

}

afficherFighters()




