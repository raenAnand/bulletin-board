;(function() {
  var ONE_SECOND = 1000;

  var webview;
  var jwPlayer;
  var hidden = 1;
  var cachedTitle;
  var utils = new Utils();
  var apiUrl = _CONFIG.apiUrl;
  var fetchInterval = _CONFIG.fetchInterval;
  var time = document.querySelector('#time');
  var date = document.querySelector('#date');
  var title = document.querySelector('#title');
  var container = document.querySelector('#container');

  var emptyContainer = function() {
    while (container.firstChild) {
      container.firstChild.remove();
    }
  }

  var slideMode = function() {
    if(jwPlayer) {
      jwPlayer.remove();
    }
    emptyContainer();

    var iframe = document.createElement('iframe');
    iframe.setAttribute('scrolling', 'no');
    iframe.setAttribute('class', 'webview');
    iframe.setAttribute('name', 'webview[]');
    iframe.setAttribute('src', 'spinner.html');
    container.appendChild(iframe);

    var iframe_ = document.createElement('iframe');
    iframe_.setAttribute('scrolling', 'no');
    iframe_.setAttribute('class', 'webview');
    iframe_.setAttribute('name', 'webview[]');
    iframe_.setAttribute('src', 'spinner.html');
    iframe_.style.display = 'none';
    container.appendChild(iframe_);
  }

  var slideRender = function(segement) {
    webview = document.querySelectorAll('iframe[name="webview[]"]')

    hidden = hidden ? 0 : 1;
    title.textContent = cachedTitle;

    shown = hidden ? 0 : 1;
    webview[shown].style.display = 'block';

    webview[hidden].src = segement.url;
    webview[hidden].style.display = 'none';

    cachedTitle = segement.title;
  }

  var videoMode = function(playlist) {
    emptyContainer();
    title.textContent = '';

    jwPlayer = jwplayer('container');

    jwPlayer.setup({
      playlist: playlist
    });
  }

  var bulletin = new Bulletin(apiUrl,
                              fetchInterval,
                              videoMode,
                              slideMode,
                              slideRender);
  bulletin.init();

  setInterval(function() {
    date.innerText = utils.getTodayDate();
    time.innerText = utils.getCurrentTime();
  }, ONE_SECOND);
})();
