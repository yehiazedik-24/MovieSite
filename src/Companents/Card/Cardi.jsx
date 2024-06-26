import { Link } from 'react-router-dom';

function Cardi({ item }) {
  if (!item) return null;

  const { title, description, image, id } = item;

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Link to={`/View/${id}`} className="btn btn-primary">View Details</Link>
      </div>
    </div>
  );
}

export default Cardi;
