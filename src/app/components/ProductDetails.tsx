"use client"
// src/product/ProductDetails.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { hotBeverages } from '../api/data';
import { ChartColumnStacked } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  flavors: string[];
  image: string; 
}

const products: Product[] = [
  {
    id: '1',
    name: 'Product 1',
    description: 'This is the first product.',
    ingredients: ['Ingredient 1', 'Ingredient 2'],
    flavors: ['Flavor A', 'Flavor B'],
    image: 'path/to/image1.jpg',
  },
  {
    id: '2',
    name: 'Product 2',
    description: 'This is the second product.',
    ingredients: ['Ingredient 3', 'Ingredient 4'],
    flavors: ['Flavor C', 'Flavor D'],
    image: 'path/to/image2.jpg',
  },
];

const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const {hotBeverageId} = useParams<{hotBeverageId: string}>();

  const product = products.find(p => p.id === productId);
  const hotBeverage = hotBeverages.find(h => h.id === Number(hotBeverageId))

  if (!product) {
    return <div>Product not found</div>;
  }
  if(!hotBeverage){
    return <div className="">Product Not found</div>
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: '300px', height: 'auto' }} />
      <p>{product.description}</p>
      <h3>Ingredients:</h3>
      <ul>
        {product.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Flavors:</h3>
      <ul>
        {product.flavors.map((flavor, index) => (
          <li key={index}>{flavor}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetails;