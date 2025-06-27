import { NodePropertyTypes } from "n8n-workflow";
import { SANDBOX_TESTERS_METHODS } from "../../utils/constants/methods_constants";

export const SANDBOX_TESTER_IDS_FIELDS = {
    displayName: 'Sandbox tester ids',
    name: 'sandBoxTesterIds',
    type: 'string' as NodePropertyTypes,
    default: [],
    description: 'Sandbox tester ids that you want to clear the purchase history',
    typeOptions: {
      multipleValues: true,
      multipleValueButtonText: 'Add sandbox tester id',
    },
    displayOptions: {
        show: {
            operation: [SANDBOX_TESTERS_METHODS.CLEAR_PURCHASE_HISTORY_FOR_A_SANDBOX_TESTER],
        },
    },
}