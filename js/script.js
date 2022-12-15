const mySkills = document.querySelector('.skills-list');

const addX = document.createElement("div")

function removeSkill() {
    $('li').click((e) => {
       $(e.target).remove();
   });
 }

function addSkill(e) {
    if ($('#skills').val() === '') {
      e.preventDefault();
      return;
    }
  
    let skillName = $('#skills').val();
    let listEl = $('.skills-list');
    let newLiEl = $('<li>', { text: skillName });
    listEl.append(newLiEl);
    $('#skills').val('');
    removeSkill();
    e.preventDefault();
  }

$("form").on("submit", addSkill);

