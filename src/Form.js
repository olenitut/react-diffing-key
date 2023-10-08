const Form = ({ active }) => {
  return (
    <form>
      <h2>Add items to Folder {active}</h2>
      <input placeholder="items" className="input" />
    </form>
  );
};

export default Form;
