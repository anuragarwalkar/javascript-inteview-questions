async function retry(asyncFn, reties, delay, finalError) {
    const wait = (timeout) => new Promise((resolve, _) => setTimeout(resolve, timeout));

    try {
       return await asyncFn();
    } catch (error) {
        if (reties > 0) {
            await wait(delay);
            return retry(asyncFn, reties - 1, delay, finalError);
        } else {
            return Promise.reject(finalError);
        }
    }
}

const asyncFn = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({ data: [] })
        }, 2000);
    })
}

retry(asyncFn, 3, 50, 'Failed').then(res => {
    console.log('res:', res);
}).catch(err => {
    console.log('err:', err);
});
