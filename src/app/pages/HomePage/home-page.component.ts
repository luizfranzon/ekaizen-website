import { Component } from "@angular/core";
import { HeaderComponent } from "../../components/Header/header.component";
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: "app-home",
  standalone: true,
  templateUrl: "./home-page.component.html",
  providers: [NgOptimizedImage],
  imports: [HeaderComponent, HeroSectionComponent]
})
export class HomePageComponent { }
