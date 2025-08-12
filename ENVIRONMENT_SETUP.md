# Environment Variables Setup

This document explains how to configure environment variables for the App Store Connect node to work with different workspaces.

## Required Environment Variables

Each workspace requires its own set of App Store Connect API credentials. You need to set the following environment variables in your `.env` file:

### Fun Games For Free Workspace
```
FUN_GAMES_ISSUER_ID=your_fun_games_issuer_id_here
FUN_GAMES_KEY_ID=your_fun_games_key_id_here
FUN_GAMES_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----
your_fun_games_private_key_here
-----END PRIVATE KEY-----
```

### Texas Workspace
```
TEXAS_ISSUER_ID=your_texas_issuer_id_here
TEXAS_KEY_ID=your_texas_key_id_here
TEXAS_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----
your_texas_private_key_here
-----END PRIVATE KEY-----
```

### Workspace 3
```
WORKSPACE3_ISSUER_ID=your_workspace3_issuer_id_here
WORKSPACE3_KEY_ID=your_workspace3_key_id_here
WORKSPACE3_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----
your_workspace3_private_key_here
-----END PRIVATE KEY-----
```

## How to Get App Store Connect API Credentials

1. Go to [App Store Connect](https://appstoreconnect.apple.com/)
2. Navigate to Users and Access > Keys
3. Create a new API key with the appropriate permissions
4. Download the private key file
5. Note down the Issuer ID and Key ID

## Private Key Format

The private key should be in PEM format and include the header and footer lines:
```
-----BEGIN PRIVATE KEY-----
MIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQg...
-----END PRIVATE KEY-----
```

## Verification

The node now includes verification to ensure:
- A valid workspace is selected
- A valid operation is chosen
- All required environment variables are set for the selected workspace

If any of these conditions are not met, the node will throw an appropriate error message.

## Testing Environment Variables

To test if your environment variables are being loaded correctly, you can run the test script:

```bash
node test-env.js
```

This will show you which environment variables are set and which are missing.

## Troubleshooting

### Environment Variables Not Loading

If your environment variables are not being recognized:

1. **Check .env file location**: Make sure your `.env` file is in the root directory of your project
2. **Check .env file format**: Ensure there are no spaces around the `=` sign
3. **Check for typos**: Variable names are case-sensitive
4. **Restart your application**: After making changes to `.env`, restart your n8n instance

### Example .env file format:
```
FUN_GAMES_ISSUER_ID=your_issuer_id_here
FUN_GAMES_KEY_ID=your_key_id_here
FUN_GAMES_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----
your_private_key_content_here
-----END PRIVATE KEY-----
```

## Legacy Support

For backward compatibility, the following legacy variables are still supported but not recommended for new setups:
```
APPSTORE_ISSUER_ID
APPSTORE_KEY_ID
APPSTORE_PRIVATE_KEY
```
