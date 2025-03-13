if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
    .then(() => console.log("Service Worker zarejestrowany!"))
    .catch(err => console.log("Błąd SW:", err));
}
