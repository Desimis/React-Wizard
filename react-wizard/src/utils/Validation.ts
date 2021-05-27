export const IsStepComplete = (values: string[]): boolean => {
    let stepComplete: boolean = false;

    for(let i = 0; i < values.length; i++) {
        if(values[i] && values[i].length > 0) {
            stepComplete = true;
        } else {
            stepComplete = false;
            break;
        }
    }

    return stepComplete;
}