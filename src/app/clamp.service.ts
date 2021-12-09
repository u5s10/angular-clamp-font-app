import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClampService {

  constructor() { }

  clampCalc(minWidthPx: number, maxWidthPx: number, minFontSize: number, maxFontSize: number, pixelsPerRem: number): string {

    const minWidth = minWidthPx / pixelsPerRem;
    const maxWidth = maxWidthPx / pixelsPerRem;

    const slope = (maxFontSize - minFontSize) / (maxWidth - minWidth);
    const yAxisIntersection = -minWidth * slope + minFontSize
    return  `clamp(${ minFontSize }rem, ${ yAxisIntersection.toFixed(4) }rem + ${ (slope * 100).toFixed(4) }vw, ${ maxFontSize }rem);`
  }
}
