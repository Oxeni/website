
export const resizeAction = (actionFunction: any) => {
    let timeout: ReturnType<typeof setTimeout>

    window.addEventListener('resize', function () {
        let delay = 250

        clearTimeout(timeout);
        timeout = setTimeout(actionFunction, delay);
    });

    actionFunction();
}