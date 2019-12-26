import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Subscription } from "rxjs";

import { DataStorageService } from "../shared/data-storage.service";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  private userSub: Subscription;
  isAuthenticated = false;
  @Output("fsSelected") featureSelected = new EventEmitter<string>();
  constructor(
    private dataStorage: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!!user);
      console.log(!user);

    });
  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  onSaveData() {
    this.dataStorage.saveRecipes();
  }

  onFetchData() {
    this.dataStorage.fetchRecipes().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }
}
