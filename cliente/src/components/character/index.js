export default function Character({ name, image }) {
  return (
    <div>
      <p>
        {name}
        <img src={image} alt="No tengo imagen" />
      </p>
    </div>
  );
}
