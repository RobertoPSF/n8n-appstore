import jwt from 'jsonwebtoken';

const privateKey = `-----BEGIN PRIVATE KEY-----
MIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQg2/pDABQEIgh+sGp5
iXWLH/fDTVwYRonCqVceqTYOJJygCgYIKoZIzj0DAQehRANCAAT29NP1MtgNLO6y
9GZLs1GDyxpXzwm9SHrnUr3gcb6THEPPIliq/70PyXOAkuUTTQEuFqRvQEJ7039L
DjZ3T4GG
-----END PRIVATE KEY-----`;

const TokenIssuerId = '69a6de7a-eb2e-47e3-e053-5b8c7c11a4d1';
const TokenKeyId = 'RJ48964QDU'



export function generateAppStoreJwt(issuerId: string, keyId: string, privateKe2y: string): string {
    const now = Math.floor(Date.now() / 1000);
    const payload = {
        iss: TokenIssuerId,
        iat: now,
        exp: now + 300,
        aud: 'appstoreconnect-v1',
    };
    const formattedKey = privateKey.trim();
    return jwt.sign(payload, formattedKey, {
        algorithm: 'ES256',
        keyid: TokenKeyId,
    });
} 