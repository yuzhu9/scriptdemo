if [ -d $1 ]; then
  exit
else 
  mkdir ./$1
  cd $1
  mkdir css js
  touch css/style.css index.html js/main.js
  echo '<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>' > index.html
  echo 'h1{color: red;}' > css/style.css
  echo 'var string = "Hello World"\nalert(string)' > js/main.js
  exit
fi