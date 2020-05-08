import React, { useEffect } from "react";

import { SEO } from '@components';
import { useShoppingCart } from 'use-shopping-cart';

const SuccessPage = () => {
  const { clearCart, cartCount } = useShoppingCart();

  useEffect(() => {
    if (cartCount > 0) {
      clearCart()
    }
  }, [cartCount, clearCart])
  
  return (
  <>
    <SEO title="Order Success" />
    <h1>Order Success</h1>
  </>
  )
};

export default SuccessPage;
