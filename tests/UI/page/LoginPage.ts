import {Locator, Page} from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage{
    // protected page:Page
    readonly emailfield:Locator;
    readonly passwordfield:Locator;
    readonly submit:Locator;
    readonly FinalSubmit:Locator;
    constructor(page:Page){
        // this.page=page;
        super(page);
        this.emailfield=page.locator("//input[@id='mat-input-0']");
        this.passwordfield=page.locator("//input[@type='password']");
        this.submit=page.locator("//input[@value='Login']");
        this.FinalSubmit=page.locator("//button[normalize-space()='Login']")
    }
    async Useremailentry(email:string){
          await this.emailfield.fill(email);
    }
    async passwordentry(password:string){
        await this.passwordfield.fill(password);
    }
    async cilckemailsubmit(){
        await this.submit.click();
    }
    async clickpasswordSubmit(){
        await this.FinalSubmit.click()
    }
}