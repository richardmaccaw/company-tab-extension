class API {
    static init() {
        this.baseURL = 'http://localhost:3002/api/v1'
        this.usersURL = this.baseURL + '/users'
        this.announcementsURL = 'http://localhost:3002/api/v1/announcements'
    }

    static findOrCreateUser = (user) => {
        return fetch('http://localhost:3002/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(resp => resp.json())
    }
}

API.init()

export default API