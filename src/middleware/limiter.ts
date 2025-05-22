import { Request, Response } from 'express';
import rateLimit, { RateLimitRequestHandler, Options } from 'express-rate-limit';

interface RateLimitConfig extends Partial<Options> {
  windowMs: number;
  max: number;
  message: string | { error: string; retryAfter: string };
}

const rateLimitConfig: RateLimitConfig ={
    windowMs: 2 * 60 * 1000, // 20 minutes
    max: 25, // limit each IP to 30 requests per windowMs
    message: { error: "Too many requests", retryAfter: "2 minutes" }, // added message property
    
    keyGenerator: (function (req: any) {
        return req.headers["x-forwarded-for"] || req.connection.remoteAddress; 
    })
  };

const limiter: RateLimitRequestHandler = rateLimit(rateLimitConfig);

export default limiter;