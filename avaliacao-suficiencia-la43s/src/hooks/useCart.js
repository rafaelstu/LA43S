import { useState } from "react";
import { useMemo } from "react";

export function useCart() {
  const [cart, setCart] = useState([]);

  function addToCart(produto) {
    setCart((atual) => {
      if (!atual.find((item) => item.id == produto.id))
        return [...atual, { ...produto, quantidade: 1 }];

      return atual.map((p) => {
        if (p.id == produto.id) return { ...p, quantidade: p.quantidade + 1 };
        return p;
      });
    });
  }

  function removeFromCart(produto) {
    setCart((atual) => atual.filter((item) => item.id !== produto.id));
  }

  function increaseQuantity(id) {
    const increased = cart.map((item) => {
      if (item.id == id) {
        item.quantidade++;
        return item;
      }
      return item;
    });

    setCart(increased);
  }

  function decreaseQuantity(id) {
    const decreased = cart.map((item) => {
      if (item.id == id && item.quantidade > 1) {
        item.quantidade--;
      }
      return item;
    });

    setCart(decreased);
  }

  const total = useMemo(
    () =>
      cart.reduce((acc, curr) => {
        return acc + curr.quantidade * curr.preco;
      }, 0),
    [cart],
  );

  const totalItems = useMemo(
    () =>
      cart.reduce((acc, curr) => {
        return acc + curr.quantidade;
      }, 0),
    [cart],
  );

  return {
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    total,
    totalItems,
  };
}
