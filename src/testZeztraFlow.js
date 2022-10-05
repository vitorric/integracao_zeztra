const { createBilling } = require('./zeztra');

const testZeztraFlow = async () => {
    const billingCreated = await createBilling();

    const { billingId } = billingCreated;
}

testZeztraFlow();