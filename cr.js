const origin = [
  { name: `이종수`, age: 25 },
  {
    name: `이총수`,
    age: 30,
  },
];

const shallow = origin.map((item) => item);

const deep = origin.map((item) => {
  const result = {
    name: item.name,
    age: item.age,
  };
  return result;
});

console.log(`원본 배열: `, origin);
console.log(`얕복: `, shallow);
console.log(`깊복: `, deep);

origin[0].name = `테스트`;
console.log(`변경 후`);
console.log(`원본 배열: `, origin);
console.log(`얕복: `, shallow);
console.log(`깊복: `, deep);
