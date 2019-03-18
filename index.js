if('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/WorkBox.js')
    .then(function(registration){
      console.log('ServiceWorker registration successful with scope: ', registration);
    })
    .catch(function(err){
      console.log('ServiceWorker registration failed: ', err);
    })
  })
}
