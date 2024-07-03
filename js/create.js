function createModal() {
    let section = document.getElementById("section_creation");
    let modal = document.createElement("dialog");
    let formodal = document.createElement("form");

    modal.appendChild(formodal);

    let div_img = document.createElement("div");
    div_img.classList.add("flex", "justify-center", "my-4");
    formodal.appendChild(div_img);

    let image_smash = document.createElement("img");
    image_smash.src = "img/modal_img.png";
    div_img.appendChild(image_smash);

    let div_p = document.createElement("div");
    div_p.classList.add("flex", "justify-center", "gap-4", "mx-2");
    formodal.appendChild(div_p);

    let info1 = document.createElement("p");
    let info2 = document.createElement("p");
    div_p.appendChild(info1);
    div_p.appendChild(info2);

    let div_btn = document.createElement("div");
    div_btn.classList.add("flex", "justify-center", "mt-4");
    formodal.appendChild(div_btn);

    let btn = document.createElement("button");
    btn.classList.add("text-xl", "border rounded-xl", "w-48", "h-10", "bg-slate-400");
    btn.textContent = "FERME LA";
    div_btn.appendChild(btn);

    section.appendChild(modal);
  }