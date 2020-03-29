export const groupByState = (stateInfoArray) => {
    const ret = {};
    stateInfoArray.forEach(item => {
        ret[item.state.trim()] = item;
    });
    return ret;
}