document.addEventListener('DOMContentLoaded', function() {
  let calendarEl = document.getElementById('calendar');
  let calendar = new FullCalendar.Calendar(calendarEl, {
    weekNumberCalculation: 'ISO',
    fixedWeekCount: false,
    contentHeight: 360,
    headerToolbar: {
      left: '',
      center: 'title',
      right: '',
    },
    footerToolbar: {
      left: 'prev',
      center: 'today',
      right: 'next',
    },
    //initialDate: '2021-09-12', // si no se especifica, es la actual (poner color por defecto que queramos?)
    events: '/api/moods'
  });
  calendar.render();
});
