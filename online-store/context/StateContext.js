import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
    const getLocalStorage = (name) => {
        if (typeof window !== 'undefined') {
            const storage = localStorage.getItem(name);

            if (storage) return JSON.parse(localStorage.getItem(name));

            if (name === 'cartItems') return [];

            return 0;
        }
    };

    const getLocalStorageFavorite = (name) => {
        if (typeof window !== 'undefined') {
            const storage = localStorage.getItem(name);

            if (storage) return JSON.parse(localStorage.getItem(name));

            if (name === 'favoriteItems') return [];

            return 0;
        }
    };

    const [cartItems, setCartItems] = useState(getLocalStorage('cartItems'));
    const [favoriteItems, setFavoriteItems] = useState(getLocalStorageFavorite('favoriteItems'));
    const [totalPrice, setTotalPrice] = useState(getLocalStorage('totalPrice'));
    const [totalPriceRub, setTotalPriceRub] = useState(getLocalStorage('totalPriceRub'));
    const [color, setColor] = useState();
    const [size, setSize] = useState();
    const [favorite, setFavorite] = useState(getLocalStorage('favorite'));
    const [totalQuantities, setTotalQuantities] = useState(getLocalStorage('totalQuantities'));
    const [qty, setQty] = useState(1);
    const [search, setSearch] = useState(getLocalStorage('search'));
    const [auth, setAuth] = useState(getLocalStorage('auth'));
    const [country, setCountry] = useState(getLocalStorage('country'));


    let findProduct;
    let index;

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
        localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
        localStorage.setItem('totalQuantities', JSON.stringify(totalQuantities));
        localStorage.setItem('favorite', JSON.stringify(favorite));
        localStorage.setItem('search', JSON.stringify(search));
        localStorage.setItem('auth', JSON.stringify(auth));
        localStorage.setItem('country', JSON.stringify(country));
        localStorage.setItem('totalPriceRub', JSON.stringify(totalPriceRub));
    }, [cartItems, favoriteItems, totalPrice, totalQuantities, favorite, search, auth, country, totalPriceRub]);

    const onAdd = (product, color, size, quantity) => {
        console.log(color, size)
        if(color == undefined || size == undefined)
            return
        const checkProductInCart = cartItems.find((item) => item._id === product._id && item.color === color && item.size === size);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalPriceRub((prevTotalPriceRub) => prevTotalPriceRub + product.priceRub * quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

        if (checkProductInCart) {
            const updateCartItems = cartItems.map((cartProduct) => {
                if (cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }

            })
            setCartItems(updateCartItems);
        } else {
            product.quantity = quantity;
            product.color = color;
            product.size = size;
            setCartItems([...cartItems, { ...product }])
        }
        toast.success(`${product.name.toUpperCase()} добавлена в корзину.`);
    }

    const onRemove = (product) => {
        console.log(product.cartItem)
        findProduct = cartItems.find((item) => item._id === product.cartItem._id && item.color === product.cartItem.color && item.size === product.cartItem.size);
        const tempCart = cartItems.filter((item) => item !== findProduct);


        setTotalPrice(totalPrice - findProduct.price * findProduct.quantity);
        setTotalPriceRub(totalPriceRub - findProduct.priceRub * findProduct.quantity);
        setTotalQuantities(totalQuantities - findProduct.quantity);
        setCartItems(tempCart);
        console.log(cartItems)
        console.log(tempCart)
    };

    const onAddFavorite = (product) => {
        const checkProductInFavorite = favoriteItems.find((item) => item._id === product._id);
        if (checkProductInFavorite) {
            const tempCart = favoriteItems.filter((item) => item._id !== product._id);
            setFavorite(false);
            setFavoriteItems(tempCart);
            toast.success(`${product.name.toUpperCase()} удалён из избранного.`);
        }
        else {
            setFavorite(true);
            setFavoriteItems([...favoriteItems, { ...product }])
            toast.success(`${product.name.toUpperCase()} добавлена в избранное.`);
        }
    }

    const SetSize = (Size) => {
        setSize(Size);
    }
    const SetColor = (Color) => {
        setColor(Color);
    }
    const SetSearch = (Search) => {
        setSearch(String(Search).toLowerCase());
        console.log(search)
    }
    const ClearBusket = () => {
        setCartItems([])
        setTotalPrice(0)
        setTotalPriceRub(0)
        setTotalQuantities(0)
    }

    const toggleCartItemQuantity = (id, color, size, value) => {
        findProduct = cartItems.find((item) => item._id === id && item.color === color && item.size === size);
        index = cartItems.findIndex((product) => product._id === id && product.color === color && product.size === size);
        if (value === 'inc') {
            findProduct.quantity += 1;
            cartItems[index] = findProduct;
            setTotalPrice(totalPrice + findProduct.price);
            setTotalPriceRub(totalPriceRub + findProduct.priceRub);
            setTotalQuantities(totalQuantities + 1);
        }

        if (value === 'dec') {
            if (findProduct.quantity > 1) {
                findProduct.quantity -= 1;
                cartItems[index] = findProduct;
                setTotalPrice(totalPrice - findProduct.price);
                setTotalPriceRub(totalPriceRub - findProduct.priceRub);
                setTotalQuantities(totalQuantities - 1);
            }
        }
    };

    return (
        <Context.Provider value={{
            cartItems,
            favoriteItems,
            totalPrice,
            color,
            size,
            totalQuantities,
            qty,
            favorite,
            search,
            auth,
            country,
            totalPriceRub,
            SetSize,
            SetColor,
            onAdd,
            toggleCartItemQuantity,
            onRemove,
            onAddFavorite,
            SetSearch,
            ClearBusket,
            setAuth,
            setCountry,
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);