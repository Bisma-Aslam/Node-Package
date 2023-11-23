function callbackSum() {
    let sum = 0;
    return function(value, callback) {
        sum += value;
        console.log(`Current sum: ${sum}`);
        callback(sum);
    };
}
module.exports = callbackSum;
