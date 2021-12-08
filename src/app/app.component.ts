import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClampService } from './clamp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _clampService: ClampService, private _snackBar: MatSnackBar) {
  }
  minWidth: number = 360;
  maxWidth: number = 768;
  minFont: number = 1;
  maxFont: number = 3.5;
  pxPerRem: number = 16;
  clamp: string = this._clampService.clampCalc(this.minWidth, this.maxWidth, this.minFont, this.maxFont, this.pxPerRem);
  recalculate() {
    this.clamp = this._clampService.clampCalc(this.minWidth, this.maxWidth, this.minFont, this.maxFont, this.pxPerRem);
  }

  openSnackBar() {
    this._snackBar.open("Copied to clipboard!", "Close", {duration: 3000});
  }
}
