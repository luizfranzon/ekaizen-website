import { Component } from "@angular/core";
import { HeaderComponent } from "../../components/Header/header.component";

@Component({
  standalone: true,
  selector: "app-tools-page",
  templateUrl: "./tools-page.component.html",
  imports: [HeaderComponent]
})
export class ToolsPageComponent { }
