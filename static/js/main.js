// Copy-to-clipboard for the BibTeX block. The only script on the page; everything
// else is static, so nothing here is load-bearing for reading the site.
document.querySelectorAll('[data-copy]').forEach(function (button) {
  button.addEventListener('click', function () {
    var source = document.querySelector(button.dataset.copy);
    if (!source) return;
    navigator.clipboard.writeText(source.textContent.trim()).then(function () {
      var previous = button.textContent;
      button.textContent = 'Copied';
      setTimeout(function () { button.textContent = previous; }, 1500);
    });
  });
});
