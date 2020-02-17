module.exports = async (browser) => {
    const page = await browser.newPage();

    page.setCookie(
        { domain: 'www.website.com', name: 'staging', value: 'true' },
    );
};
