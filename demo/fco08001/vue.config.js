module.exports = {
    configureWebpack: {
        output: {
            jsonpFunction: 'webpackJsonpDemoFCO08001',
            filename: 'js/app.js', // override to prevent hash from appearing
            chunkFilename: 'js/[name].js', // override to prevent hash from appearing
        },
    },
    publicPath:
        process.env.NODE_ENV === 'production'
            ? '/demo/fco08001/dist/'
            : `http://localhost:${process.env.REACT_APP_FCO08001_PORT}/`,
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
        },
    },
};
