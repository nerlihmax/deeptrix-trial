import fastify from 'fastify';
import cors from '@fastify/cors';
import { PrismaClient } from '@prisma/client';

const app = fastify();
const prisma = new PrismaClient();

app.register(cors, {
    origin: '*',
});

app.route({
    method: 'GET',
    url: '/api/tours',
    handler: async () => {
        return await prisma.tour.findMany({ include: { guide: true } });
    },
});

app.route({
    method: 'GET',
    url: '/api/tours/:id',
    handler: async (req) => {
        const { id } = req.params as { id: string };

        return await prisma.tour.findUnique({
            where: { id },
            include: { guide: true },
        });
    },
});

app.listen({ port: 3000 }, (err, addr) => {
    if (err) {
        console.error('Failed to start\n', err);
    }

    console.log(`Started on ${addr}`);
});
