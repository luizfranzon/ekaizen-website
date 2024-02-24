import { Component } from "@angular/core";
import { HeaderComponent } from "../../components/Header/header.component";

@Component({
  selector: "app-home",
  standalone: true,
  templateUrl: "./home-page.component.html",
  imports: [HeaderComponent]
})
export class HomePageComponent { }
