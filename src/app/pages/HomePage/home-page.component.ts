import { Component } from "@angular/core";
import { HeaderComponent } from "../../components/Header/header.component";
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { NgOptimizedImage } from "@angular/common";
import { AboutSectionComponent } from "./components/about-section/about-section.component";
import { ToolsCarouselSectionComponent } from "./components/tools-carousel-section/tools-carousel-section.component";

@Component({
  selector: "app-home",
  standalone: true,
  templateUrl: "./home-page.component.html",
  providers: [NgOptimizedImage],
  imports: [HeaderComponent, HeroSectionComponent, AboutSectionComponent, ToolsCarouselSectionComponent]
})
export class HomePageComponent { }
