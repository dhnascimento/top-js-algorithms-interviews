//Write a function that accepts a positive number N and logs a step shape with N levels


function stringSteps(n, step = '#') {

    if (n <= 0) {
        return 'n must be positive';
    }

    let stepsOutput = '';
    let placeholder = ' '.repeat(n);

    for (let i = 0; i < n; i++) {
        stepsOutput += step.repeat(i + 1) + placeholder.slice(i + 1) + ((i !== n - 1) ? '\n' : '');
    }
    return stepsOutput;

}


module.exports = stringSteps;