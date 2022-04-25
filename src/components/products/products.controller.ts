import { Product, Category } from "./products.model";
import { Request, Response } from "express";

/**
 * @swagger
 * /categories:
 *  get:
 *   summary: Get all categories
 *   description: Returns all categories
 *   responses:
 *     200:
 *       description: A list of categories
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                     _id:
 *                       type: string
 *                       description: Mongo db generated id
 *                       example: 63dbhsbhnsjjdccbjnj
 *                     name:
 *                       type: string,
 *                       description: Name of the category
 *                       example: Personal Computers
 *                     products:
 *                        type: array
 *                        description: Product array containing product id's
 *                        example: ['6udcjnjnjsndjcnjcdn','dcjndjncdjcdj']
 */

export const showCategories = async (req: Request, res: Response) => {
  const categories = await Category.find().catch((err: Error) =>
    res.json({
      error: {
        name: err.name,
        message: err.message,
      },
    })
  );

  return res.status(200).json({ categories });
};

export const createCategory = async (req: Request, res: Response) => {
  interface category {
    name: string;
  }

  let category: category = req.body;

  await Category.create(category)
    .then((response) => (category = response))
    .catch((err: Error) =>
      res.json({
        error: {
          name: err.name,
          message: err.message,
        },
      })
    );

  return res.status(201).json({ category });
};

export const showProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    return res.status(200).json(products);
  } catch (err: any) {
    res.status(500).json({
      error: {
        name: err.name,
        message: err.message,
      },
    });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  interface product {
    name: string;
    photoUrl: string;
    price: Number;
    tags: string[];
    category: string;
  }

  let product: product = req.body;

  await Product.create(product)
    .then((resp: any) => {
      Category.findById(product.category).then((category: any) => {
        category.products.push(resp.category);
        category.save();
      });
      return (product = resp);
    })
    .catch((err: Error) => {
      console.error(err);
      return res.status(400).json({
        error: {
          name: err.name,
          message: err.message,
        },
      });
    });

  return res.status(201).json({ product });
};

export const showProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id);
    return res.status(200).json({ product });
  } catch (error: any) {
    return res.json({
      Error: {
        name: error.name,
        message: error.message,
      },
    });
  }
};
