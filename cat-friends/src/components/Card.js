function Card({ name, email, id, website }) {
  return (
    <div className="bg-dark-blue dib br3 pa3 ma2 grow tc bw2 shadow-5">
      <img
        alt="robots"
        width="200"
        src={`https://robohash.org/${id}?set=set4`}
      />
      <div className="white">
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{website}</p>
      </div>
    </div>
  );
}

export default Card;
