import mainPage from "../pageobjects/main.page.js";
import data from "../../utils/test-data.json" assert { type: "json" };
import consultationPage from "../pageobjects/consultation.page.js";
import ApiHelper from "../../utils/API.helper.js";

describe('Verify "У Вас залишилися питання?" form', () => {
  before(async () => {
    await mainPage.openMainUrl();
  });
  it('should verify "У Вас залишилися питання?" form', async () => {
    (await consultationPage.consultationForm).scrollIntoView();
    await mainPage.clickCloseTelegramPopUp();
    await expect(await consultationPage.consultationForm).toBeDisplayed();
    await consultationPage.clickSubmitConsultationForm();
    await expect(await consultationPage.nameError).toHaveText(
      "Поле не може бути порожнім"
    );
    await expect(await consultationPage.phoneError).toHaveText(
      "Поле не може бути порожнім"
    );
    await expect(await consultationPage.nameError).toBeDisplayed();
    await expect(await consultationPage.phoneError).toBeDisplayed();
    await consultationPage.nameField.setValue(`${data.Consultation.name}`);
    await consultationPage.clickSubmitConsultationForm();
    await expect(await consultationPage.nameField).not.toHaveAttribute(
      "class",
      expect.stringContaining("ConsultationForm_error__F1NM0")
    );
    await expect(await consultationPage.nameError).not.toBeDisplayed();
    await expect(await consultationPage.phoneError).toBeDisplayed();
    await consultationPage.clickPhoneField();
    await expect(await consultationPage.phoneField).toHaveValue("+380");
    await consultationPage.phoneField.setValue(`${data.Consultation.validPhone}`);
    await consultationPage.nameField.clearValue();
    await consultationPage.clickSubmitConsultationForm();
    await expect(await consultationPage.nameField).toHaveAttribute(
      "class",
      expect.stringContaining("ConsultationForm_error__F1NM0")
    );
    await expect(await consultationPage.nameError).toBeDisplayed();
    await expect(await consultationPage.phoneError).not.toBeDisplayed();
    await consultationPage.nameField.setValue(`${data.Consultation.name}`);
    await consultationPage.clickPhoneField();
    await consultationPage.phoneField.setValue(
      `${data.Consultation.invalidPhone1}`
    );
    await consultationPage.clickSubmitConsultationForm();
    await expect(await consultationPage.nameField).not.toHaveAttribute(
      "class",
      expect.stringContaining("ConsultationForm_error__F1NM0")
    );
    await expect(await consultationPage.nameError).not.toBeDisplayed();
    await expect(await consultationPage.phoneError).toBeDisplayed();
    await consultationPage.clickPhoneField();
    await consultationPage.phoneField.setValue(
      `${data.Consultation.invalidPhone2}`
    );
    await consultationPage.clickSubmitConsultationForm();
    await expect(await consultationPage.phoneError).toBeDisplayed();
    await consultationPage.clickPhoneField();
    await consultationPage.phoneField.setValue(`${data.Consultation.validPhone}`);
    await consultationPage.clickSubmitConsultationForm();
    const apiHelper = new ApiHelper();
    const feedbackList = await apiHelper.getFeedbackList();
    await mainPage.checkFeedbackPresent(
      feedbackList,
      data.Consultation.name,
      data.Consultation.validPhone
    );
  });
});
