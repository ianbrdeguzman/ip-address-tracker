class API {
    async getData(input) {
        if (input) {
            const url =
                'https://geo.ipify.org/api/v1?apiKey=at_QHT7mZIBDqqdosrPxnSCAhwYsKUqP&ipAddress=';
            const searchURL = `${url}${input}`;
            const response = await fetch(searchURL);
            const data = await response.json();
            return data;
        } else {
            const url =
                'https://geo.ipify.org/api/v1?apiKey=at_QHT7mZIBDqqdosrPxnSCAhwYsKUqP';
            const response = await fetch(url);
            const data = await response.json();
            return data;
        }
    }
}

export default API;
