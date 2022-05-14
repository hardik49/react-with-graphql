import {
  useQuery,
  gql
} from "@apollo/client";

function Owners() {
  const getVehices = gql`
  {
    owners {
      name
    }
  }
  `;
  const { data } = useQuery(getVehices);

  return (
    <div className="App">
      <ul id="vehicleList">
        {data && data.Owners.map(owner => (
          <li key={owner.id}>{owner.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Owners;
