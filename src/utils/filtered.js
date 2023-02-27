const filtered = (arr, searchValue) => {
    return arr.filter((elem) =>
      elem.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  };
  export default filtered;