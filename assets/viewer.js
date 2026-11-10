(function () {
  var dlg = document.getElementById('viewer');
  if (!dlg) return;
  var img = document.getElementById('viewer-img');
  var cap = document.getElementById('viewer-caption');
  function open(btn) {
    var inner = btn.querySelector('img');
    img.src = btn.getAttribute('data-full') || (inner ? inner.src : '');
    img.alt = inner ? inner.alt : '';
    cap.textContent = btn.getAttribute('data-caption') || '';
    try { dlg.showModal(); } catch (e) { dlg.setAttribute('open', ''); }
  }
  document.querySelectorAll('button.shot').forEach(function (b) {
    b.addEventListener('click', function () { open(b); });
  });
  document.getElementById('viewer-close').addEventListener('click', function () { dlg.close(); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
})();
