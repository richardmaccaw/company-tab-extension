class API {
    static init() {
        this.baseUrl = 'https://companytab-api.herokuapp.com/api/v1'
        this.usersUrl = this.baseUrl + '/users'
    }

    static findOrCreateUser(user) {
        return fetch(this.usersUrl, {
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