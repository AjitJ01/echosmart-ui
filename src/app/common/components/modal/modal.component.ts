import { Component, 
  OnInit, 
  Input, 
  Output, 
  EventEmitter, 
  OnChanges,
  AfterViewInit
} from '@angular/core';
import { CategoryService } from '../../../category/category.service';

export interface categoryData {
  id: number,
  description: string,
  image: string,
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
    console.log(this.modalType);
  }

  ngOnChanges(changes) {
    if(this.displayData !== undefined) console.log(this.displayData[0]);
  }

  ngAfterViewInit() {
  }

  open(data) {
    this.visible = false;
    this.selectedData = data;
    console.log(this.selectedData);
  }


  closeModal() {
    this.visible = false;
    this.isModalOpen.emit(false);
  }

  onCreateNew() {
    const name = (<HTMLInputElement>document.getElementById('new-category')).value;
    console.log(`name: ${name}`)
    const description = (<HTMLInputElement>document.getElementById('new-category-description')).value;
    this.serv.createCategory({name: name, description: description}).subscribe(
      x => console.log(x)
    );
  }


  onClick(e) {}


}
