import { FormControl } from "@angular/forms";

export interface EmployeForm{
  firstName: FormControl<string | null>,
  LastName: FormControl<string | null>,
  email: FormControl<string | null>,
  dateOfBirth: FormControl<string | null>,
  genre: FormControl<Genre | null>
  education: FormControl<string | null>
  compagny: FormControl<string | null>
  experience: FormControl<number | null>
  pakcage: FormControl<number | null>
}

export enum Genre{
    male = 'Homme',
    femal = 'Femme',
    others = 'Autres'
}
