document.addEventListener('DOMContentLoaded', function() {
  let calendarEl = document.getElementById('calendar');
  let calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title addEventButton',
      right: 'dayGridMonth,timeGridWeek'
    },
    customButtons: {  // https://fullcalendar.io/docs/customButtons
      addEventButton: {
        text: 'Add new event!',
        click: function() {

          let dateStr = prompt('Enter a date in YYYY-MM-DD format');
          let date = new Date(dateStr);
          let mood = prompt('Enter your mood');
          let color;

          if (mood == 1) { // FUNSIONAAAA
            color = '#ff0000';
          } else {
            color = '#0000ff'
          }

          if (!isNaN(date.valueOf())) { // valid?
            calendar.addEvent({ // https://fullcalendar.io/docs/Calendar-addEvent - https://fullcalendar.io/docs/event-parsing
              start: date,
              allDay: true, // solo para un día sería esto
              display: 'background',
              color
            });
            alert('Great. Now, update your database...');
          } else {
            alert('Invalid date.');
          }
        }
      }
    },
    initialDate: '2021-09-12', // si no se especifica, es la actual (poner color por defecto que queramos?)
    events: '/api/moods'
    // [
    //   {
    //     start: '2021-07-11',
    //     allDay: true, // solo para un día sería esto
    //     display: 'background',
    //     color: '#ff9f89'
    //   },
    //   {
    //     start: '2021-07-13',
    //     end: '2021-07-13',
    //     display: 'background',
    //     color: '#ff0000'
    //   },
    //   {
    //     start: '2021-07-24',
    //     end: '2021-07-28',
    //     overlap: false,
    //     display: 'background',
    //     color: '#0000ff'
    //   },
    //   {
    //     start: '2021-07-06',
    //     end: '2021-07-08',
    //     overlap: false,
    //     display: 'background'
    //   }
    // ]
  });
  calendar.render();
  });