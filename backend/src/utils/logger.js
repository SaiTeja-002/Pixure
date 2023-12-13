import { createLogger, transports, format } from 'winston';

export const logger = createLogger({
    transports: [
        new transports.File({
            filename: 'logs/info.log',
            level: 'info',
            format: format.combine(
                format.timestamp(),
                format.json()
            )
        }),
        new transports.File({
            filename: 'logs/error.log',
            level: 'error',
            format: format.combine(
                format.timestamp(),
                format.json()
            )
        }),
        new transports.File({
            filename: 'logs/warn.log',
            level: 'warn',
            format: format.combine(
                format.timestamp(),
                format.json()
            )
        }),
    ]
});
