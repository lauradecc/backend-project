document.addEventListener('DOMContentLoaded', function() {
  let calendarEl = document.getElementById('calendar');
  let calendar = new FullCalendar.Calendar(calendarEl, {
    weekNumberCalculation: 'ISO',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek' // quitar?
    },
    //initialDate: '2021-09-12', // si no se especifica, es la actual (poner color por defecto que queramos?)
    events: '/api/moods'
  });
  calendar.render();
});
