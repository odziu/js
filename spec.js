describe('Enter GURU99 Name', () => {
    it('should add a Name as GURU99', async () => {
        await browser.get('https://angularjs.org');
        await element(by.model('yourName')).sendKeys('GURU99');
        let guru= element(by.xpath('html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
        expect(guru.getText()).toEqual('Hello change GURU99!');
    });
});
