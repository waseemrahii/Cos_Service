import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import CartItems from '../sections/Cart/CartItems';
import CartSummary from '../sections/Cart/CartSummary';
import { CartData } from '../utils/CartData';
import  '../App.css'

export default function Cart() {
    const { headers } = CartData;

    const [cartItems, setCartItems] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        try {
            const storedCart = localStorage.getItem('cart');
            if (storedCart) {
                const parsedCart = JSON.parse(storedCart);
                if (Array.isArray(parsedCart)) {
                    const groupedItems = groupCartItemsByProductId(parsedCart);
                    setCartItems(groupedItems);
                    calculateTotals(groupedItems);
                } else {
                    console.error('Parsed cart data is not an array:', parsedCart);
                    setCartItems([]);
                }
            }
        } catch (error) {
            console.error('Error parsing cart data from local storage:', error);
            setCartItems([]);
        }
    }, []);

    const groupCartItemsByProductId = (items) => {
        // Group items by productId and sum quantities
        const groupedItems = items.reduce((acc, item) => {
            const existingItem = acc.find(i => i.productId === item.productId);
            if (existingItem) {
                existingItem.quantity += item.quantity;
            } else {
                acc.push({ ...item });
            }
            return acc;
        }, []);
        return groupedItems;
    };

    const calculateTotals = (items) => {
        const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
        const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

        setTotalItems(totalQuantity);
        setCartTotal(totalPrice);
    };

    const onRemoveItem = (itemToRemove) => {
        const updatedCart = cartItems.filter(item => item.productId !== itemToRemove.productId);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        calculateTotals(updatedCart);
    };

    const onIncreaseQuantity = (itemToUpdate) => {
        const updatedCart = cartItems.map(item =>
            item.productId === itemToUpdate.productId
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        calculateTotals(updatedCart);
    };

    const onDecreaseQuantity = (itemToUpdate) => {
        const updatedCart = cartItems.map(item =>
            item.productId === itemToUpdate.productId && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        calculateTotals(updatedCart);
    };

    const onRemoveAll = () => {
        setCartItems([]);
        localStorage.removeItem('cart');
        calculateTotals([]);
    };

    return (
        <>
            <Banner />
            <section className="cart-section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="mb-5">Your Items</h2>
                            <CartItems
                                headers={headers}
                                cartItems={cartItems}
                                onRemoveItem={onRemoveItem}
                                onIncreaseQuantity={onIncreaseQuantity}
                                onDecreaseQuantity={onDecreaseQuantity}
                            />
                        </div>
                    </div>
                    <CartSummary
                        totalItems={totalItems}
                        cartTotal={cartTotal.toFixed(2)}
                        onRemoveAll={onRemoveAll}
                    />
                </div>
            </section>
        </>
    );
}
