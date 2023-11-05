const { $ } = require('@wdio/globals')
const Page = require('./page');

class HelloPage extends Page {
    // Селектор для кнопки toggle
    get toggleBtn () {
        return $('#toggle');
    }

    // Селектор для заголовка hello
    get helloTitle () {
        return $('#hello');
    }

    // Селектор для input с id={"search"}
    get searchInput () {
        return $('#search');
    }

    // Все методы делаем асинхронными
    async toggleTitleWithInput (text) {
        await this.searchInput.setValue(text)
        await this.toggleBtn.click()
    }

    open () {
        return super.open('/hello');
    }
}

module.exports = new HelloPage();
