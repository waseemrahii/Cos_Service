import React from 'react'
import Banner from '../components/Banner'
import PhotoGallery from '../sections/Gallery/PhotoGallery'
import { GalleryData } from '../utils/GalleryData';

export default function Gallery() {
    const { galleryItems } = GalleryData;

    return (
        <>
            <Banner />
            <PhotoGallery galleryItems={galleryItems} />
        </>
    );
}