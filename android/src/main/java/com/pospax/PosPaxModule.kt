package com.pospax

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule
import org.json.JSONException
import org.json.JSONObject


@ReactModule(name = PosPaxModule.NAME)
class PosPaxModule(reactContext: ReactApplicationContext) :
  NativePosPaxSpec(reactContext) {
  val printerUtility: PaxPrinterUtility = PaxPrinterUtility(reactContext)

  override fun getName(): String {
    return NAME
  }

  override fun init(): String {
    printerUtility.getDal()
    printerUtility.init()
    return "Init Success";
  }

  override fun start(): Double {
    return printerUtility.start().toDouble();
  }

  @Throws(JSONException::class)
  override fun printStr(text: String, asciiFontType: String, cFontType: String): Double {
    //Init printer
    printerUtility.getDal()
    printerUtility.init()
    configDefault(asciiFontType, cFontType)

    //Print text
    printerUtility.printStr(text, null)
    printerUtility.printStr("", null)
    printerUtility.step(150)

    //Get Status
    return printerUtility.start().toDouble()
  }

  @kotlin.Throws(JSONException::class)
  override fun printBase64Image(image: String): Double {
    //Init printer
    printerUtility.getDal()
    printerUtility.init()

    //Print image
    if (image != null) {
      printerUtility.printBitmap(ImageToBitmapUtil.base64ToBitmap(image))
      printerUtility.printStr("\n", null)
    }
    printerUtility.step(150)

    //Get Status
    return printerUtility.start().toDouble();
  }

  @kotlin.Throws(JSONException::class)
  override fun printStrWithBase64Img(
    text: String,
    qrString:String,asciiFontType: String,cFontType: String): Double
  {
    //Init printer
    printerUtility.getDal()
    printerUtility.init()

    //Print Image
    if (qrString != null) {
      printerUtility.setLeftIndentation(80)
      printerUtility.printBitmap(ImageToBitmapUtil.base64ToBitmap(qrString))
      printerUtility.printStr("\n", null)
      printerUtility.start()
    }

    printerUtility.init()
    configDefault(asciiFontType, cFontType)
    //Print text
    printerUtility.printStr(text, null)
    printerUtility.printStr("", null)
    printerUtility.step(150)

    //Get Status
    return printerUtility.start().toDouble();
  }

  @kotlin.Throws(JSONException::class)
  override fun printReceiptWithQr(
    text: String,
    qrString: String,
    asciiFontType: String,
    cFontType: String
  ): Double {
    //Init printer
    printerUtility.getDal()
    printerUtility.init()
    configDefault(asciiFontType, cFontType)
    printerUtility.printStr(text, null)
    printerUtility.printStr("", null)
    if (qrString != null) {
      printerUtility.printBitmap(QRCodeUtil.encodeAsBitmap(qrString, 512, 512))
      printerUtility.printStr("", null)
    }
    printerUtility.step(150)
    return printerUtility.start().toDouble();
  }

  @kotlin.Throws(JSONException::class)
  override fun printQR(
    qrString: String,
    startText: String,
    endText: String,
    asciiFontType: String,
    cFontType: String,
    asciiFontTypeEnd: String,
    cFontTypeEnd: String
  ): Double {
    printerUtility.getDal()
    printerUtility.init()

    //Print startText
    if (asciiFontType != null) {
      configDefault(asciiFontType, cFontType)
    }
    if (startText != null) {
      printerUtility.printStr(startText, null)
      printerUtility.printStr("\n", null)
    }

    //Print endText
    if (asciiFontTypeEnd != null) {
      configDefault(asciiFontTypeEnd, cFontTypeEnd)
    }
    if (endText != null) {
      printerUtility.printStr(endText, null)
      printerUtility.printStr("", null)
    }

    //Print QR
    if (qrString != null) {
      printerUtility.printBitmap(QRCodeUtil.encodeAsBitmap(qrString, 512, 512))
      printerUtility.printStr("", null)
    }
    printerUtility.step(150)

    return printerUtility.start().toDouble();
  }

  @kotlin.Throws(JSONException::class)
  override fun cutPaper(mode: Double): Boolean {
    printerUtility.getDal()
    printerUtility.init()
    return printerUtility.cutPaper(mode.toInt())
  }

  @kotlin.Throws(JSONException::class)
  override fun getCutMode(): Double {
    return printerUtility.getCutMode().toDouble()
  }

  @kotlin.Throws(JSONException::class)
  override fun getStatus(): Double {
    printerUtility.getDal()
    printerUtility.init()
    return printerUtility.getStatus().toDouble()
  }

  @kotlin.Throws(JSONException::class)
  override fun fontSet(asciiFontType: String, cFontType: String): String {
    printerUtility.fontSet(asciiFontType, cFontType)
    return "Ok"
  }

  @kotlin.Throws(JSONException::class)
  override fun doubleHeight(isAscDouble: Boolean, isLocalDouble: Boolean): String {
    printerUtility.doubleHeight(isAscDouble, isLocalDouble)
    return "Ok"
  }

  @kotlin.Throws(JSONException::class)
  override fun doubleWidth(isAscDouble: Boolean, isLocalDouble: Boolean): String {
    printerUtility.doubleWidth(isAscDouble, isLocalDouble)
    return "Ok"
  }

  private fun configDefault(asciiFontType: String, cFontType: String) {
    printerUtility.fontSet(asciiFontType, cFontType)
    printerUtility.spaceSet("0".toByte(), "10".toByte())
    printerUtility.setGray(3)
  }

  companion object {
    const val NAME = "PosPax"
  }
}
