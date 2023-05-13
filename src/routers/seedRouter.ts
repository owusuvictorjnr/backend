import asyncHandler from 'express-async-handler';
import express, { Request, Response } from 'express';
import { ProductModel } from '../models/productModel';
import { sampleProduct } from '../data';

export const seedRouter = express.Router();
seedRouter.get(
  '/',
  asyncHandler(async (req: Request, res: Response) => {
    await ProductModel.deleteMany({});
    const createProducts = await ProductModel.insertMany(sampleProduct);
    res.json({ createProducts });
  })
);
