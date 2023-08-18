import pkg from "js-sha3";
const { keccak_256 } = pkg;

function sha3(data) {
  const value = "0x" + data.toString(16).padStart(64, "0");
  //convert to bytes array
  const buffer = Buffer.from(value.slice(2), "hex");
  return keccak_256(buffer);
}

let i = 0;
while (true) {
  const hash = sha3(i);
  if (hash.slice(0, 2) === "a8") {
    console.log(i);
    console.log(hash);
    break;
  }
  console.log(i);
  i++;
}
