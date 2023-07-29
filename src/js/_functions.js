// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там



import { reviewsSlider } from "./components/review-slider";
import { sfeerfotoSlider } from "./components/sfeerfoto-slider";
import * as modal from './components/modal';
import * as sendFormData from './components/sendForm';
import * as toggleMenu from "./components/burger";
import * as animation from "./components/animation"

// Подключение плавной прокрутки к якорям
import SmoothScroll from 'smooth-scroll';
const scroll = new SmoothScroll('a[href*="#"]');

