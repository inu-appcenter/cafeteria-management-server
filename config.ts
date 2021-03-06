import getEnv from "./lib/utils/env";
import {isProduction} from "./lib/utils/nodeEnv";

export default {

    server: {
        port: Number(getEnv('PORT')) || 8081,
    },

    cors: {
        allowedHostsInProduction: [
            'https://console.inu-cafeteria.app'
        ]
    },

    cookie: {
        domain: isProduction() ? 'inu-cafeteria.app' : undefined,
        tokenName: 'cafeteria-console-server-token',
    },

    aws: {
        cloudwatch: {
            logGroupName: 'cafeteria-console-server',
            serviceLogFetchParams: {
                logGroupName: 'cafeteria-server',
                logStreamName: 'combined',
            }
        },
        region: 'ap-northeast-2',
        accessKeyId: getEnv('AWS_ACCESS_KEY_ID') || 'an_aws_id',
        secretAccessKey: getEnv('AWS_SECRET_ACCESS_KEY') || 'blahblah',
    },

    sequelize: {
        database: 'cafeteria',
        username: getEnv('DB_USERNAME') || 'potados',
        password: getEnv('DB_PASSWORD') || '1234',
        host: getEnv('DB_HOST') || 'localhost',
        dialect: 'mysql',
        timezone: '+09:00',
        logging: false,
        repositoryMode: true
    },

    auth: {
        key: getEnv('JWT_SECRET_KEY') || 'whatever',
        expiresIn: '24h',

        adminId: getEnv('ADMIN_ID') || 'potados',
        adminPassword: getEnv('ADMIN_PW') || '1234'
    }

}
