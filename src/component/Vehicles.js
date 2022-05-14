import {
  useQuery,
  gql
} from "@apollo/client";

function Vehicles() {
  const getVehices = gql`
  {
    vehicles {
      modelName
    }
  }
  `;
  const { data } = useQuery(getVehices);

  return (
    <div className="App">
      <ul id="ownerList">
        {data && data.vehicles.map(vehicle => (
          <li key={vehicle.id}>{vehicle.modelName}</li>
        ))}
      </ul>
    </div>
  );
}

export default Vehicles;
