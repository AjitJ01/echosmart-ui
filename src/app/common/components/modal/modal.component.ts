import { Component, 
  OnInit, 
  Input, 
  Output, 
  EventEmitter, 
  OnChanges,
  AfterViewInit
} from '@angular/core';
import { CategoryService } from '../../../category/category.service';
import { stringify } from '@angular/compiler/src/util';

export interface categoryData {
  id: number,
  description: string,
  image?: string,
  name: string
}


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() visible: boolean = false;
  @Input() modalTitle: string = "UPDATE CATEGORY";
  @Input() displayData : any;
  @Input() modalType: string;
  selectedData: any;

  @Output() isModalOpen: EventEmitter<any> = new EventEmitter<any>()

  constructor(private serv: CategoryService) { }

  

  ngOnInit(): void {
  }

  ngOnChanges(changes) {
    if(this.displayData !== undefined) console.log(this.displayData[0]);
  }

  ngAfterViewInit() {
  }

  open(data) {
    this.visible = false;
    this.selectedData = data;
  }


  closeModal() {
    this.visible = false;
    this.isModalOpen.emit(false);
  }

  onCreateNew() {
    const name = (<HTMLInputElement>document.getElementById('new-category')).value;
    const description = (<HTMLInputElement>document.getElementById('new-category-description')).value;
    this.serv.createCategory({name: name, description: description}).subscribe(
      x => console.log(x)
    );
    this.visible = false;
    this.isModalOpen.emit(false);
  }


  onClick(e) {}
  onSubmit() {
    const updateData: categoryData = {
      id: 0, name:'', description: ''
    };
    updateData.id = this.selectedData.id;
    updateData.name = (<HTMLInputElement>document.getElementById('category-name')).value;
    updateData.description = (<HTMLInputElement>document.getElementById('category-description')).value;
    
    this.serv.updateCategory(updateData).subscribe(
      data => {console.log(data)},
      error => {console.log(error)}
    );
    this.visible = false;
    this.isModalOpen.emit(false);
  };

}
