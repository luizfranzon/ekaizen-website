import { Component } from "@angular/core";
import { HeaderComponent } from "../../components/Header/header.component";

@Component({
  standalone: true,
  selector: "app-contact-page",
  templateUrl: "./contact-page.component.html",
  imports: [HeaderComponent]
})
export class ContactPageComponent { }
