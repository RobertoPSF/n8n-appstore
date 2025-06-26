import jwt from 'jsonwebtoken';

export function generateAppStoreJwt(issuerId: string, keyId: string, privateKey: string): string {
    const now = Math.floor(Date.now() / 1000);
    const payload = {
        iss: issuerId,
        iat: now,
        exp: now + 300,
        aud: 'appstoreconnect-v1',
    };
    const formattedKey = privateKey.trim();
    return jwt.sign(payload, formattedKey, {
        algorithm: 'ES256',
        keyid: keyId,
    });
} 