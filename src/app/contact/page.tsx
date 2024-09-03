// src/app/contact/page.tsx

import styles from './contact.module.css';

export default function Contact() {
    return (
        <div className={styles.container}>
            <section className={styles.intro}>
                <h1>Contact Us</h1>
                <p>We&apos;d love to hear from you! Whether you have a question about our products, want to give feedback, or just say hello, feel free to reach out.</p>
                <div className={styles.contactInfo}>
                    <p><strong>Location:</strong> 123 Bakery Lane, Sweet Town</p>
                    <p><strong>Phone:</strong> (123) 456-7890</p>
                    <p><strong>Hours:</strong> Mon - Fri: 7am - 7pm, Sat - Sun: 8am - 5pm</p>
                </div>
            </section>

            <section className={styles.contactForm}>
                <h2>Get in Touch</h2>
                <form>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" name="subject" required />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit" className={styles.submitButton}>Send Message</button>
                </form>
            </section>
        </div>
    );
}

