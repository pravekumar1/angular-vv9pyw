import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  loadedFeature = 'recipe';
  showText = true;
  name = "Angular";
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
  
  showTheText(): void {
    this.showText = !this.showText;
  }
}
