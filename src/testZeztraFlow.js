const { createBilling, getBillingByBillingId, getBillingByCustomId, listBilling } = require('./zeztra');

const testZeztraFlow = async () => {
    const billingCreated = await createBilling();

    if (billingCreated.error) {
        console.log('Erro na criação da cobrança.')
        return;
    }
    const { billingId, customId } = billingCreated.billing;


    const billing1 = await getBillingByBillingId(billingId);
    console.log('----------------Resultado billing1----------------');
    console.log(JSON.stringify(billing1));

    const billing2 = await getBillingByCustomId(customId);
    console.log('----------------Resultado billing2----------------');
    console.log('Resultado billing2', JSON.stringify(billing2));
    
    const listBillings = await listBilling(1, 2, 'PENDING');
    console.log('----------------Resultado listBillings----------------');
    console.log('Resultado listBillings', JSON.stringify(listBillings));
}

testZeztraFlow();