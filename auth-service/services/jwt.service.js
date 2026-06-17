import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

export class JwtService {


    static signToken(user) {

        const privateKey = fs.readFileSync(path.resolve(process.env.PRIVATE_KEY), 'utf-8');

        const payload = {
            sub: crypto.randomUUID(),
            name: user.name,
        };

        return jwt.sign(
            payload,
            privateKey,
            { 
                algorithm: 'RS256', 
                expiresIn: '1m' 
            }
        );

    }

    static refreshToken(token) {
        const privateKey = fs.readFileSync(path.resolve(process.env.PRIVATE_KEY), 'utf-8');

        const decoded = jwt.verify(token, privateKey, { algorithms: ['RS256'], ignoreExpiration: true });

        const payload = {
            sub: decoded.sub,
            name: decoded.name,
        };

        return jwt.sign(
            payload,
            privateKey,
            { 
                algorithm: 'RS256', 
                expiresIn: '1m' 
            }
        );
    }

};

