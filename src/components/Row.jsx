import { AddModalButton } from "./AddModalButton";

export const Row = ({ inf }) => {
  const { id, attributtes, links, coordinates } = inf;
  const { title, external_id, magnitude, place, time, tsunami, mag_type } =
    attributtes;

  return (
    <tr>
      <th scope="row">{external_id}</th>
      <td>{title}</td>
      <td>{magnitude}</td>
      <td>{place}</td>
      <td>{time}</td>
      <td>{tsunami}</td>
      <td>{mag_type}</td>
      <td>{coordinates.latitude}</td>
      <td>{coordinates.longitude}</td>
      <td>
        <a href={links.external_url} target="_blank">
         Go
        </a>
      </td>
      <td>
        <AddModalButton id={id} />
      </td>
    </tr>
  );
};
