Responsive Email
================
The basic "responsive" email template.

![Simple Template](/images/simple-template.png?raw=true)

###### Edit style - Manual Setup

1. Edit file simple.css in /edit-css-manual
3. Pass through inliner utility like [Inliner by Zurb](http://zurb.com/ink/inliner.php).
2. In simple.html, remplace css between `<style> </style>` tag by your custom inlined css.


###### Edit style - Grunt Setup

You must have [Grunt](http://gruntjs.com/getting-started) and [Sass](http://sass-lang.com/install) instaled in your development environment to use this setup. 

1. Open a terminal in /edit-css-grunt/grunt

2. npm install  - install all required package

3. Edit file simple.scss in /edit-css-grunt

4. Use these command:
	- Grunt build : Compile, Minify and Include css in simple.html
	- Grunt watch : A each modification of simple.scss will compile, minify and include css in simple.html

5. Show result in simple.html