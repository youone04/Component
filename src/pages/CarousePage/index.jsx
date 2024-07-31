import Carousel from "@/components/Carousel/Carousel";
import TempplatePage from "@/components/TempplatePage";

const images = [
    { src: 'https://wallpapercave.com/uwp/uwp4441818.jpeg', description: 'Keterangan untuk Gambar 1' },
    { src: 'https://wallpapercave.com/uwp/uwp4441825.jpeg', description: 'Keterangan untuk Gambar 2' },
    { src: 'https://wallpapercave.com/uwp/uwp4441820.jpeg', description: 'Keterangan untuk Gambar 3' },
    { src: 'https://d1tgyzt3mf06m9.cloudfront.net/v3-staging/2023/10/film-marvel-buatan-studio-lain-canon-mcu.jpg', description: 'Keterangan untuk Gambar 4' },
    { src: 'https://wallpapercave.com/uwp/uwp4441820.jpeg', description: 'Keterangan untuk Gambar 5' },
    { src: 'https://wallpapercave.com/uwp/uwp4441820.jpeg', description: 'Keterangan untuk Gambar 6' },
    { src: 'https://wallpapercave.com/uwp/uwp4441818.jpeg', description: 'Keterangan untuk Gambar 7' },
    { src: 'https://wallpapercave.com/uwp/uwp4441825.jpeg', description: 'Keterangan untuk Gambar 8' },
    { src: 'https://wallpapercave.com/uwp/uwp4441820.jpeg', description: 'Keterangan untuk Gambar 9' },
    { src: 'https://d1tgyzt3mf06m9.cloudfront.net/v3-staging/2023/10/film-marvel-buatan-studio-lain-canon-mcu.jpg', description: 'Keterangan untuk Gambar 10' },
    { src: 'https://wallpapercave.com/uwp/uwp4441820.jpeg', description: 'Keterangan untuk Gambar 11' },
    { src: 'https://wallpapercave.com/uwp/uwp4441820.jpeg', description: 'Keterangan untuk Gambar 12' },
    { src: 'https://wallpapercave.com/uwp/uwp4441818.jpeg', description: 'Keterangan untuk Gambar 13' },
    { src: 'https://wallpapercave.com/uwp/uwp4441825.jpeg', description: 'Keterangan untuk Gambar 14' },
    { src: 'https://wallpapercave.com/uwp/uwp4441820.jpeg', description: 'Keterangan untuk Gambar 15' },
    { src: 'https://d1tgyzt3mf06m9.cloudfront.net/v3-staging/2023/10/film-marvel-buatan-studio-lain-canon-mcu.jpg', description: 'Keterangan untuk Gambar 16' },
    { src: 'https://wallpapercave.com/uwp/uwp4441820.jpeg', description: 'Keterangan untuk Gambar 17' },
    { src: 'https://wallpapercave.com/uwp/uwp4441820.jpeg', description: 'Keterangan untuk Gambar 18' }




];
const CarouselPage = () => {
    return (
        <TempplatePage>
            <Carousel images={images} />
        </TempplatePage>
    )
}

export default CarouselPage;