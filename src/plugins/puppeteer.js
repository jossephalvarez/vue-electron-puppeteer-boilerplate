// const fs = require('fs'); // Write to local file system
import puppeteer from 'puppeteer-core';

global.share.ipcMain.on('puppeteer', async () => {
  console.log('ON PUPPETER FIRST');
  // Envoke Puppeteer
  const browser = await puppeteer.launch(
    {
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
      headless: false
    }
  );
    console.log('ON PUPPETER');
    const page = await browser.newPage();
    await page.setViewport({
        width: 1920,
        height: 1080,
    });
    await page.setExtraHTTPHeaders({
        'Accept-Language': 'es',
    });
    const profileURL = 'https://web.wallapop.com/profile/info';
    await page.goto(profileURL);
    await page.screenshot({path: '.png'});
    await browser.close();
    console.log('FINISHING ... ON PUPPETER');
})
