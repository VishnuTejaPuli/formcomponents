import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
// import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnChanges , OnInit ,DoCheck, AfterContentInit ,AfterViewInit , AfterContentChecked{






  @Input()
    title: string = 'Hello';
    constructor(){
      console.log("constructor() is called....from child");
    }



    ngDestroy(): void {
      console.log("ngDestroy() is called....from child");
    }

    ngAfterContentInit(): void {
      console.log('constructor() is called from ....child');
    }

  ngAfterViewInit(): void {
    console.log(' ngAfterViewInit() ..... called from child');
  }
  ngAfterContentChecked(): void {
    console.log('called from ....child.');
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges() is called....");
  }
  
     ngDoCheck(): void {
      console.log("ngDoCheck() is called.... from child");
     }

     ngOnInit(): void {
      console.log("ngOnInit() is called....");
     }

     keyCapture(event: any){
         this.title = event;
     }

    //  sendMessage(){
    //      console.log("Message is sent");
    //  }


  // registrationForm: FormGroup;

  // constructor(private fb: FormBuilder) {
  //   this.registrationForm = this.fb.group({
  //     username: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required, Validators.minLength(6)]],
  //     confirmPassword: ['', Validators.required]
  //   }, { validator: this.passwordMatchValidator });
  // }

  // ngOnInit(): void {}

  // passwordMatchValidator(formGroup: FormGroup): null | object {
  //   const password = formGroup.get('password').value;
  //   const confirmPassword = formGroup.get('confirmPassword').value;
  //   return password === confirmPassword ? null : { passwordMismatch: true };
  // }

  // onSubmit(): void {
  //   if (this.registrationForm.valid) {
  //     console.log('Form Submitted', this.registrationForm.value);
  //     // Handle the form submission logic here
  //   }
  // }


}
