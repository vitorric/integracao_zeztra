const axios = require('axios');

const urlAPIZeztra = process.env.API_URL_ZEZTRA;
const tokenAPIZeztra = process.env.API_TOKEN_ZEZTRA;

const axiosConfig = () => {
    return {
        headers: {
            Authorization: `Bearer ${tokenAPIZeztra}`
        }
    }
}

exports.createBilling = async () => {
    try {
        const url = `${urlAPIZeztra}/billing/register`
        const body = {
            billingRuleProfileId: '631b7957a2b8326cf39a96b8',
            billings: [{
                customId: new Date().getTime().toString(),
                description: 'Teste criação de cobrança via API',
                dueDate: new Date().toISOString().split('T')[0],
                sendCommunication: false,
                amount: 1000,
                payer: {
                    cpfCnpj: '46822886796',
                    name: 'Vitor Ricardo',
                    street: 'Rua Paraíso',
                    neighborhood: 'Centro',
                    city: 'Sorocaba',
                    uf: 'SP',
                    zipCode: '18000000',
                    communication: {
                        phone: '+5515997354969',
                        email: 'vitor.ricardo@email.com'
                    }
                }
            }]
        }

        const { data } = await axios.post(url, body, axiosConfig());
        const { success, payload } = data;

        if (!success) {
            return {
                error: true,
                billing: false,
            }
        }

        if (success) {
            return {
                error: false,
                billing: payload,
            }
        }
    } catch (err) {
        console.log(JSON.stringify(err.response.data))
    }
}

exports.getBillingByBillingId = async (billingId) => {
    try {
        const url = `${urlAPIZeztra}/billing/get/${billingId}`

        const { data } = await axios.get(url, axiosConfig());
        const { success, payload } = data;

        if (!success) {
            return {
                error: true,
                billing: false,
            }
        }

        if (success) {
            return {
                error: false,
                billing: payload,
            }
        }
    } catch (err) {
        console.log(JSON.stringify(err.response.data))
    }
};

exports.getBillingByCustomId = async (customId) => {
    try {
        const url = `${urlAPIZeztra}/billing/get/${customId}/customId`

        const { data } = await axios.get(url, axiosConfig());
        const { success, payload } = data;

        if (!success) {
            return {
                error: true,
                billing: false,
            }
        }

        if (success) {
            return {
                error: false,
                billing: payload,
            }
        }
    } catch (err) {
        console.log(JSON.stringify(err.response.data))
    }
};

exports.listBilling = async (page, rowsPerPage, status) => {
    try {
        const url = `${urlAPIZeztra}/billing/list`
        
        const { headers } = axiosConfig();
        const { data } = await axios.get(url, {
            headers,
            params: {
                page, rowsPerPage, status
            }
        });
        const { success, payload } = data;

        if (!success) {
            return {
                error: true,
                billing: false,
            }
        }

        if (success) {
            return {
                error: false,
                billing: payload,
            }
        }
    } catch (err) {
        console.log(JSON.stringify(err.response.data))
    }
};
exports.listBillingRuleProfiles = async () => { };
