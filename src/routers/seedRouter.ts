import asyncHandler from 'express-async-handler';
import express, { Request, Response } from 'express';
import { ProductModel } from '../models/productModel';
import { sampleProduct, sampleUsers } from '../data';
import { UserModel } from '../models/userModel';

export const seedRouter = express.Router();
seedRouter.get(
  '/',
  asyncHandler(async (req: Request, res: Response) => {
    await ProductModel.deleteMany({});
    const createProducts = await ProductModel.insertMany(sampleProduct);

    await UserModel.deleteMany({});
    const createUsers = await UserModel.insertMany(sampleUsers);
    res.json({ createProducts, createUsers });
  })
);
