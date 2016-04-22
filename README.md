Responsive Email
================
The basic "responsive" email template.

![Simple Template](/images/simple-template.png?raw=true)

## Edit style

###### Manual

1. Edit file simple.html in /inline-manual
2. Pass through inliner utility like [Inliner by Zurb](http://zurb.com/ink/inliner.php).


###### Scss + Grunt

You must have [Grunt](http://gruntjs.com/getting-started) and [Sass](http://sass-lang.com/install) instaled in your development environment to use this setup. 

1. Open a terminal in /edit-css-grunt/grunt

2. npm install  - install all required package

3. Edit file simple.scss in /edit-css-grunt

4. Use these command:
	- Grunt build : Compile, Minify and Include css in simple.html
	- Grunt watch : A each modification of simple.scss will compile, minify and include inline css in simple.html

5. Show result in simple.html