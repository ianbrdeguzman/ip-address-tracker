class API {
    async getData(input) {
        const url =
            'https://geo.ipify.org/api/v1?apiKey=at_QHT7mZIBDqqdosrPxnSCAhwYsKUqP';
        if (input) {
            const searchUrl = `${url}&ipAddress=${input}`;
            try {
                const response = await fetch(searchUrl);
                if (response.status >= 400) {
                    const error = await response.json();
                    throw error.messages;
                } else {
                    const data = await response.json();
                    return data;
                }
            } catch (error) {
                alert(error);
            }
        } else {
            try {
                const response = await fetch(url);
                if (response.status >= 400) {
                    const error = await response.json();
                    throw error.messages;
                } else {
                    const data = await response.json();
                    return data;
                }
            } catch (error) {
                alert(error);
            }
        }
    }
}

export default API;
