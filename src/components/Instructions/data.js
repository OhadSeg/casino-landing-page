import Icon1 from '../../assets/Icons/number-one.png';
import Icon2 from '../../assets/Icons/number-two.png';
import Icon3 from '../../assets/Icons/number-three.png';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 520, min: 0 },
    items: 1,
  },
};

const instructionList = [
  {
    id: 1,
    title: 'Regístrate en Codere',
    content: 'Si todavía no eres usuario, abre tu nueva cuenta en menos de 1 minuto.',
    icon: Icon1,
  },
  {
    id: 2,
    title: 'Deposita y apuesta',
    content: '¡Las mejores ligas del mundo están de vuelta!',
    icon: Icon2,
  },
  {
    id: 3,
    title: 'Gana',
    content: 'Déjate guiar por tu intuición y haz tu apuestas',
    icon: Icon3,
  },
];

export { instructionList, responsive };
