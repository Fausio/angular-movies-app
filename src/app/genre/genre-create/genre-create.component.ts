import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fistLatterUpperCase } from 'src/app/validators/first_latter_uppar_case';

@Component({
  selector: 'app-genre-create',
  templateUrl: './genre-create.component.html',
  styleUrls: ['./genre-create.component.css']
})
export class GenreCreateComponent implements OnInit {

  constructor(private route: Router, private formBuilder: FormBuilder) { }

  form: FormGroup | any;

  ngOnInit(): void {
    this.form = this.formBuilder.group({

      Name: ['', {

        validators: [
          Validators.required,
          Validators.minLength(3),
          fistLatterUpperCase()]
         
      }]
    });
  }

  SaveChenges() {
    // save file

    this.route.navigate(['/genre']);
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

}
