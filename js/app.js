import UI from './UI.js';
import API from './API.js';
import { data } from './data.js';

class App {
    setUp() {
        addEventListener('DOMContentLoaded', async () => {
            ui.toggleLoader();
            const result = await api.getData();
            this.assignData(result);
            ui.toggleLoader();
            ui.renderData();
            ui.createMap();
        });
    }
    formControl() {
        const form = document.querySelector('form');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const input = document.querySelector('input').value;
            ui.toggleLoader();
            const result = await api.getData(input);
            this.assignData(result);
            ui.toggleLoader();
            ui.renderData();
            ui.updateMap();
            form.reset();
        });
    }
    assignData(result) {
        data.ip = result.ip;
        data.isp = result.isp;
        data.location.city = result.location.city;
        data.location.country = result.location.country;
        data.location.postalCode = result.location.postalCode;
        data.location.timezone = result.location.timezone;
        data.location.lat = result.location.lat;
        data.location.lng = result.location.lng;
    }
}

const app = new App();
const api = new API();
const ui = new UI();
app.setUp();
app.formControl();
