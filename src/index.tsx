import PosPax from './NativePosPax';
interface PrintConfig {
  text?: string;
  asciiFontType?: string;
  cFontType?: string;
  image?: string;
  qrString?: string;
  startText?: string;
  endText?: string;
  asciiFontTypeEnd?: string;
  cFontTypeEnd?: string;
  mode?: string;
}

const FULL_CUT = 0;
const PARTIAL_CUT = 1;

const init = (): string => PosPax.init();

const start = (): number => PosPax.start();

const printStr = (printConfig: PrintConfig): number => {
  const text = printConfig.text ?? '';
  const asciiFontType = printConfig.asciiFontType ?? 'FONT_12_24';
  const cFontType = printConfig.cFontType ?? 'FONT_16_16';
  return PosPax.printStr(text, asciiFontType, cFontType);
};

const printStrWithBase64Img = (printConfig: PrintConfig): number => {
  const text = printConfig.text ?? '';
  const asciiFontType = printConfig.asciiFontType ?? 'FONT_12_24';
  const cFontType = printConfig.cFontType ?? 'FONT_16_16';
  const image = printConfig.image ?? '';
  return PosPax.printStrWithBase64Img(text, image, asciiFontType, cFontType);
};

const printReceiptWithQr = (printConfig: PrintConfig): number => {
  const text = printConfig.text ?? '';
  const qrString = printConfig.qrString ?? '';
  const asciiFontType = printConfig.asciiFontType ?? 'FONT_12_24';
  const cFontType = printConfig.cFontType ?? 'FONT_16_16';
  return PosPax.printReceiptWithQr(text, qrString, asciiFontType, cFontType);
};

const printQR = (printConfig: PrintConfig) => {
  const qrString = printConfig.qrString ?? '';
  const startText = printConfig.startText ?? '';
  const endText = printConfig.endText ?? '';
  const asciiFontType = printConfig.asciiFontType ?? 'FONT_12_24';
  const cFontType = printConfig.cFontType ?? 'FONT_16_16';
  const asciiFontTypeEnd = printConfig.asciiFontTypeEnd ?? 'FONT_12_24';
  const cFontTypeEnd = printConfig.cFontTypeEnd ?? 'FONT_16_16';
  return PosPax.printQR(
    qrString,
    startText,
    endText,
    asciiFontType,
    cFontType,
    asciiFontTypeEnd,
    cFontTypeEnd
  );
};

const cutPaper = (mode: number) => PosPax.cutPaper(mode ?? 0);

const getCutMode = () => PosPax.getCutMode();

const getStatus = () => PosPax.getStatus();

const fontSet = (asciiFontType: string, cFontType: string) =>
  PosPax.fontSet(asciiFontType ?? 'FONT_12_24', cFontType ?? 'FONT_16_16');

const doubleHeight = (isAscDouble: boolean, isLocalDouble: boolean) =>
  PosPax.doubleHeight(isAscDouble ?? false, isLocalDouble ?? false);

const doubleWidth = (isAscDouble: boolean, isLocalDouble: boolean) =>
  PosPax.doubleWidth(isAscDouble ?? false, isLocalDouble ?? false);

const PaxPrinterUtility = {
  FULL_CUT,
  PARTIAL_CUT,
  init,
  start,
  printStr,
  printStrWithBase64Img,
  printReceiptWithQr,
  printQR,
  cutPaper,
  getCutMode,
  getStatus,
  fontSet,
  doubleHeight,
  doubleWidth,
};

export default PaxPrinterUtility;
