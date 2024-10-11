import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './BannerSlider.css';

// Import your images
import image1 from '../Assets/banner1.png';
import image2 from '../Assets/banner2.png';
import image3 from '../Assets/banner3.png';
import image4 from '../Assets/banner4.png';
import image5 from '../Assets/banner5.png';

const BannerSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true, // Pause autoplay when hovering
        // Optionally, add other settings
        // fade: true, // Uncomment for fade effect between slides
        // arrows: false, // Uncomment to hide navigation arrows
    };

    return (
        <Slider {...settings}>
            <div>
                <img src={image1} alt="Banner 1" />
            </div>
            <div>
                <img src={image2} alt="Banner 2" />
            </div>
            <div>
                <img src={image3} alt="Banner 3" />
            </div>
            <div>
                <img src={image4} alt="Banner 4" />
            </div>
            <div>
                <img src={image5} alt="Banner 5" />
            </div>
        </Slider>
    );
};

export default BannerSlider;
