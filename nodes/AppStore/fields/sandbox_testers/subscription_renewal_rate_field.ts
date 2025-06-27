import { NodePropertyTypes } from "n8n-workflow";
import { SANDBOX_TESTERS_METHODS } from "../../utils/constants/methods_constants";
import { SUBSCRIPTION_RENEWAL_RATE } from "../../utils/constants/subscription_renewal_rate";

export let SUBSCRIPTION_RENEWAL_RATE_FIELD = {
    displayName: 'Subscription Renewal Rate',
    name: 'subscriptionRenewalRate',
    type: 'options' as NodePropertyTypes,
    options: SUBSCRIPTION_RENEWAL_RATE
    .map(name => {
        return {
            name: name,
            value: name
        }
    }),
    default: [],
    description: 'Changes the subscription renewal rate of a sandbox account',
    displayOptions: {
        show: {
            operation: [SANDBOX_TESTERS_METHODS.MODIFY_A_SANDBOX_TESTER],
        },
    },
};
