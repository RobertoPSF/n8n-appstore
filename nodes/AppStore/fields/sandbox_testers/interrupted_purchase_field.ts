import { NodePropertyTypes } from "n8n-workflow";
import { SANDBOX_TESTERS_METHODS } from "../../utils/constants/methods_constants";

export let INTERRUPTED_PURCHASE_FIELD = {
    displayName: 'Simulates fail at the buying process',
    name: 'interruptedPurchase',
    type: 'boolean' as NodePropertyTypes,
    default: false,
    description: 'Should be true if you want to simulate fails or interruptions at the buying process',
    displayOptions: {
        show: {
            operation: [SANDBOX_TESTERS_METHODS.MODIFY_A_SANDBOX_TESTER],
        },
    },
};
