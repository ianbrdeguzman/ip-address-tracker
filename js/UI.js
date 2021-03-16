import { data } from './data.js';

class UI {
    constructor() {
        this.DOMElements = {
            ip: document.querySelector('#ip'),
            city: document.querySelector('#city'),
            country: document.querySelector('#country'),
            postalCode: document.querySelector('#postal-code'),
            timezone: document.querySelector('#timezone'),
            isp: document.querySelector('#isp'),
        };
    }
    renderData() {
        this.DOMElements.ip.innerHTML = data.ip;
        this.DOMElements.city.innerHTML = data.location.city;
        this.DOMElements.country.innerHTML = data.location.country;
        this.DOMElements.postalCode.innerHTML = data.location.postalCode;
        this.DOMElements.timezone.innerHTML = data.location.timezone;
        this.DOMElements.isp.innerHTML = data.isp;
    }
    createMap() {
        const tileUrl =
            'https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}@2x.png?key=p7ihCRQWhKjuuO74RERo';
        const attribution =
            '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';
        this.map = L.map('mapid').setView([0, 0], 2);
        const tiles = L.tileLayer(tileUrl, {
            attribution,
            minZoom: 2,
            maxZoom: 2,
        });
        tiles.addTo(this.map);
    }
    createMarker() {
        const icon = L.icon({
            iconUrl: '../images/icon-location.svg',
            iconSize: [40, 40],
            iconAnchor: [20, 20],
        });
    }
}

export default UI;
