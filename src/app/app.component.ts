import { Component, OnInit} from "@angular/core";
import { AuthService} from './auth/auth.service';

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService){}
  loadedFeature = 'recipe';
  showText = true;
  name = "Angular";
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit() {
    this.authService.autoLogin();
  }
  
  showTheText(): void {
    this.showText = !this.showText;
  }
}
