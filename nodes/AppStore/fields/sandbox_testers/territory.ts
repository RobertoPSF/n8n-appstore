import { NodePropertyTypes } from "n8n-workflow";
import { countryNames } from "../../utils/constants/territory_codes";
import { SANDBOX_TESTERS_METHODS } from "../../utils/constants/constants";

export let TERRITORY_FIELD = {
    displayName: 'Sandbox Account Territory',
    name: 'territoryField',
    type: 'options' as NodePropertyTypes,
    options: countryNames
    .sort((a, b) => a.localeCompare(b))
    .map(name => {
        return {
            name: name,
            value: name
        }
    }),
    default: [],
    description: 'The country where you want the sandbox tester account to be',
    displayOptions: {
        show: {
            operation: [SANDBOX_TESTERS_METHODS.MODIFY_A_SANDBOX_TESTER],
        },
    },
};