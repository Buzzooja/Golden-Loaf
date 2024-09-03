// src/app/page.tsx

import Link from 'next/link';
import Image from 'next/image';
import styles from './home.module.css';
import { GiBread } from 'react-icons/gi';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Welcome to Golden Loaf</h1>
        <p>Delicious baked goods made fresh daily.</p>
        <Link href="/menu" className={styles.ctaButton}>
          Explore Our Menu
        </Link>
      </section>

      {/* Featured Items Section */}
      <section className={styles.featured}>
        <h2>Featured Items</h2>
        <div className={styles.featuredItems}>
          <div className={styles.featuredItem}>
            <Image src="/images/croissant.jpg" alt="Croissant" width={300} height={200} />
            <h3>Buttery Croissants</h3>
            <p>Our croissants are made fresh daily, with a perfect flaky crust.</p>
          </div>
          <div className={styles.featuredItem}>
            <Image src="/images/cake.jpg" alt="Cake" width={300} height={200} />
            <h3>Chocolate Cake</h3>
            <p>A rich, moist chocolate cake that&apos;s a crowd favourite.</p>
          </div>
          <div className={styles.featuredItem}>
            <Image src="/images/pastries.jpg" alt="Pastries" width={300} height={200} />
            <h3>Assorted Pastries</h3>
            <p>A variety of sweet and savoury pastries to start your day right.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <h2>What Our Customers Say</h2>
        <div className={styles.testimonialQuotes}>
          <blockquote>
          &quot;The best bakery in town! The croissants are to die for.&quot;
          </blockquote>
          <blockquote>
          &quot;I love their chocolate cake. It&apos;s my go-to for every special occasion.&quot;
          </blockquote>
          <blockquote>
          &quot;Such a cozy place with the friendliest staff. Highly recommend!&quot;
          </blockquote>
        </div>
      </section>

      {/* Newsletter Sign-Up Section */}
      <section className={styles.newsletter}>
        <h2>Stay Updated</h2>
        <p>Sign up for our newsletter to get the latest news and special offers!</p>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Sign Up</button>
        </form>
      </section>
    </main>
  );
}
