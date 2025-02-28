const transformToString = (num) => {
    return num > 9 ? String(num) : '0' + num;
};

export const dateTransform = (date) => {
    if (date) {
        const hours = transformToString(date.getHours());
        const minutes = transformToString(date.getMinutes());
        const day = transformToString(date.getDate());
        const month = transformToString(date.getMonth() + 1);
        const year = transformToString(date.getFullYear()).slice(-2);

        return `${hours}:${minutes} ${day}.${month}.${year}`;
    }
};
