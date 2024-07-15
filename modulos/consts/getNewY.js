const getNewY = (initial)=>
    {
        let y = initial;
        const sumar = (jump) =>
        {
            y += jump;
            return y
        };
        return sumar;
    }
module.exports = getNewY;