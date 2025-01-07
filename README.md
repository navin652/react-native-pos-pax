# react-native-pos-pax

Library to print receipts from pax machines

#### This package based on [PAX Device with NetptuneLiteApi](https://docs.hips.com/docs/pax-a920 "PAX Device") SDK

## Important: 
  **THIS PACKAGE WILL WORK ONLY IN ANDROID!**

## Installation

```sh
npm install react-native-pos-pax
```

## What this package can do
- [✅] Initialize the printer => use init
- [✅] Get Printer Status => use getStatus
- [✅] Set setGray level => use setGray
- [✅] Set Print => use setInvert
- [✅] Change font set => use fontSet
- [✅] Change space set => use spaceSet
- [✅] Write some text => use printStr
- [✅] Jump (n) lines => use step
- [✅] Bold mode on/off => use setDoubleWidth and setDoubleHeight to true
- [✅] Print QR codes => use printQRCode
- [✅] Cut paper - Dedicated method just to cut the line
- [✅] Print image from asset or from web (example show how to print both) => use printImageUrl
- [✅] Print Bitmap => use printBitmap
- [✅] Print Image From Asset => use printImageAsset
- [✅] Set Left Indents => use leftIndents
- [ ] Draw a divisor line
- [ ] Print all types of Barcodes (see enum below)
- [ ] Print rows like recepit with custom width and alignment
- [ ] Able to combine with some esc/pos code that you already have!
- [ ] Printer serial no - Get the serial number of the printer
- [ ] Printer version - Get the printer's version
- [ ] Printer paper size - Get the paper size ( 0: 80mm 1: 58mm)


## Other Functions
- Template Print Receipt With QR => printReceiptWithQr
- Template Print Receipt => printReceipt
- Template Print QR with info => printQRReceipt

## Tested Devices

```bash
PAX A920 
```


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
