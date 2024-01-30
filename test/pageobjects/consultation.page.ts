import Page from "./page.js";

const consultationForm: string = "form.ConsultationForm_form__8_HyM";
const nameField: string =
  'form.ConsultationForm_form__8_HyM input[name="name"]';
const nameError: string = "div.ConsultationForm_name__3bVcz > p";
const phoneField: string = "form.ConsultationForm_form__8_HyM input#mobile";
const phoneError: string = "div.ConsultationForm_phone__vEOS9 > p";
const submitConsultationForm: string = "form.ConsultationForm_form__8_HyM button";

class ConsultationPage extends Page {
  public get consultationForm() {
    return super.get(consultationForm);
  }
  public get nameField() {
    return super.get(nameField);
  }
  public get nameError() {
    return super.get(nameError);
  }
  public get phoneField() {
    return super.get(phoneField);
  }
  public get phoneError() {
    return super.get(phoneError);
  }
  public get submitConsultationForm() {
    return super.get(submitConsultationForm);
  }

  public async clickPhoneField() {
    await this.phoneField.click();
  }
  public async clickSubmitConsultationForm() {
    await this.submitConsultationForm.click();
  }
}

export default new ConsultationPage();
