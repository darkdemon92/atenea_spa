if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/atenea_spa/sw.js', { scope: '/atenea_spa/' })})}