async function test() {
  const res = await fetch("jsonTest.json");
  const data = await res.json();
  console.log(data);
}

test();
