import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage'
import { ReviewService } from '../../services/review.service';
import { Review } from '../../models/Review';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { title } from 'process';
import { RatingComponent } from 'ng-starrating/lib/rating.component';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  Reviews: Review[] = [];
  editableReview:Review;
  filePath: string;
  photoUrl: string;
  task: AngularFireUploadTask;
  currentDate = new Date();
  rated: boolean = false;
  edit:boolean = false;


  public newReviewForm = new FormGroup({
    photoUrl: new FormControl(''),
    title: new FormControl('insert title', [Validators.minLength(5)]),
    rating: new FormControl(5),
    date: new FormControl(this.datepipe.transform(this.currentDate, 'longDate')),
    description: new FormControl('description',[Validators.minLength(10)]),
    author: new FormControl('author name', Validators.minLength(5))
  });

  closeResult = '';

  constructor(private reviewService: ReviewService, private modalService: NgbModal, public datepipe: DatePipe, private af: AngularFireStorage, fb: FormBuilder,private translateService: TranslateService) {
    this.translateService.use(localStorage.getItem('language'));
  }

  upload($event) {
    this.filePath = $event.target.files[0];
    this.uploadImage();
  }

  async uploadImage() {
    this.task = this.af.upload("/reviewImage" + Math.random(), this.filePath);
    (await this.task).ref.getDownloadURL().then(url => {
      this.photoUrl = url;
      this.newReviewForm.setControl("photoUrl", new FormControl(url));
    });  // <<< url is found here

  }


  addReview() {
    console.log(this.newReviewForm.value);
    this.reviewService.insertar(this.newReviewForm.value).
      then(() => {
        console.log("Review insertado");
        this.photoUrl = '';
        //limpiar el formulario
        this.newReviewForm.setValue({
          photoUrl: '',
          title: '',
          rating: 5,
          date: '',
          description: '',
          author: '',
        });
      }, (error) => {
        console.log(error);
      });
  }

  getFormData(){
    this.newReviewForm.setValue({
      photoUrl: this.editableReview.photoUrl,
      title: this.editableReview.title,
      rating: this.editableReview.rating,
      date: this.editableReview.date,
      description: this.editableReview.description,
      author: this.editableReview.author,
    });
  }

  updateReview(){
    this.reviewService.modificar(this.editableReview.documentId, this.newReviewForm.value).
    then(() => {
      console.log("Review was modified");
      this.newReviewForm = new FormGroup({
        photoUrl: new FormControl(''),
        title: new FormControl('insert title', [Validators.minLength(3)]),
        rating: new FormControl(5),
        date: new FormControl(this.datepipe.transform(this.currentDate, 'longDate')),
        description: new FormControl('description'),
        author: new FormControl('author name', Validators.minLength(5))
      });
    }, (error) =>{
      console.log(error)
    });
  }

  delete(id) {
    this.reviewService.eliminar(id).then(() => {
      console.log("Cerveza eliminada");
    }, (error) => {
      console.log(error);
    });
  }

  open(content) {
    this.modalService.open(content,
      { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
        console.log(this.closeResult);
      }, (reason) => {
        this.closeResult =
          `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onRate($event:
    { oldValue: number, newValue: number, starRating: StarRatingComponent }) {
    // alert(`Old Value:${$event.oldValue}, 
    //   New Value: ${$event.newValue}, 
    //   Checked Color: ${$event.starRating.checkedcolor}, 
    //   Unchecked Color: ${$event.starRating.uncheckedcolor}`);
    this.newReviewForm.setControl('rating', new FormControl($event.newValue));
    this.rated = true;
  }

  ngOnInit(): void {
    this.reviewService.getReviews().subscribe(reviews => {

      this.Reviews = [];

      reviews.forEach(element => {
        let data = element.payload.doc.data();
        let id = element.payload.doc.id;
        this.Reviews.push({
          documentId:id,
          photoUrl: data.photoUrl,
          title: data.title,
          rating: data.rating,
          date: data.date,
          description: data.description,
          author: data.author
        })
      });
    })
  }
}
