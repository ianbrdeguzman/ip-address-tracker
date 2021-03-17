import { data } from './data.js';

class UI {
    renderData() {
        const container = document.querySelector('.data-container');
        container.innerHTML = '';
        const html = `
            <div>
                <h6>ip address</h6>
                <h3 id="ip">${data.ip}</h3>
            </div>
            <div>
                <h6>location</h6>
                <h3>
                    <span id="city">${data.location.city}</span>,
                    <span id="country">${data.location.country}</span>
                    <span id="postal-code">${data.location.postalCode}</span>
                </h3>
            </div>
            <div>
                <h6>timezone</h6>
                <h3>UTC <span id="timezone">${data.location.timezone}</span></h3>
            </div>
            <div>
                <h6>isp</h6>
                <h3 id="isp">${data.isp}</h3>
            </div>
        `;
        container.innerHTML = html;
    }
    createMap() {
        const tileUrl =
            'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWFuYnJkZWd1em1hbiIsImEiOiJja21ieWZ3dDcwNWE0Mm9zNzIxOTNwd3I1In0.WCs7PlezrjUckvK4L3jLpw';
        const attribution =
            '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
        this.map = L.map('mapid').setView(
            [data.location.lat, data.location.lng],
            18
        );
        const tiles = L.tileLayer(tileUrl, {
            attribution,
            minZoom: 2,
            maxZoom: 18,
        });
        tiles.addTo(this.map);
        this.createMarker();
    }
    createMarker() {
        const icon = L.icon({
            iconUrl: './images/icon-location.svg',
            iconSize: [46, 56],
            iconAnchor: [23, 56],
        });
        this.marker = L.marker([data.location.lat, data.location.lng], {
            icon: icon,
        }).addTo(this.map);
    }
    updateMap() {
        this.map.setView([data.location.lat, data.location.lng], 20);
        this.marker.setLatLng([data.location.lat, data.location.lng]);
    }
    toggleLoader() {
        document.querySelector('.loading-container').classList.toggle('active');
    }
}

export default UI;
