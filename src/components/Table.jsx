import { Row } from "./Row";

export const Table = ({ data }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Magnitude</th>
            <th scope="col">Place</th>
            <th scope="col">Time</th>
            <th scope="col">Tsunami</th>
            <th scope="col">Mag_Type</th>
            <th scope="col">Latitud</th>
            <th scope="col">Longitud</th>
            <th scope="col">Link</th>
            <th scope="col">Comment</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <Row key={d.id} inf={d} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
