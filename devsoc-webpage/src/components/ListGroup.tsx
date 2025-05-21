function ListGroup() {
  const list = ["first", "second", "third"];

  return (
    // empty <> allows for multiple elements within the one function
    <>
      <h1>Hello World, this is my list!</h1>
      <ul className="list-group"></ul>

      {/* This is how to dynamically use an array in jsx */}
      {list.map((item) => (
        // keys allow for elements to be uniquely identified
        <li
          className="list-group-item"
          key={item}
          onClick={() => console.log("clicked.")}
        >
          {" "}
          {item}
        </li>
      ))}
    </>
  );
}

export default ListGroup;
