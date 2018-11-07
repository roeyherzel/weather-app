import styled from 'styled-components';
import './css/weather-icons.min.css';


const Icon = styled.i.attrs({
    className: p => `wi wi-owm-${p.name}`,
})`
    font-size: 1.5rem;
    line-height: 1.5;
`;

export default Icon;
