import styled from 'styled-components';
import './css/weather-icons.min.css';

const prefixClass = 'wi wi-owm';

const Icon = styled.i.attrs({
    className: ({ period, id }) => {
        const iconClass = period ? `${period}-${id}` : id;
        return `${prefixClass}-${iconClass}`;
    },
})`
    && {
        line-height: 1;
    }
`;

export default Icon;
