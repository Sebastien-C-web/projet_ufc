let tablo = [];

async function afficheDates() {
    const res = await fetch("date_combat_ufc.json");
    const DATES = await res.json();

    for (j=0; j < DATES.length; j++){
        tablo.push(DATES[j])
    }

 
  }
  afficheDates();
  
  document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
    });
    calendar.render();
    console.log(tablo)
  }); 