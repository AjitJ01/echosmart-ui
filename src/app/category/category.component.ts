import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service'
import { Category } from './category'
import { NotificationService } from '../common/notification.service';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog' 

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit{
  
  categories = []

  constructor(
    public service: CategoryService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<CategoryComponent>
    ) {}

  ngOnInit() {
    this.getCategories();
  }
  category: Category = new Category();
  
  getCategories = () => {
    this.service.getCategorysList().subscribe(
    data => {
      this.categories = data;
    },
    error =>{
      console.log(error);
    }
    );
}
 
onClear() {
  this.service.form.reset();
  this.service.initializeFormGroup();
  
}

onOpen() {
  
  console.log("Printing values while opening form on category component",this.service.form.getRawValue());
  
}

onSubmit(){
  if (this.service.form.valid){
    console.log('Creating category...' )
    this.service.createCategory(this.service.form.value).subscribe(
      data => {
          console.log(data);  
      },
      error =>{
        console.log(error);
      }
      );
    
    this.notificationService.success(':: Submitted successfully');
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.onClose()
  }

}


onClose(){
  console.log("Values while closing on category component",this.service.form.getRawValue());
  this.service.form.reset();
  this.service.initializeFormGroup();
  this.dialogRef.close()

}

}
