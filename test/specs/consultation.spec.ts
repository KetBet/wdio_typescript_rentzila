import mainPage from "../pageobjects/main.page.js";
import data from "../../utils/test-data.json" assert { type: "json" };
import consultationPage from "../pageobjects/consultation.page.js";

describe('Verify "У Вас залишилися питання?" form', () => {
  before(async () => {
    await mainPage.openMainUrl();
  });
  it('should verify "У Вас залишилися питання?" form', async () => {
    (await consultationPage.consultationForm).scrollIntoView();
    await expect(await consultationPage.consultationForm).toBeDisplayed();
    await consultationPage.clickSubmitConsultationForm();
    await expect(await consultationPage.nameField).toHaveAttribute(
      "class",
      expect.stringContaining("ConsultationForm_error__F1NM0")
    );

    await expect(await consultationPage.nameError).toHaveText(
      "Поле не може бути порожнім"
    );
    await expect(await consultationPage.phoneField).toHaveAttribute(
      "class",
      expect.stringContaining("ConsultationForm_error__F1NM0")
    );
    await expect(await consultationPage.phoneError).toHaveText(
      "Поле не може бути порожнім"
    );
    await expect(await consultationPage.nameError).toBeDisplayed();
    await expect(await consultationPage.phoneError).toBeDisplayed();
    (await consultationPage.nameField).setValue(`${data.Consultation.name}`);
    await consultationPage.clickSubmitConsultationForm();
    await expect(await consultationPage.nameField).not.toHaveAttribute(
      "class",
      expect.stringContaining("ConsultationForm_error__F1NM0")
    );
    await expect(await consultationPage.phoneField).toHaveAttribute(
      "class",
      expect.stringContaining("ConsultationForm_error__F1NM0")
    );
    await expect(await consultationPage.nameError).not.toBeDisplayed();
    await expect(await consultationPage.phoneError).toBeDisplayed();
    await consultationPage.clickPhoneField();
    await expect(await consultationPage.phoneField).toHaveValue("+380");
    (await consultationPage.phoneField).setValue(`${data.Consultation.validPhone}`);
    (await consultationPage.nameField).clearValue();
    await consultationPage.clickSubmitConsultationForm();
    await expect(await consultationPage.nameField).toHaveAttribute(
      "class",
      expect.stringContaining("ConsultationForm_error__F1NM0")
    );
    await expect(await consultationPage.phoneField).not.toHaveAttribute(
      "class",
      expect.stringContaining("ConsultationForm_error__F1NM0")
    );
    await expect(await consultationPage.nameError).toBeDisplayed();
    await expect(await consultationPage.phoneError).not.toBeDisplayed();
    (await consultationPage.nameField).setValue(`${data.Consultation.name}`);
    await consultationPage.clickPhoneField();
    (await consultationPage.phoneField).setValue(
      `${data.Consultation.invalidPhone1}`
    );
    await browser.pause(1000);
    await consultationPage.clickSubmitConsultationForm();
    await expect(await consultationPage.nameField).not.toHaveAttribute(
      "class",
      expect.stringContaining("ConsultationForm_error__F1NM0")
    );
    await expect(await consultationPage.phoneField).toHaveAttribute(
      "class",
      expect.stringContaining("ConsultationForm_error__F1NM0")
    );
    await expect(await consultationPage.nameError).not.toBeDisplayed();
    await expect(await consultationPage.phoneError).toBeDisplayed();
    await consultationPage.clickPhoneField();
    (await consultationPage.phoneField).setValue(
      `${data.Consultation.invalidPhone2}`
    );
    await consultationPage.clickSubmitConsultationForm();
    await expect(await consultationPage.phoneField).toHaveAttribute(
      "class",
      expect.stringContaining("ConsultationForm_error__F1NM0")
    );
    await expect(await consultationPage.phoneError).toBeDisplayed();
    await consultationPage.clickPhoneField();
    (await consultationPage.phoneField).setValue(`${data.Consultation.validPhone}`);
    await browser.pause(1000);
    browser.setupInterceptor();
    await consultationPage.clickSubmitConsultationForm();
    await browser.pause(2000);
    browser.expectRequest("POST", `${process.env.ENV}api/backcall/`, 201);
    await browser.acceptAlert();
  });
});
