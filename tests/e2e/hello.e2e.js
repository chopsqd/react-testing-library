const { expect } = require('@wdio/globals')
const HelloPage = require('../pages/hello.page')

describe('Hello world page testing', () => {
    it('should toggle', async () => {
        await HelloPage.open()
        await HelloPage.toggleTitleWithInput('hello')
        await expect(HelloPage.helloTitle).toBeExisting()
        await HelloPage.toggleBtn.click()
        await expect(HelloPage.helloTitle).not.toBeExisting()
    })

    it('should not toggle', async () => {
        await HelloPage.open()
        await HelloPage.toggleTitleWithInput('123')
        await expect(HelloPage.helloTitle).not.toBeExisting()
    })
})

