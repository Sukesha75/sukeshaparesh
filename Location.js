import './Location.css';

const Location = ({ address }) => {
  return <div className="location">
    <p>{address.zipcode}</p>
    <p>{address.city}</p>
  </div>
};

export default Location;
