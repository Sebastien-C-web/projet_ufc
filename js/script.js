let k = 1;

function createModal() {
  let section = document.getElementById("section_creation");
  let modal = document.createElement("dialog");
  modal.setAttribute('id', "modal_" + k);
  let formodal = document.createElement("form");
  formodal.setAttribute("method", "dialog");

  section.appendChild(modal);
  modal.appendChild(formodal);

  let div_img = document.createElement("div");
  div_img.classList.add("flex", "justify-center", "my-4");

  formodal.appendChild(div_img);

  let image_smash = document.createElement("img");
  image_smash.src = "img/modal_img.png";
  image_smash.setAttribute("id", "img_mod")

  div_img.appendChild(image_smash);

  let div_p = document.createElement("div");
  div_p.classList.add("flex", "justify-center", "gap-4", "mx-2");

  formodal.appendChild(div_p);

  let info_modal1 = document.createElement("p");
  let info_modal2 = document.createElement("p");
  info_modal1.setAttribute('id', "para"+k);
  info_modal2.setAttribute('id', "para2"+k);
  div_p.appendChild(info_modal1);
  div_p.appendChild(info_modal2);

  let div_btn = document.createElement("div");
  div_btn.classList.add("flex", "justify-center", "mt-4");
  formodal.appendChild(div_btn);

  const btnModal = document.createElement('button');
  btnModal.classList.add("text-xl", "border", "rounded-xl", "w-48", "h-10", "bg-slate-400");
  btnModal.textContent = "FERME LA";
  div_btn.appendChild(btnModal);

 
}


async function afficherFighters() {
  const reponse = await fetch("Fighters.json");
  const FIGHTERS = await reponse.json();
  new gridjs.Grid({

    columns: [{
      id: 'FighterId',
      name: 'FighterId',
      hidden: true
    }, {
      id: 'FirstName',
      name: 'FirstName'
    }, {
      id: 'Nickname',
      name: 'Nickname'
    }, {
      id: 'LastName',
      name: 'LastName'
    }, {
      id: 'WeightClass',
      name: 'WeightClass'
    }, {
      id: 'Wins',
      name: 'Wins'
    }, {
      id: 'Losses',
      name: 'Losses'
    }, {
      name: 'Actions',
      formatter: (cell, row) => {
        let index;
        for (let i = 0; i < FIGHTERS.length; i++) {
          if (row.cells[0].data === FIGHTERS[i].FighterId) {
            index = i;
          }
        }
        return gridjs.h('button', {
          className: 'py-2 mb-4 px-4 border rounded-md text-white bg-blue-600',
          onClick: () => {
            createModal()
           let modalss = document.getElementById('modal_' + k);
           let info1 = document.getElementById('para'+k);
           let info2 = document.getElementById('para2'+k);
            info1.innerText = `${FIGHTERS[index].FirstName} '${FIGHTERS[index].Nickname}' ${FIGHTERS[index].LastName} 
            Naissance: ${FIGHTERS[index].BirthDate.replace('T00:00:00', '')}
            Catégorie: ${FIGHTERS[index].WeightClass} 
            Taille: ${FIGHTERS[index].Height} Poids: ${FIGHTERS[index].Weight}
            Allonge: ${FIGHTERS[index].Reach} 
            TKO: ${FIGHTERS[index].TechnicalKnockouts} 
            Défaites sur TKO: ${FIGHTERS[index].TechnicalKnockoutsLosses}
            Soumissions: ${FIGHTERS[index].Submissions} 
            Défaites sur soumissions: ${FIGHTERS[index].SubmissionsLosses} `;
            info2.innerText = `Coups directs par minutes: ${FIGHTERS[index].CareerStats.SigStrikesLandedPerMinute}
            Precision des coups directs: ${FIGHTERS[index].CareerStats.SigStrikeAccuracy}
            Moyenne de Takedowns: ${FIGHTERS[index].CareerStats.TakedownAverage}
            Moyenne de soumissions: ${FIGHTERS[index].CareerStats.SubmissionAverage}
            Pourcentage de KO: ${FIGHTERS[index].CareerStats.KnockoutPercentage}
            Pourcentage de TKO: ${FIGHTERS[index].CareerStats.TechnicalKnockoutPercentage}
            Pourcentage de victoires sur décisions: ${FIGHTERS[index].CareerStats.DecisionPercentage}`;
            k++;
            modalss.showModal()
          }
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




