import { Component, HostListener } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
  imports: [RouterLink]
})
export class HeaderComponent {

  @HostListener('window:scroll', [])
  onWindowsScroll() {
    if (document.documentElement.scrollTop >= 300) {
      return document.getElementById("header")?.classList.add("bg-[#212529]/50")
    }

    return document.getElementById("header")?.classList.remove("bg-[#212529]/50")
  }
}
