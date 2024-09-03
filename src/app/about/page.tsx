// src/app/about/page.tsx

import Image from 'next/image';
import styles from './about.module.css';

export default function About() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Welcome to Golden Loaf</h1>
                    <p>Where every bite tells a story.</p>
                </div>
            </section>

            <section className={styles.story}>
                <h2>Our Story</h2>
                <p>Our bakery started with a passion for baking and a dream of sharing delicious, handmade treats with our community. From our humble beginnings to our current location, we’ve always been dedicated to quality and craftsmanship.</p>
                <Image src="/images/bakery.jpg" alt="Our Bakery" width={600} height={400} className={styles.storyImage} />
            </section>

            <section className={styles.team}>
                <h2>Meet the Team</h2>
                <div className={styles.teamMembers}>
                    <div className={styles.member}>
                        <Image src="/images/Jane-Doe.jpg" alt="Team Member 1" width={200} height={250} className={styles.memberImage} />
                        <h3>Jane Doe</h3>
                        <p>Head Baker</p>
                    </div>
                    <div className={styles.member}>
                        <Image src="/images/John-Smith.jpg" alt="Team Member 2" width={200} height={250} className={styles.memberImage} />
                        <h3>John Smith</h3>
                        <p>Pastry Chef</p>
                    </div>
                </div>
            </section>

            <section className={styles.values}>
                <h2>Our Values</h2>
                <p>We believe in using the finest ingredients and baking with love. Our commitment to quality and sustainability guides everything we do, from sourcing local ingredients to reducing our environmental footprint.</p>
            </section>

            <section className={styles.cta}>
                <p>Want to taste our creations? Check out our <a href="/menu">menu</a> or visit us in person!</p>
            </section>
        </div>
    );
}
