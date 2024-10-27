import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-biodata',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './biodata.component.html',
  styleUrl: './biodata.component.scss'
})
export class BiodataComponent implements OnInit {
  userForm: FormGroup;

  // nitya = new FormControl('', [Validators.required, Validators.minLength(3)])

  constructor(private fb: FormBuilder, private crudService: CrudService) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      hobbies: this.fb.array([])
      //nitya:this.nitya
    });
  }


  ngOnInit(): void {
    // this.fetchBookDetails();
    // this.subscribeToForms();
  }

  subscribeToForms() {
    this.userForm.valueChanges.subscribe((valueChanges) => {
      console.log(valueChanges.email);
    })
  }

  fetchBookDetails(): void {
    this.crudService.getBookDetails().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.log(`I'll run irrespective of anything`);
      }
    })
  }


  get hobbies(): FormArray {
    return this.userForm.get('hobbies') as FormArray;
  }

  addHobby() {
    this.hobbies.push(this.fb.control('', Validators.required));
  }

  removeHobby(index: number) {
    this.hobbies.removeAt(index);
  }

  onSubmit() {
    // console.log(this.userForm.controls['name'].disabled);
    // this.userForm.controls['name'].disable();
    // console.log(this.userForm.controls['name'].disabled);

    if (this.userForm.valid) {
      console.log(this.userForm.value);
    } else {
      console.log('Form is not valid');
    }
  }
}
