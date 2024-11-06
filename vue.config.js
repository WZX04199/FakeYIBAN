const publicPath = process.env.NODE_ENV === 'production'
        ? '/dist/'
        : '/';

module.exports = {
    publicPath,
    pwa: {
        name: 'YIban',
        assetsVersion: '1.0.0',
        themeColor: '#6cb0f9',
        msTileColor: '#6cb0f9',
        manifestOptions: {
            name: 'YIBAN',
            background_color: 'white'
        },

        workboxOptions: {
            cleanupOutdatedCaches: true
        }
    }
}
