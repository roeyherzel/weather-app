
export const transformIcon = (weatherID, icon) => {
    const apiMapping = 'owm';
    const match = icon.match(/\d+([d|n])$/);

    if (!match) {
        return `${apiMapping}-${weatherID}`;
    }

    return `${apiMapping}-${match[1] === 'd' ? 'day' : 'night'}-${weatherID}`;
};
