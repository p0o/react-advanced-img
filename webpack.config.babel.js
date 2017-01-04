import webpack from 'webpack';
import path from 'path';

const src = 'src';
const dist = 'dist';
const componentName = 'Component';

let config = {
    output: {
        path: path.join(__dirname, dist),
        publicPath: `/${dist}/`
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'react-hot!babel',
                include: [
                    path.join(__dirname, 'index.js'),
                    path.join(__dirname, src)
                ]
            }
        ]
    },
    plugins: []
};

if (process.env.NODE_ENV === 'production') {
    config.devtool = 'source-map';

    config.entry = `./${src}/${componentName}.js`;

    config.output.filename = `${componentName}.js`;
    config.output.library = componentName;
    config.output.libraryTarget = 'umd';

    config.module.loaders.push(
        {
            test: /\.(css|scss)$/,
            loader: 'style!css!sass?outputStyle=expanded',
            include: path.join(__dirname, 'node_modules')
        }
    );
    config.module.loaders.push(
        {
            test: /\.(css|scss)$/,
            loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]!sass?outputStyle=expanded',
            include: path.join(__dirname, src)
        }
    );

    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    );
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    );
}
else {
    config.entry = `./index.js`,

    config.output.filename = 'bundle.js';

    config.module.loaders.push(
        {
            test: /\.(css|scss)$/,
            loader: 'style!css?sourceMap!sass?sourceMap&outputStyle=expanded',
            include: path.join(__dirname, 'node_modules')
        }
    );
    config.module.loaders.push(
        {
            test: /\.(css|scss)$/,
            loader: 'style!css?sourceMap&modules&localIdentName=[name]---[local]---[hash:base64:5]!sass?sourceMap&outputStyle=expanded',
            include: path.join(__dirname, src)
        }
    );
    
    config.devServer = {
        host: '0.0.0.0',
        port: 4000,
        noInfo: true,
        publicPath: `/${dist}/`
    }
}

export default config;
