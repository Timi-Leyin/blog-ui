// # FISHER-YATES (KNUTH) ALGORITHM
import randomize from "./randomize";

const shuffle = (array: any[]) => {
  let i,
    length = array.length,
    copy = [];
  console.log("Length", length);
  while (length) {
    //PICK A REMAINING ELEMENT
    i = randomize(length--);
    if (typeof array[i] != "undefined") {
      console.log(array.slice(i, 1)[0]);
    }
    // MOVE IT TO THE NEW ARRAY
    // copy.push(array.slice(i, 1)[0]);
  }
  console.log(copy);
  return copy;
};

export default shuffle;
