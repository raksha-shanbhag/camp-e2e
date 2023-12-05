 
// constants
const API_URL = ""
const APIHeaders = {
    'Content-Type' : 'application/json',
}

// API class
export default class TestConfigurationAPI {    
    static async getAllTestConfigurations(){
        const url = API_URL

        // API call
        const resp = await fetch(url, {
            method: 'GET',
            headers: APIHeaders
        })
        return await resp.json()
    }

    static async createTestConfiguration(testName, description, productIdMapping, brandIdMapping, creditPolicyId, mensaFileName, csvData){
        const url = API_URL
        const body = {
            testName: testName,
            description: description,
            productIdMapping: productIdMapping,
            brandIdMapping: brandIdMapping,
            creditPolicyId: creditPolicyId,
            mensaFileName: mensaFileName,
            csvData: csvData
        }

        // API call
        const resp = await fetch(url, {
            method: 'POST',
            headers: APIHeaders,
            body: JSON.stringify(body)
        })

        return await resp.json()
    }

    static async editTestConfiguration(testConfigId, testName, description, productIdMapping, brandIdMapping, creditPolicyId, mensaFileName, csvData){
        const url = API_URL
        const body = {
            testName: testName,
            description: description,
            productIdMapping: productIdMapping,
            brandIdMapping: brandIdMapping,
            creditPolicyId: creditPolicyId,
            mensaFileName: mensaFileName,
            csvData: csvData
        }

        // API call
        const resp = await fetch(url, {
            method: 'PUT',
            headers: APIHeaders,
            body: JSON.stringify(body)
        })

        return await resp.json()
    }

    static async archiveTestConfiguration(testConfigId){
        const url = API_URL

        // API call
        const resp = await fetch(url, {
            method: 'PUT',
            headers: APIHeaders
        })
        return await resp.json()
    }

    static async deleteTestConfiguration(testConfigId){
        const url = API_URL

        // API call
        const resp = await fetch(url, {
            method: 'DELETE',
            headers: APIHeaders
        })
        return await resp.json()
    }

}