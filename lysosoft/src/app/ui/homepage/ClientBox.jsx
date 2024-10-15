"use client"
import React, {useEffect, useState} from 'react'

const images = [
    'image1.jpg', // Replace with your image URLs
    'image2.jpg',
    'image3.jpg',
];
const ClientBox = () => {
    const [currentImage, setCurrentImage] = useState(images[0]);

    useEffect(() => {
        // Function to change the image
        const changeImage = () => {
            const randomIndex = Math.floor(Math.random() * images.length);
            setCurrentImage(images[randomIndex]);
        };

        // Event listener to detect the end of the animation
        const imgElement = document.querySelector('.animated-image');

        if (imgElement) {
            imgElement.addEventListener('animationiteration', changeImage);
        }

        return () => {
            if (imgElement) {
                imgElement.removeEventListener('animationiteration', changeImage);
            }
        };
    }, []);
  return (
    <div className="flex items-center justify-center h-screen">
            <div className="relative w-[250px] h-[500px] border border-gray-300 overflow-hidden">
                <img
                    src={currentImage}
                    alt="Animated"
                    className="absolute w-[50px] animate-roam animated-image"
                />
            </div>
        </div>
  )
}

export default ClientBox