import {test as base} from 'playwright-bdd'
// import { LoginPage } from '../page/LoginPage'
import * as pages from '../page/index'
import { Page } from '@playwright/test';

type MYFixtures={
    LoginPage:pages.LoginPage
}

// export const test= base.extend<MYFixtures>({
//     LoginPage:async({page},use)=>{
//         const loginObj=new pages.LoginPage(page)
//         await use(loginObj)
//     }
// })

// const createTestFunction=<T extends new(page:Page)=>InstanceType<T>>(PageClass:T)=>
// ({page}:{page:page},use:(Fixture:InstanceType<T>)=>Promise<void>)=>
//     use(new PageClass(page));

const createTestFunction = <T extends new (page: Page) => InstanceType<T>>(PageClass: T) =>
    ({ page }: { page: Page }, use: (Fixture: InstanceType<T>) => Promise<void>) =>
    use(new PageClass(page));

export const test=base.extend<MYFixtures>({
    LoginPage:createTestFunction(pages.LoginPage)
})