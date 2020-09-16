import swaggerUi from 'swagger-ui-express';
import swaggereJsdoc from 'swagger-jsdoc';
import express from 'express';

const router = express.Router();

const options = {
//swagger문서 설정
    swaggerDefinition: {
        info: {
            title: 'Test API',
            version: '1.0.0',
            description: 'Test API with express',
        },
        host: 'https://caruisa.github.io/api/',
        basePath: '/'
    },
//swagger api가 존재하는 곳 입니다.
    apis: ['./controllers/*.js']
};

const specs = swaggereJsdoc(options);

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

export default router;