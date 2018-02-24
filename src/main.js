import { s1 } from './m1'

console.log(123, s1);

setTimeout(() => {
  import('./m2').then(({s3}) => {
    console.log(s3)
  })
  console.log('timeout...')
}, 3000);
