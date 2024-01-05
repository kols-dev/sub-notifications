self.addEventListener('push', function (event) {
    const options = {
        body: event.data.text(),
    };

    event.waitUntil(self.registration.showNotification('Web Push Notification', options));
});
