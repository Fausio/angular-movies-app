import { Component,  Input,  OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  
import { fistLatterUpperCase } from 'src/app/validators/first_latter_uppar_case'; 
import { genreCreationDTO } from '../genres.model';
import { EventEmitter } from "@angular/core";

@Component({
  selector: 'app-form-genre',
  templateUrl: './form-genre.component.html',
  styleUrls: ['./form-genre.component.css']
})
export class FormGenreComponent implements OnInit {
  route: any;

  constructor(private formBuilder: FormBuilder) { }
 
  form: FormGroup | any;

@Input()
model: genreCreationDTO | undefined;

 @Output()
 onSaveChenges: EventEmitter<genreCreationDTO> = new EventEmitter<genreCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({

      Name: ['', {

        validators: [
          Validators.required,
          Validators.minLength(3),
          fistLatterUpperCase()]
         
      }]
    });

    if(this.model !== undefined){

      this.form.patchValue(this.model);
    }
  }

  GetErrorMessage() {

    const field = this.form.get('Name');

    if (field.hasError('required')) {
      return 'This field is required';
    }
    if (field.hasError('minlength')) {
      return 'This minimun lenght is 3 ';
    }
    if (field.hasError('fistLatterUpperCase')) {
      return  field.getError('fistLatterUpperCase').message;
    }

    return '';
  }


  SaveChenges() {
   
    this.onSaveChenges.emit(this.form.value);
 
  }

}
