…or create a new repository on the command line
echo "# AngularTCAC_Section_02" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/fmukendi/AngularTCAC_Section_02.git
git push -u origin master
…or push an existing repository from the command line
git remote add origin https://github.com/fmukendi/AngularTCAC_Section_02.git
git push -u origin master


-----------------------------

npm install -g typescript --save

tsc --version

// tsc main.ts --> to transpile to javascript
// node main.js --> to run the code