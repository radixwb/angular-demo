import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup, Validators } from "@angular/forms"
import { Router } from "@angular/router"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app works!';
    backgroundColor: string = "green";
    isAppliedClass: boolean = false;
    loginGroup: FormGroup

    candidateFormGroup: FormGroup
    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {

        this.loginGroup = this.formBuilder.group({
            "userName": ["saiyed",Validators.required],
            "password": ["radix", Validators.required]
        })
        this.candidateFormGroup = this.formBuilder.group({
            "candidateName": ["", [Validators.required, nameValidator]],
            "jobOrder": this.formBuilder.group({
                "jobOrderName": ["Test Job", Validators.required] 
            }),
            "skills": this.formBuilder.array([
                this.getSkillFormGroup()
            ]) 
        })
        console.log(this.candidateFormGroup.value)
        console.log(this.candidateFormGroup)
        //this.router.navigate(['client', 1], { queryParams: { "id": 2 }})
    }

    getSkillFormGroup(): FormGroup {
        return this.formBuilder.group({
            "skillName": ["Angular", Validators.required]
        })
    }

    addSkill(): void {
        let skills = <FormArray>this.candidateFormGroup.controls["skills"]
        skills.controls.push(this.getSkillFormGroup())
    }

    

    changeClass(): void {
        this.isAppliedClass = !this.isAppliedClass;
    }

    onSubmit(loginObject: any): void {
        console.log(loginObject)
    }
}

function nameValidator(formControl: FormControl): {
    [s: string]: boolean
} {
    console.log(formControl.value)
    if (formControl.value.indexOf("saiyed") == -1) {
        return {
            "nameValidator":true
        }
    }
}
