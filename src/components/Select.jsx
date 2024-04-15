import Form from "react-bootstrap/Form";

export const Select = ({ handlePerPage }) => {
  const handleChange = (e) => {
    handlePerPage(e.target.value);
  };

  return (
    <Form.Select onChange={handleChange}>
      <option defaultChecked value="10">
        10
      </option>
      <option value="20">20</option>
      <option value="30">30</option>
    </Form.Select>
  );
};
