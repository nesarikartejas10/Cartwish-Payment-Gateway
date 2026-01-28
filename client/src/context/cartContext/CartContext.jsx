import { createContext, useContext } from "react";
import { faker } from "@faker-js/faker";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const products = [...Array(20)].map((_) => ({
    id: faker.string.uuid(),
    productName: faker.commerce.productName(),
    productDescription: faker.commerce.productDescription(),
    price: faker.commerce.price({ min: 100, max: 5000 }),
    image: faker.image.urlPicsumPhotos({
      width: 300,
      height: 300,
    }),
    inStock: faker.helpers.arrayElement([0, 5, 10, 15, 20]),
    fastDeliver: faker.datatype.boolean(),
    new: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

  return (
    <CartContext.Provider value={{ products }}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
