// nav menu //

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.animate__animated');
  
      if (entry.isIntersecting) {
        square.classList.add('animate__animated');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('animate__animated');
    });
  });
  
  observer.observe(document.querySelector('.animation-wrapper'));