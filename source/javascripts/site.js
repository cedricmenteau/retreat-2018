document.querySelector('.expend').addEventListener("click", function(){
  const agenda = document.getElementById("agenda");

  if (document.querySelector('.full-agenda')){
    agenda.classList.remove('full-agenda');
  } else {
    agenda.classList.add('full-agenda');
  };
});
