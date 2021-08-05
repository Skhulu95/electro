import React from "react";
import Card from "../UI/Card";
import classes from "./AvailableProducts.module.css";
import ProductItem from "./ProductItem/ProductItem";

const DATA = [
  {
    id: "1",
    name: "Beats Headphone",
    price: 999,
    image: "https://cdn.mos.cms.futurecdn.net/7xuuL9GAGDDjhietMy3RGJ.jpg",
  },

  {
    id: "2",
    name: "Ipod touch",
    price: 899,
    image:
      "https://www.notebookcheck.net/fileadmin/Notebooks/Apple/iPod_Touch_2019/ipod_touch_select_pink_2019_GEO_DE.png",
  },

  {
    id: "3",
    name: "Iphone x",
    price: 1199,
    image:
      "https://therealrepaircompany.co.za/wp-content/uploads/2021/03/iPhone-X-Silver.jpg",
  },

  {
    id: "4",
    name: "Samsung Galaxy S21",
    price: 2299,
    image:
      "https://images.samsung.com/is/image/samsung/p6pim/za/galaxy-s21/gallery/za-galaxy-s21-ultra-5g-g988-sm-g998bzkhafa-368336569?$720_576_PNG$",
  },

  {
    id: "5",
    name: "Huawei P40 lite",
    price: 1099,
    image:
      "https://cdn.shopify.com/s/files/1/1374/6193/products/Huawei-P40-Lite-Green-416x416_2000x.jpg?v=1597763484",
  },

  {
    id: "6",
    name: "Volkano Bluetooth Speaker",
    price: 299,
    image:
      "https://res.cloudinary.com/moresport/image/upload/c_fill,q_auto:good/v1575961299/uploads/assets/1138970-0-Whh.jpg",
  },
];

const AvailableProducts = () => {
  const productList = DATA.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      name={product.name}
      image={product.image}
      price={product.price}
    />
  ));

  return (
    <section className={classes.products}>
      <Card>
      <h1>Products</h1>
        <ul>{productList}</ul>
      </Card>
    </section>
  );
};

export default AvailableProducts;


// import { useEffect, useState } from 'react';

// import Card from '../UI/Card';
// import MealItem from './ProductItem/ProductItem';
// import classes from './AvailableProducts.module.css';

// const AvailableProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [httpError, setHttpError] = useState();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const response = await fetch(
//         'https://electro-fd3b2-default-rtdb.firebaseio.com/products.json'
//       );

//       if (!response.ok) {
//         throw new Error('Something went wrong!');
//       }

//       const responseData = await response.json();

//       const loadedProducts = [];

//       for (const key in responseData) {
//         loadedProducts.push({
//           id: key,
//           name: responseData[key].name,
//           image: responseData[key].image,
//           price: responseData[key].price,
//         });
//       }

//       setProducts(loadedProducts);
//       setIsLoading(false);
//     };

//     fetchProducts().catch((error) => {
//       setIsLoading(false);
//       setHttpError(error.message);
//     });
//   }, []);

//   if (isLoading) {
//     return (
//       <section className={classes.ProductsLoading}>
//         <p>Loading...</p>
//       </section>
//     );
//   }

//   if (httpError) {
//     return (
//       <section className={classes.ProductsError}>
//         <p>{httpError}</p>
//       </section>
//     );
//   }

//   const productsList = products.map((meal) => (
//     <MealItem
//       key={products.id}
//       id={products.id}
//       name={products.name}
//       image={products.image}
//       price={products.price}
//     />
//   ));

//   return (
//     <section className={classes.products}>
//       <Card>
//         <ul>{productsList}</ul>
//       </Card>
//     </section>
//   );
// };

// export default AvailableProducts;