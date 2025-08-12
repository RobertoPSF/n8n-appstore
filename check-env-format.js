const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

// Load the .env file
const envPath = path.resolve('.env');
console.log('Checking .env file at:', envPath);

if (!fs.existsSync(envPath)) {
    console.error('❌ .env file not found!');
    process.exit(1);
}

// Read the .env file content
const envContent = fs.readFileSync(envPath, 'utf8');
console.log('\n=== .env File Content ===');
console.log(envContent);
console.log('=== End of .env File ===\n');

// Load environment variables
dotenv.config();

// Check the Fun Games For Free private key format
const privateKey = process.env.FUN_GAMES_PRIVATE_KEY;
if (!privateKey) {
    console.error('❌ FUN_GAMES_PRIVATE_KEY not found in .env file');
    process.exit(1);
}

console.log('=== Private Key Analysis ===');
console.log('Private key length:', privateKey.length);
console.log('Private key starts with:', privateKey.substring(0, 50));
console.log('Private key ends with:', privateKey.substring(privateKey.length - 50));

// Check if it has proper headers
if (privateKey.includes('-----BEGIN PRIVATE KEY-----')) {
    console.log('✅ Contains BEGIN PRIVATE KEY header');
} else {
    console.log('❌ Missing BEGIN PRIVATE KEY header');
}

if (privateKey.includes('-----END PRIVATE KEY-----')) {
    console.log('✅ Contains END PRIVATE KEY footer');
} else {
    console.log('❌ Missing END PRIVATE KEY footer');
}

// Check for newlines
if (privateKey.includes('\n')) {
    console.log('✅ Contains newlines (good for formatting)');
} else {
    console.log('❌ No newlines found - this might be the issue!');
}

// Check if it's all on one line (which would be bad)
const lines = privateKey.split('\n');
console.log('Number of lines in private key:', lines.length);

if (lines.length === 1) {
    console.log('❌ Private key is all on one line - this is likely the problem!');
    console.log('The private key should be formatted with proper line breaks.');
} else {
    console.log('✅ Private key has multiple lines (good)');
}

console.log('\n=== Recommended Format ===');
console.log('Your private key should look like this:');
console.log('FUN_GAMES_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----');
console.log('MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQg...');
console.log('... (more base64 characters) ...');
console.log('-----END PRIVATE KEY-----"');
