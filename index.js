import Fastify from 'fastify';

const fastify = Fastify({
    logger: true
});

fastify.get('/', async (request, reply) => {
    return { hello: 'world' };
});

try {
    await fastify.listen({port: 3000 || process.env.PORT});
} catch (error) {
    fastify.log.error(error);
    process.exit(1);
}