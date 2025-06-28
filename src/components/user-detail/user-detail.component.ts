import { CommonModule, JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule, NgIf,NgFor, JsonPipe],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {
  activeSection: 'personal' | 'experience' | 'education' | 'objective' | 'skill' 
  | 'declaration' | 'interests' |'projects' | 'moreSection' | 'rearrange' = 'personal';
  
  previewUrl: string | ArrayBuffer | null = null; 

  educationForm!: FormGroup;  
  experienceForm !: FormGroup;  
  skillForm !: FormGroup; 
  declarationForm! : FormGroup;
  interestsForm !: FormGroup; 
  projectsForm!:FormGroup;
  ed!:any; 
  ob:any; 

  ngOnInit(): void{
    this.educationForm= this.fb.group({
      educations: this.fb.array([this.createEducationForm()])
    }), 

    // this is firsttime load the experience forms control
    this.experienceForm = this.fb.group({
      experiences: this.fb.array([this.createExperienceForm()])
    }) 
    this.skillForm = this.fb.group({
      skills: this.fb.array([this.createSkillForm()])
    })
    this.declarationForm = this.fb.group({
      declarations: this.fb.array([this.createDeclarationForm()])
    }) 
    this.interestsForm = this.fb.group({
      interests : this.fb.array([])
    })
    this.projectsForm = this.fb.group({
projects:  this.fb.array([])
    })
  } 

  constructor(private router: Router, private fb :FormBuilder) { }

  goToUserDetail() {
    this.router.navigate(['/app-personalDetail']);
  }

  personaldetail: FormGroup = new FormGroup({

    fullName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
    address: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    photo: new FormControl('', [Validators.required]),


  }) 

  

  userInfo: any = ''
  onSave() {
    debugger;
    console.log("this is the user")
    this.userInfo = this.personaldetail.value
    console.log(this.userInfo);
    console.log(this.personaldetail.value)
 
  } ;

  onReset() {
    debugger;
  } 

handleFileInput(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    const file = input.files[0];
    this.personaldetail.patchValue({ photo: file });

    const reader = new FileReader();
    reader.onload = () => {
      this.previewUrl = reader.result;
    };
    reader.readAsDataURL(file);
  }
} 

//  Education section details
createEducationForm() : FormGroup{
    return this.fb.group({
    degree: [''],
    university: [''],
    score: [''],
    year: ['']

    })
  }

 
get educations() : FormArray{

  return this.educationForm.get('educations') as  FormArray;
}

addEducation() : void{ 
  
  this.educations.push(this.createEducationForm());
  
}

removeEducation(index: number): void {  
  const  firmDelete = confirm(`Are you sure you want to remove education entry #${index + 1}?`);
   if(index !==0 ){ 
  

this.educations.removeAt(index);
   }else{ 
    alert("If entry exist more than one then you can delete one by one");
   }
  
}

saveEducation(){  
  this.ed= this.educationForm.value;

} 


// Experience Details

createExperienceForm(): FormGroup{

  return this.fb.group(
 {
  companyName :[''],
  jobTitle: [''],
  startDate:[''],
  endDate:[''],
  experience:['']
 }
  )
} 

get experiences(): FormArray{
 return this.experienceForm.get('experiences') as FormArray;
}

addExperience(): void{
  this.experiences.push(this.createExperienceForm())
} 

removeExperience(index: number): void{  
   const  firmDelete = confirm(`Are you sure you want to remove education entry #${index + 1}?`);
  if(index !==0 ){
  this.experiences.removeAt(index)
  }else{
    console.log(" you cant delete") 
    alert("If entry exist more than one then you can delete one by one");

   }
}

/// Objective

objectiveForm : FormGroup = new FormGroup({
  objective: new FormControl('')
})


saveObjective() :void{
  this.ob= this.objectiveForm.value;
  console.log(this.ob);
}
// Skill 

createSkillForm() : FormGroup{
  return this.fb.group(
    {skill: ['']

    }
  )
} 

get skills(): FormArray{
  return this.skillForm.get('skills') as FormArray;

} 

addSkill(): void{
  this.skills.push(this.createSkillForm());
}

sk:any;

saveSkill(){
this.sk= this.skillForm.value;
}

removeskill(index :number): void{ 
 console.log("thisbd  "+index)
  if(index !==0){
  this.skills.removeAt(index);
  }else{
    alert("Hi Folk, you can not delete the declarations")
  }



}

/// this is  the declartion section

createDeclarationForm(): FormGroup{
  return this.fb.group({

    refreesName:[''],
    jobTitle:[''],
    companyName:[''],
    email:[''],
    phone:['']

    
  })
} 
get declarations() : FormArray{
  return this.declarationForm.get('declarations') as FormArray;
}

addDeclaration(): void{
  this.declarations.push(this.createDeclarationForm());
}
 

removeDeclaration(index :number): void{ 

  if(index !==0){
  this.declarations.removeAt(index);
  }else{
    alert("Hi Folk, you can not delete the declarations")
  }



}
// for this interest  

createInterestForm() : FormGroup{
  return this.fb.group({
    interests : ['']
  })
}


get interests() : FormArray{
return this.interestsForm.get('interests') as FormArray;
} 

addInterests() : void{

  this.interests.push(this.createInterestForm())
}
removesInterest(index : number):void{

  this.interests.removeAt(index);
}

// this is the project section

createProjectForm() : FormGroup{
 return this.fb.group({
    title:[''],
    description: ['']
 })
} 

get projects() : FormArray{
  return this.projectsForm.get('projects') as FormArray
}

addProjects(){
  this.projects.push(this.createProjectForm())
}

removeProjects(index : number) : void{
  this.projects.removeAt(index);
}




}


