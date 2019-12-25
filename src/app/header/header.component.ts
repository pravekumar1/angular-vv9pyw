import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { DataStorageService} from  '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output('fsSelected') featureSelected = new EventEmitter<string>();
  constructor( private dataStorage: DataStorageService) { }

  ngOnInit() {
  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  onSaveData() {
    this.dataStorage.saveRecipes();
  }

}