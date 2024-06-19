
const Product = (photo, name, description, price) => {
    if (typeof photo !== 'string' || typeof name !== 'string' || typeof description !== 'string' || typeof price !== 'number') {
        throw new Error('Invalid product data');
    }

    return {
        id: crypto.randomUUID(),
        name: name,
        photo: photo,
        description: description,
        price: price
    };
};

// Klucz dla local storage
export const LS_KEY = "Opss2_Shop";

// Funkcja do odczytu z local storage
export const readFromLocalStorage = (key) => {
        const lsData = localStorage.getItem(key);
        return lsData ? JSON.parse(lsData) : [];
};

// Funkcja do zapisu do local storage
export const saveToLocalStorage = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
};


