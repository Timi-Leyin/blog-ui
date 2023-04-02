const truncate = (str: string, len = 30) => {
  if(str){
    if (str.length > 30) {
      return str.slice(0, len) + "...";
    }
    return str + "...";
  }

  return  ""
};

export default truncate;
