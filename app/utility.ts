class Utility {

    static getInputValue(elementId: string): string {
        const inputElement = <HTMLInputElement>document.getElementById(elementId);
        return inputElement.value;
    }

}