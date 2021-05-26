

let n = 5;
let line = ('');
let meio = (n+1) / 2;
let left = meio;
let right = meio;
let position = n;

  for (let index = 0; index <= meio; index += 1) {

    for (let odex = 0; odex <= n; odex+= 1) {

      if (odex > left && odex < right) {
        line += ('*');
      }
      else {
        line+= (' ');
      }

    }
  console.log (line);
  line=('');
  right+=1;
  left-=1;
  }
  