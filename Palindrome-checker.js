# This is a small challenge from freeCodeCamp for JavaScript Certification
# The code is about palindrome checker in JavaScript
function palindrome(str) {
  str= str.toLowerCase().split('').filter(alpha=> alpha.match(/[a-z0-9]/));
  let b=[...str];
  b=b.reverse();
  str=str.join('');
  b=b.join('');
  return (str==b)? true : false;
}
