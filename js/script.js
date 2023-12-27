function handleScrollClick() {
    window.scrollTo({
      top: window.scrollY + window.innerHeight,
      behavior: "smooth",
    });
  }
  
  document.getElementById("resume").addEventListener("click", function () {
    var resumePath = "asserts/resume.pdf";
    var link = document.createElement("a");
    link.download = "GopikaB_Resume.pdf";
    link.href = resumePath;
    document.body.appendChild(link);
    link.click();
    ody;
    document.body.removeChild(link);
  });
  document.getElementById('openLink1').onclick = function() {
    window.open('https://github.com/gopika30-b/EventManagementSystem', '_blank');
  };
document.getElementById('openLink2').onclick = function() {
  window.open('http://www.techmedz.in', '_blank');
};
document.getElementById('openLink3').onclick = function() {
  window.open('https://github.com/gopika30-b/CREATIVE-CookingWebsite', '_blank');
};