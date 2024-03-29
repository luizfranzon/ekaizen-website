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

  isMenuOpen = false

  toggleMobileMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }

  @HostListener('window:scroll', [])
  onWindowsScroll() {
    if (document.documentElement.scrollTop >= 80) {
      return document.getElementById("header")?.classList.add("bg-[#14171a]/50")
    }

    return document.getElementById("header")?.classList.remove("bg-[#14171a]/50")
  }
}
