import { AbstractControl, Validators } from "@angular/forms";

 


export function fistLatterUpperCase(): Validators  {
    return (control: AbstractControl) => {

        const value = <string>control.value;

        if (value.length === 0) return;

        const firstLetter = value[0];

        if (firstLetter !== firstLetter.toUpperCase()) {
            return {
                fistLatterUpperCase: {
                    message: 'The first letter must be uppercase'
                }
            }
        }
            return;
    }

}


 