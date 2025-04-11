export const getItems = (key: string) => {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (error) {
        console.log("Error getting data", error);
        return null;
    }
};

export const setItems = (key: string, data: any) => {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.log("Error setting data", error);
        return null;
    }
};
