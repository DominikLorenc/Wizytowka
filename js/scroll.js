$(document).on("scroll", function() {
  const windowHeight = $(window).height();
  const scrollValue = $(this).scrollTop();
  //   console.log(scrollValue);
  const section = $(".skills-container");
  const sectionFromTop = section.offset().top;
  // console.log(sectionFromTop);
  const sectionHight = section.outerHeight();
  const skillLevel = $(".skill-level");

  if (scrollValue > sectionFromTop + sectionHight - windowHeight) {
    skillLevel.addClass("on");
  }
});
