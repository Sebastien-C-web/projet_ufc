
document.addEventListener('DOMContentLoaded', function () {
  let tablo = [];
  fetch("date_combat_ufc.json")
  .then(res => res.json())
  .then(data => {
    for (j = 0; j < data.length; j++) {
      tablo.push({ title: data[j].Name, start: data[j].DateTime })
    }
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      events: tablo,
      eventTimeFormat: {
        hour: '2-digit',
        minute: '2-digit',
        meridiem: 'long'
      },
    });
    calendar.render();
  })
});
