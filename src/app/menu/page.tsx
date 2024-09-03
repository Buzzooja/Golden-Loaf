// src/app/menu/page.tsx

import React from 'react';
import styles from './menu.module.css'; // Import the CSS module

// Define the menu data
const breads = [
    { name: "Whole Wheat Bread", price: "£4.00" },
    { name: "Rye Bread", price: "£5.00" },
    { name: "Sourdough", price: "£4.50" },
    { name: "Focaccia", price: "£3.75" },
    { name: "Ciabatta", price: "£4.25" },
    { name: "Baguette", price: "£2.50" },
    { name: "Multigrain", price: "£4.00" },
    { name: "Pita Bread", price: "£3.00" },
    { name: "Naan", price: "£3.50" },
    { name: "Pretzel", price: "£2.75" }
];

const pastries = [
    { name: "Croissant", price: "£2.50" },
    { name: "Danish", price: "£3.00" },
    { name: "Pain au Chocolat", price: "£2.75" },
    { name: "Eclair", price: "£3.50" },
    { name: "Cinnamon Roll", price: "£3.00" },
    { name: "Macaron", price: "£1.50" },
    { name: "Tart", price: "£4.00" },
    { name: "Brioche", price: "£3.25" },
    { name: "Puff Pastry", price: "£2.00" },
    { name: "Chausson aux Pommes", price: "£2.75" }
];

const cakes = [
    { name: "Chocolate Cake", price: "£25.00" },
    { name: "Cheesecake", price: "£30.00" },
    { name: "Carrot Cake", price: "£28.00" },
    { name: "Red Velvet Cake", price: "£32.00" },
    { name: "Lemon Drizzle Cake", price: "£24.00" },
    { name: "Victoria Sponge", price: "£26.00" },
    { name: "Black Forest Cake", price: "£30.00" },
    { name: "Gingerbread Cake", price: "£22.00" },
    { name: "Pound Cake", price: "£20.00" },
    { name: "Mango Mousse Cake", price: "£28.00" }
];

const Menu: React.FC = () => {
    const renderItems = (items: { name: string; price: string }[]) => (
        <>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`${styles.item} ${index % 2 === 1 ? styles.alternate : ''}`}
                >
                    <span className={styles.itemName}>{item.name}</span>
                    <span className={styles.price}>{item.price}</span>
                </div>
            ))}
        </>
    );

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Our Menu</h1>

            <div className={styles.category}>
                <h2 className={styles.categoryHeading}>Breads</h2>
                {renderItems(breads)}
            </div>

            <div className={styles.category}>
                <h2 className={styles.categoryHeading}>Pastries</h2>
                {renderItems(pastries)}
            </div>

            <div className={styles.category}>
                <h2 className={styles.categoryHeading}>Cakes</h2>
                {renderItems(cakes)}
            </div>
        </div>
    );
};

export default Menu;

