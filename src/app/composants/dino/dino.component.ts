import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { DinossaureDatasService } from 'src/app/services/dinossaure-datas.service';
import { DinoClass } from 'src/app/class/dinoClass';



@Component({
  selector: 'app-dino',
  templateUrl: './dino.component.html',
  styleUrls: ['./dino.component.scss']
})
export class DinoComponent implements OnInit {

  data;
  dino = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    food: new FormControl(''),
    family: new FormControl('')
  });
  constructor(private dinossaureDatasService: DinossaureDatasService, private fb: FormBuilder, private dinoClass: DinoClass ) { }

  ngOnInit() {
    this.init();
    const datas = this.dinossaureDatasService.addDinossaureType();
    datas.subscribe(datasDino => this.data = datasDino);
    console.log(datas);
  }

  init() {
    this.dino = this.fb.group({
      name: ['', Validators.required],
      age: [''],
      food: [''],
      family: ['']
    });
    console.log(this.dino);
  }
  OnSubmit({value, valid}: {value: DinoClass, valid: boolean} ) {
    console.log(value, valid);
  }
}
