/* eslint-disable no-restricted-globals */
//Responder con nlo que contiene la solicitud

self.addEventListener('fetch', e => {
    console.log(e)
})

self.addEventListener('fetch', e => {
    if (e.request.url.includes('boston1')) {
        e.respondWith(fetch("logo512.png"))
    }
});

