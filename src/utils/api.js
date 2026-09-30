import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://fakestoreapi.com',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
});

export const fetchProducts = async () => {
  const response = await apiClient.get('/products');
  return response.data;
};

export const fetchProduct = async (productId) => {
  const response = await apiClient.get(`/products/${productId}`);
  return response.data;
};

export default apiClient;
