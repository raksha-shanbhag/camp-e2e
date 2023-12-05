 
// constants
const API_URL = ""
const APIHeaders = {
    'Content-Type' : 'application/json',
}

// API class
export default class TestResultsAPIs {    
    static async runAllTestsForTestConfig(testConfigId){
        const url = API_URL

        // API call
        const resp = await fetch(url, {
            method: 'GET',
            headers: APIHeaders
        })
        return await resp.json()
    }

    static async runTestByIdForTestConfig(testConfigId, payload_id){
        const url = API_URL

        // API call
        const resp = await fetch(url, {
            method: 'GET',
            headers: APIHeaders
        })
        return await resp.json()
    }

    static async getAllTestResultsByTestConfigId(testConfigId){
        const url = API_URL

        // API call
        const resp = await fetch(url, {
            method: 'GET',
            headers: APIHeaders
        })
        return await resp.json()
    }

    static async getTestResultByTestConfigId(testConfigId, payload_id){
        const url = API_URL

        // API call
        const resp = await fetch(url, {
            method: 'GET',
            headers: APIHeaders
        })
        return await resp.json()
    }
}