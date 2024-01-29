import Page from "./page.js";

const feedbackForm: string = "form.ConsultationForm_form__8_HyM";
const feedbackName: string =
  'form.ConsultationForm_form__8_HyM input[name="name"]';
const feedbackNameError: string = "div.ConsultationForm_name__3bVcz > p";
const feedbackPhone: string = "form.ConsultationForm_form__8_HyM input#mobile";
const feedbackPhoneError: string = "div.ConsultationForm_phone__vEOS9 > p";
const feedbackSubmit: string = "form.ConsultationForm_form__8_HyM button";

class FeedbackPage extends Page {
  public get feedbackForm() {
    return super.get(feedbackForm);
  }
  public get feedbackName() {
    return super.get(feedbackName);
  }
  public get feedbackNameError() {
    return super.get(feedbackNameError);
  }
  public get feedbackPhone() {
    return super.get(feedbackPhone);
  }
  public get feedbackPhoneError() {
    return super.get(feedbackPhoneError);
  }
  public get feedbackSubmit() {
    return super.get(feedbackSubmit);
  }

  public async clickFeedbackPhone() {
    await this.feedbackPhone.click();
  }
  public async clickFeedbackSubmit() {
    await this.feedbackSubmit.click();
  }
}

export default new FeedbackPage();
