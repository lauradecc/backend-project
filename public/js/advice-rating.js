document.querySelectorAll('.vote').forEach(advice => advice.onclick = function () {

  if (advice.classList.contains('vote')) {
    advice.parentElement.querySelector('.ratingForm').style.display = "initial"
    advice.setAttribute('class', 'minimize')
  }
  else if (advice.classList.contains('minimize')) {
    advice.parentElement.querySelector('.ratingForm').style.display = "none"
    advice.setAttribute('class', 'vote')
  }

})
