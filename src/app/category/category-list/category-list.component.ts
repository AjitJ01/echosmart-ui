import { Component, OnInit, ViewChild} from '@angular/core';
import { CategoryService } from '../category.service';
import { MatSort } from '@angular/material/sort'
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { faPlus, faSearch, faExternalLinkAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export interface listData {
  id: number,
  details: string,
  name: string
}

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  
  someData: listData[];
  icons = {
    plus : faPlus,
    search: faSearch,
    externalLink: faExternalLinkAlt,
    trash: faTrashAlt
  };
  isModalOpen: boolean = false;
  modalTitle: string;
  typeOfModal: string;
  modalVisisble: boolean = false;
  constructor(private service : CategoryService, private dialog: MatDialog) {}
  searchKey: string;

  displayColumns: string[] = ['name','details','actions'];
  
  ngOnInit(): void {
    this.service.getCategorysList().subscribe(data => {this.someData = data});
  }

  onSearchClear(){
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter(){  }
  
  onModalOpen() {
    this.modalVisisble = true;
  }
  
  
  onClick() {
    this.isModalOpen = true;
    this.modalTitle = 'Edit Category'
    this.typeOfModal = "editModal"
  }

  onCreateNow() {
    this.isModalOpen = true;
    this.typeOfModal = "createModal";
    this.modalTitle = "Create New Category"
  }

  onDelete(data){
    this.service.deleteCategory(data.id).subscribe(
      x => console.info(`${x} deleted!`)
    );
  };

  closeModal() {
    this.isModalOpen = false
  }
  


}
