function magic() {
  var answsRegex = /parseFloat\(\'(.*)\'\)/;
  var placeholderCSS = '[contenteditable=true]:empty::before { content: attr(placeholder);}';

  var qs = Array.prototype.slice.call(document.querySelectorAll('a[href="javascript:void(0);"]'));
  var inputFields = Array.prototype.slice.call(document.querySelectorAll('div[contenteditable="true"]'));
  console.log({qs, inputFields});
  var answs = qs.map(e => (e.attributes.onclick.value.match(answsRegex) || {1: '' })[1]);

  function injectCSS(css) {
    var styleTag = document.createElement('style');
    styleTag.innerHTML = css;
    document.head.appendChild(styleTag);
  }

  injectCSS(placeholderCSS);
  inputFields.forEach((e, i) => e.setAttribute('placeholder',answs[i]));
}

var urlRegex = /https?:\/\/www.scss.tcd.ie\/doug.leith\/ST3009\/checker.php\?q=.*/;

if (urlRegex.test(window.location.href)) magic();
