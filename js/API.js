class API {
    async getData(input) {
        const url =
            'https://geo.ipify.org/api/v1?apiKey=at_QHT7mZIBDqqdosrPxnSCAhwYsKUqP';
        if (input) {
            if (this.checkIP(input)) {
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
            } else if (this.checkDomain(input)) {
                const searchUrl = `${url}&domain=${input}`;
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
    checkIP(ip) {
        return /^(?=\d+\.\d+\.\d+\.\d+$)(?:(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\.?){4}$/.test(
            ip
        );
    }
    checkDomain(domain) {
        return /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/.test(domain);
    }
}

export default API;
