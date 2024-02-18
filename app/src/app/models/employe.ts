import { FormControl } from "@angular/forms";

export interface EmployeForm {
  firstName: FormControl<string | null>,
  lastName: FormControl<string | null>,
  email: FormControl<string | null>,
  date: FormControl<string | null>,
  genre: FormControl<Genre | null>
  education: FormControl<string | null>
  compagny: FormControl<string | null>
  experience: FormControl<number | null>
  salaire: FormControl<number | null>
}

export enum Genre {
    male = 'Homme',
    femal = 'Femme',
    others = 'Autres'
  }


export interface Employee{
  id:string
  firstName: string
  lastName: string
  email?: string
  date?: string
  genre?: Genre
  education?: string
  compagny?: string
  experience?: number
  salaire?: number
}