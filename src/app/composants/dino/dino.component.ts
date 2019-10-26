import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { DinossaureDatasService } from 'src/app/services/dinossaure-datas.service';



@Component({
  selector: 'app-dino',
  templateUrl: './dino.component.html',
  styleUrls: ['./dino.component.scss']
})
export class DinoComponent implements OnInit {

  dino = new FormGroup({
    name: new FormControl(''),
    date: new FormControl(''),
    food: new FormControl(''),
    family: new FormControl('')
  });
  constructor(private data: DinossaureDatasService, private fb: FormBuilder ) { }

  ngOnInit() {
  }

  add() {
    this.dino = this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      food: ['', Validators.required],
      family: ['', Validators.required]
    });
    console.log(this.dino);
  }
}
