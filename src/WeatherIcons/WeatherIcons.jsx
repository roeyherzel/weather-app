import styled from 'styled-components';
import './css/weather-icons.min.css';

const prefixClass = 'wi wi-owm';

const Icon = styled.i.attrs({
    className: ({ id, isDayTime }) => `${prefixClass}-${isDayTime ? 'day' : 'night'}-${id}`,
})`
    && {
        line-height: 1;
    }
`;

export default Icon;
