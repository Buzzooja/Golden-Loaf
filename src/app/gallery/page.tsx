// src/app/gallery/page.tsx
'use client';


import { useState } from 'react';
import Image from 'next/image';
import styles from './gallery.module.css';

const images = [
    { src: '/images/gallery1.jpg', alt: 'Bakery Item 1' },
    { src: '/images/gallery2.jpg', alt: 'Bakery Item 2' },
    { src: '/images/gallery3.jpg', alt: 'Bakery Item 3' },
    { src: '/images/gallery4.jpg', alt: 'Bakery Item 4' },
    { src: '/images/gallery5.jpg', alt: 'Bakery Item 5' },
    { src: '/images/gallery6.jpg', alt: 'Bakery Item 6' },
    { src: '/images/gallery7.jpg', alt: 'Bakery Item 7' },
    { src: '/images/gallery8.jpg', alt: 'Bakery Item 8' },
    { src: '/images/gallery9.jpg', alt: 'Bakery Item 9' },
    { src: '/images/gallery10.jpg', alt: 'Bakery Item 10' },
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const openLightbox = (index: number) => {
        setSelectedImage(index);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        setSelectedImage((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
    };

    const prevImage = () => {
        setSelectedImage((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Gallery</h1>
            <div className={styles.grid}>
                {images.map((image, index) => (
                    <div key={index} className={styles.imageContainer} onClick={() => openLightbox(index)}>
                        <Image src={image.src} alt={image.alt} width={300} height={300} className={styles.image} />
                    </div>
                ))}
            </div>

            {selectedImage !== null && (
                <div className={styles.lightbox} onClick={closeLightbox}>
                    <button className={styles.closeButton} onClick={closeLightbox}>&times;</button>
                    <button className={styles.prevButton} onClick={(e) => { e.stopPropagation(); prevImage(); }}>&lt;</button>
                    <div className={styles.lightboxContent}>
                        <Image src={images[selectedImage].src} alt={images[selectedImage].alt} width={800} height={800} />
                    </div>
                    <button className={styles.nextButton} onClick={(e) => { e.stopPropagation(); nextImage(); }}>&gt;</button>
                </div>
            )}
        </div>
    );
}
