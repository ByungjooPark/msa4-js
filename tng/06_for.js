// 아래처럼 별을 찍어주세요.
// 예시)
// *****
// *****
// *****
// *****
// *****
for(let i = 0; i < 5; i++) {
  console.log('*****');
}

for(let i = 0; i < 5; i++) {
  let star = '';
  for(let z = 0; z < 5; z++) {
    star += '*';
  }
  console.log(star);
}

// 아래처럼 별을 찍어주세요.
// 예시)
// *
// **
// ***
// ****
// *****
for(let i = 0; i < 5; i++) {
  let star = '';
  for(let z = 0; z <= i; z++) {
    star += '*';
  }
  console.log(star);
}

// ★ 반장님 방법 ★
let ast = '';
for(let i = 1; i < 6; i++) {
  ast += '*';
  console.log(ast);
}

// 아래처럼 별을 찍어주세요.
// 예시)
//     *
//    **
//   ***
//  ****
// *****
for(let i = 0; i < 5; i++) {
  let space = '';
  for(let z = 4; z > i; z--) {
    space += ' ';
  }
  
  let star = '';
  for(let y = 0; y <= i; y++) {
    star += '*';
  }
  
  console.log(`고고고고곡고ㅗ${space}${star}`);
}

// 고고고곡 수정