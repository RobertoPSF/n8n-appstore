const dotenv = require('dotenv');
const path = require('path');

console.log('Current working directory:', process.cwd());
console.log('Looking for .env file in:', path.resolve('.env'));

// Load environment variables from .env file
const result = dotenv.config();

if (result.error) {
    console.error('Error loading .env file:', result.error.message);
} else {
    console.log('✅ .env file loaded successfully');
}

console.log('\nTesting environment variables loading...');
console.log('=====================================');

// Test Fun Games For Free workspace variables
console.log('Fun Games For Free workspace:');
console.log('FUN_GAMES_ISSUER_ID:', process.env.FUN_GAMES_ISSUER_ID ? '✓ Set' : '✗ Not set');
console.log('FUN_GAMES_KEY_ID:', process.env.FUN_GAMES_KEY_ID ? '✓ Set' : '✗ Not set');
console.log('FUN_GAMES_PRIVATE_KEY:', process.env.FUN_GAMES_PRIVATE_KEY ? '✓ Set' : '✗ Not set');

console.log('\nTexas workspace:');
console.log('TEXAS_ISSUER_ID:', process.env.TEXAS_ISSUER_ID ? '✓ Set' : '✗ Not set');
console.log('TEXAS_KEY_ID:', process.env.TEXAS_KEY_ID ? '✓ Set' : '✗ Not set');
console.log('TEXAS_PRIVATE_KEY:', process.env.TEXAS_PRIVATE_KEY ? '✓ Set' : '✗ Not set');

console.log('\nWorkspace 3:');
console.log('WORKSPACE3_ISSUER_ID:', process.env.WORKSPACE3_ISSUER_ID ? '✓ Set' : '✗ Not set');
console.log('WORKSPACE3_KEY_ID:', process.env.WORKSPACE3_KEY_ID ? '✓ Set' : '✗ Not set');
console.log('WORKSPACE3_PRIVATE_KEY:', process.env.WORKSPACE3_PRIVATE_KEY ? '✓ Set' : '✗ Not set');

console.log('\nLegacy variables:');
console.log('APPSTORE_ISSUER_ID:', process.env.APPSTORE_ISSUER_ID ? '✓ Set' : '✗ Not set');
console.log('APPSTORE_KEY_ID:', process.env.APPSTORE_KEY_ID ? '✓ Set' : '✗ Not set');
console.log('APPSTORE_PRIVATE_KEY:', process.env.APPSTORE_PRIVATE_KEY ? '✓ Set' : '✗ Not set');

console.log('\n=====================================');
console.log('If you see "✗ Not set" for variables you expect to be loaded,');
console.log('please check your .env file path and format.');
