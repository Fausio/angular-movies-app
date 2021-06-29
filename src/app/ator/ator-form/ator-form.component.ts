import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { atorCreationDTO, atorDTO } from '../ator.model';

@Component({
  selector: 'app-ator-form',
  templateUrl:'./ator-form.component.html',
  styleUrls: ['./ator-form.component.css']
})
export class AtorFormComponent implements OnInit {

  constructor(private formBulder:FormBuilder) { }

  form: FormGroup | any  ;

  @Output()
  onSaveChanges =   new EventEmitter<atorCreationDTO>();

  @Input()
  urlCurrentImage: string| undefined;

  @Input()
  atorModel: atorDTO | undefined;

  ngOnInit(): void {
 
    this.form = this.formBulder.group({

      Name:['',{ validators:[Validators.required]}],
      
      DateOfBirth:['',{validators:[Validators.required]}] ,
      
      Pic:''
    });

    if(this.atorModel !== undefined){
      this.form.patchValue(this.atorModel)
    }
  }

  OnImageSelected(image: any){
    this.form.get('Pic').setValue(image);
  }

  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
  }
}
