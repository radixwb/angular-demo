import { Component, OnInit, Input } from "@angular/core"
import { FormGroup } from "@angular/forms"
@Component({
    selector: "app-skill",
    templateUrl: "./address.component.html"
})
export class SkillComponent implements OnInit {

    @Input() skillFormGroup: FormGroup;

    ngOnInit(): void { }
}
