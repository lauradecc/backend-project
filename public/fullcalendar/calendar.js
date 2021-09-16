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
    events: '/api/moods'
  });
  calendar.render();
});
