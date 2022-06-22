import { test } from '@playwright/test'

import { LoginPage } from '../pages/login-page'

let loginPage: LoginPage

test.beforeEach(async ({page})=> {
    loginPage = new LoginPage(page)
})

test('deve logar com sucesso', async ({ page }) => {
    await loginPage.go()
    await loginPage.sigIn('qa', 'cademy')
    await loginPage.userLoggedIn()
})

test('senha incorreta', async ({ page }) => {
    await loginPage.go()
    await loginPage.sigIn('qa', 'abc123')
    await loginPage.toastMessage('Oops! Credenciais inválidas :(')
})

test('nome obrigatório', async ({page})=> {
    await loginPage.go()
    await loginPage.sigIn('', 'abc123')
    await loginPage.toastMessage('Informe o seu nome de usuário!')
})

test('senha obrigatória', async ({ page }) => {
    await loginPage.go()
    await loginPage.sigIn('qa', '')
    await loginPage.toastMessage('Informe a sua senha secreta!')
})