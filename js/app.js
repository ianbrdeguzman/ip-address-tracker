import UI from './UI.js';
import API from './API.js';
import { data } from './data.js';

class App {
    constructor() {
        this.api = new API();
        this.ui = new UI();
    }
    setUp() {
        this.ui.createMap();
        addEventListener('DOMContentLoaded', async () => {
            const result = await this.api.getData();
            this.assignData(result);
        });
        this.formSubmit();
    }
    formSubmit() {
        const form = document.querySelector('form');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const input = document.querySelector('input').value;
            const result = await this.api.getData(input);
            this.assignData(result);
        });
    }
    assignData(result) {
        data.ip = result.ip;
        data.isp = result.isp;
        data.location.city = result.location.city;
        data.location.country = result.location.country;
        data.location.postalCode = result.location.postalCode;
        data.location.timezone = result.location.timezone;
        this.ui.renderData();
    }
}

const app = new App();

app.setUp();
