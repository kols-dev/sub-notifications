// Check if the browser supports service workers
if ('serviceWorker' in navigator && 'PushManager' in window) {
    navigator.serviceWorker
        .register('service-worker.js')
        .then(function (registration) {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(function (error) {
            console.error('Service Worker registration failed:', error);
        });
}

// Function to subscribe to push notifications
function subscribe() {
    navigator.serviceWorker.ready.then(function (registration) {
        registration.pushManager
            .subscribe({ userVisibleOnly: true, applicationServerKey: 'BOoCZQJjmpnWHfluRylKOnCAD9cKohd1HjwjD0TFg3j4iG-PsUGclsDDSQlNL6Pi0qtV6uXLXnyPmTeNOmjDqbk' })
            .then(function (subscription) {
                console.log('Subscription successful:', subscription);
                // Send the subscription details to your server for further processing
                // For demonstration purposes, you can log the subscription details
                console.log(JSON.stringify(subscription));
            })
            .catch(function (error) {
                console.error('Subscription failed:', error);
            });
    });
}
