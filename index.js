import Fastify from 'fastify';

const fastify = Fastify({
    logger: true
});

fastify.get('/', async (request, reply) => {
    return { message: 'pipeline test' };
});

try {
    await fastify.listen({port: process.env.PORT || 80, host: '0.0.0.0' });
} catch (error) {
    fastify.log.error(error);
    process.exit(1);
}