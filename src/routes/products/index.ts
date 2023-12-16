import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const prisma = new PrismaClient();
const router = Router();

/* get all the products */
router.get('/', async (req, res) => {
    const products = await prisma.product.findMany({ });

    res.status(200).send({ products });
});

/* create a product */
router.post('/create', async (req, res) => {
    const { name, price } = req.body;
    
    const newProduct = await prisma.product.create({
        data: {
            name,
            price
        }
    });

    res.status(200).send({ product: newProduct });
});

/* update product */
router.put('/update', async (req, res) => {
    const { id, name, price } = req.body;

    if(!name && !price) {
        return res.status(400).send({ updated: false });
    }

    const updatedProduct = await prisma.product.updateMany({
        where: {
            id
        },
        data: {
            name, 
            price,
            updated: true
        }
    });

    if(!updatedProduct.count) {
        return res.status(400).send({ updated: false });
    }

    return res.status(200).send({ updated: true });
});

/* delete a product */
router.delete('/delete', async (req, res) => {
    const { id } = req.body;

    const deletedProduct = await prisma.product.deleteMany({
        where: {
            id
        }        
    });

    if(!deletedProduct.count) {
        return res.status(400).send({ deleted: false });
    }

    return res.status(200).send({ deleted: true });
});

export default router;
