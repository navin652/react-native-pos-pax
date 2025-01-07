import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  init(): string;
  start(): number;
  printStr(text: string, asciiFontType: string, cFontType: string): number;
  printStrWithBase64Img(
    text: string,
    image: string,
    asciiFontType: string,
    cFontType: string
  ): number;
  printBase64Image(image: string): number;
  printReceiptWithQr(
    text: string,
    qrString: string,
    asciiFontType: string,
    cFontType: string
  ): number;
  printQR(
    qrString: string,
    startText: string,
    endText: string,
    asciiFontType: string,
    cFontType: string,
    asciiFontTypeEnd: string,
    cFontTypeEnd: string
  ): number;
  cutPaper(mode: number): boolean;
  getCutMode(): number;
  getStatus(): number;
  fontSet(asciiFontType: string, cFontType: string): string;
  doubleHeight(isAscDouble: boolean, isLocalDouble: boolean): string;
  doubleWidth(isAscDouble: boolean, isLocalDouble: boolean): string;
}

export default TurboModuleRegistry.getEnforcing<Spec>('PosPax');
