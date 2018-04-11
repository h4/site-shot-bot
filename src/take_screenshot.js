const puppeteer = require('puppeteer');

const takeScreenShot = async (url) => {
  const browser = await puppeteer.launch({dumpio: true, args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto(url);
  const bytes = await page.screenshot();

  await browser.close();
  return bytes;
};

module.exports = takeScreenShot;
