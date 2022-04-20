import Product from "./products.model";

export const showProducts = async (req: any, res: any) => {
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
export const createProduct = async (req: any, res: any) => {
  interface product {
    name: string;
    photoUrl: string;
    price: Number;
    tags: string[];
  }

  let product: product = req.body;
  await Product.create(product)
    .then((resp) => (product = resp))
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
