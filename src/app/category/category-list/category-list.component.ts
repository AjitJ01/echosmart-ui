import { Component, OnInit, ViewChild} from '@angular/core';
import { CategoryService } from '../category.service';
import { MatSort } from '@angular/material/sort'
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'
import { CategoryComponent } from '../category.component';
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

  constructor(private service : CategoryService, private dialog: MatDialog) {
  }

    
  
  listData: MatTableDataSource<any>;
  searchKey: string;

  displayColumns: string[] = ['name','details','actions'];

  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  ngOnInit(): void {
    this.service.getCategorysList().subscribe(data => {
      console.log(data);
      this.listData = new MatTableDataSource(data);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
      //console.log(data); // this gives all list of data
      this.someData = data;
      // console.log(this.someData);
    });
    console.log(this.someData)
  }

  onSearchClear(){
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter(){
    // this.listData.filter = this.searchKey.trim().toLowerCase();
  }
  
  onModalOpen() {
    this.modalVisisble = true;
  }
  
  onCreate(){
    console.log('clicked')
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(CategoryComponent,dialogConfig).afterClosed().subscribe(result => {
      this.service.getCategorysList().subscribe(data => {
        this.listData = new MatTableDataSource(data);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
      })
    })
  }

  onEdit(row){
    console.log("on edit function from category-list component - before populate form",this.service.form.getRawValue())
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    console.log("on edit function from category-list component - after populate form",this.service.form.getRawValue())
    
    console.log(dialogConfig);
    // console.log(CategoryComponent.dialogRef)
    this.dialog.open(CategoryComponent,dialogConfig);
    console.log("on edit function from category-list component - after opening  form",this.service.form.getRawValue())
    
    // dialogRef.afterClosed().subscribe(data => {
    //         console.log("Subtask Dialog output:", data);
    //     });

    //   }

  // addSubtask(task){
  //   this.taskID = task._id;
  //   const dialogSubTaskRef = this.dialog.open(AddNewSubtaskDialog, {
  //     data{
  //      taskID: this.taskID,
  //      description: this.subtaskDescription,
  //      dueDate:     this.subtaskDuedate,
  //     }
  //   });
  
  //   dialogSubTaskRef.afterClosed().subscribe(data => {
  //       console.log("Subtask Dialog output:", data);
  //   }
  // }
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
    console.log(data);
    this.service.deleteCategory(data.id).subscribe(
      x => console.log(`${x} deleted!`)
    );
  };

  closeModal() {
    this.isModalOpen = false
  }
  


}
