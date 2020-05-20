const DEFAULT_SETTINGS = require("./DEFAULT_SETTINGS"),
    path = require("path"),
    Jimp = require("jimp");

module.exports = (source, targetDir, settings = DEFAULT_SETTINGS) => {
    async function createIcon (size, fileName) {
        return Jimp.read(source).then(img => {
            return img
                .resize(size, size)
                .write(path.join(targetDir, fileName));
        });
    }

    var jobs = [];

    // For Chrome for Android:
    jobs.push(createIcon(192, "touch-icon-192x192.png"));

    // For non-Retina iPhone, iPod Touch, and Android 2.1+ devices
    jobs.push(createIcon(57, ["apple-touch-icon", settings.precomposed ? "-precomposed" : "", ".png"].join("")));

    // Generate icons for every apple device known to mankind
    settings.appleSizes.forEach(size => {
        const fileName = ["apple-touch-icon",
            `-${size}x${size}`,
            settings.precomposed ? "-precomposed" : "",
            ".png"].join("");

        jobs.push(createIcon(size, fileName));
    });

    return Promise.all(jobs);
};
