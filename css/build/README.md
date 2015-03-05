# drbolt.github.io css build directory

This is the source for the publicly distributed css for http://chasebolt.com.

It includes [Bassplate](https://github.com/jxnblk/bassplate), the [Basscss](http://basscss.com) boilerplate (including the [optional modules](http://www.basscss.com/docs/modules/)) that uses [Gulp](http://gulpjs.com) & [Rework](https://github.com/reworkcss/rework) to that output a custom Basscss build. The custom Basscss build provides a general object oriented CSS toolkit for styling http://chasebolt.com. The final custom styles 

There are two main files that would/should be edited:
1. ./src/css/base.css - the main css file from which the custom Basscss build is produced. This generates a foundational object oriented CSS toolkit for styling http://chasebolt.com.
2. ./src/css/style.css - the project-specific css file that extends the Basscss foundation and provides final customization for http://chasebolt.com.

## Local development

**tldr;** run the 2 commands below then edit html and md files as needed and edit drbolt.github.io/css/build/src/css/*.css to make desired css changes.

For local development on the structure of http://chasebolt.com (as opposed to editing the content via [Prose.io](http://prose.io)), the following directory-specific commands should be made:

``` bash
jekyll serve # in drbolt.github.io/
gulp         # in drbolt.github.io/css/build/
```

1. `jekyll serve` in drbolt.github.io/ - this enables the Jekyll build & watch
2. `gulp` in drbolt.github.io/css/build/ - this 1) builds the custom Basscss file, 2) removes unused css from the Basscss & project-specific css files (as compared to what styles the final html files use), 3) autoprefixes the required css, 4) creates minified versions of the autoprefixed Basscss & project-specific files, 5) copies these final files to drbolt.github.io/css/dist/, and 6) watches for any changes to html or source css files to repeat the process as needed.

### Bassplate modification

The default Bassplate gulpfile.js file has been modified to:
- include gulp-uncss & gulp-autoprefixer
- meet the project-specific directory needs of file input & output