import {test, expect} from '@playwright/test';

test('Login com sucesso', async ({page}) => {

    const usuario = {
        email: 'andersonvilarins@outlook.com.br',
        senha: 'Teste123456',
        nome: 'Brad Pitt'
    }

    await page.goto('https://magento2-demo.magebit.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvMi1kZW1vLm1hZ2ViaXQuY29tLw%2C%2C/')

    await page.locator('#email').fill(usuario.email)
    await page.locator('#pass').fill(usuario.senha)

    await page.getByRole('button', { name: 'Sign In' }).click()
    await page.waitForTimeout(3000)

    // Aguarda o elemento de boas-vindas aparecer
    const welcomeLocator = page.locator('xpath=/html/body/div[2]/header/div[1]/div/ul/li[1]/span');
    await expect(welcomeLocator).toBeVisible();

    // Valida o nome do usuário logado
    const mensagemBoasVindas = await welcomeLocator.textContent()
    expect(mensagemBoasVindas).toContain(`Welcome, ${usuario.nome}`)
})