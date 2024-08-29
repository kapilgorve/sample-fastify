import Fastify from 'fastify';

const fastify = Fastify({
    logger: true
});

fastify.get('/', async (request, reply) => {
    return { hello: 'world' };
});

try {
    await fastify.listen({port: process.env.PORT ||3000 });
} catch (error) {
    fastify.log.error(error);
    process.exit(1);
}