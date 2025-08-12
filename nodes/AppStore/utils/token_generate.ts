import jwt from 'jsonwebtoken';

export function generateAppStoreJwt(issuerId: string, keyId: string, privateKey: string): string {
    const now = Math.floor(Date.now() / 1000);
    const payload = {
        iss: issuerId,
        iat: now,
        exp: now + 300,
        aud: 'appstoreconnect-v1',
    };

    let formattedKey = privateKey.trim();
    
    // Remove surrounding quotes if they exist
    if (formattedKey.startsWith('"') && formattedKey.endsWith('"')) {
        formattedKey = formattedKey.slice(1, -1);
    } else if (formattedKey.startsWith("'") && formattedKey.endsWith("'")) {
        formattedKey = formattedKey.slice(1, -1);
    }
    
    // Replace literal \n with actual newlines
    formattedKey = formattedKey.replace(/\\n/g, '\n');
    
    return jwt.sign(payload, formattedKey, {
        algorithm: 'ES256',
        keyid: keyId,
    });
} 