import pageStyles from "../page.module.css";



export default function PokemonRandomImage({ img = "", name = "", types = [] }) {
  const typesJsx = types
    .map(function (typeObj) {
      return typeObj.type.name;
    })
    .join(", ");
  return (
   

   
    <div className={pageStyles.pokeCard}>
      <img src={img} />
      <div>
        <h4>{name}</h4>
        <p>
          <i>Types: {typesJsx}</i>
        </p>
      </div>
    </div>
   
  );
}