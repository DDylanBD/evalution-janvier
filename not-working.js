//Module React
import React, {Component} from 'react';

class MenuResponsive extends Component {
    render() {
        return (
            <div></div>
        );
    }
}
export default MenuResponsive;
// loader Webpack

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
        }
    }
}

//task Gulp
var concat = require('gulp-concat');

gulp.task('scripts', function() {
    return gulp.src('./lib/*.js').pipe(concat('all.js')).pipe(gulp.dest('./dist/'));
});
