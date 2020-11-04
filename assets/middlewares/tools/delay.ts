const delay: Function = (callback: Function, time = 2000) => {
    try {
        return new Promise((resolve: Function, reject: Function) => {
            try {
                setTimeout(() => {
                    callback();
                    return resolve();
                }, time);
            } catch (error) {
                throw reject(error);
            }
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export default delay;
