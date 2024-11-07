import Gallery, { Profile } from "./Cienteficos";
import PackingList from "./conditional";
import RenderListas from "./renderizadoListas";

export default function App() {
  const props = {
    name: "Carlos",
    imageId: "https://i.imgur.com/7vQD0fPs.jpg",
    size: 200,
  };

  return (
    <div>
     {/*} <Profile></Profile>
      <PackingList></PackingList>
      <Gallery></Gallery>
      <ConvertHTML></ConvertHTML>
      <ProfileDos {...props}></ProfileDos>
      <Card>
        {" "}
        <Avatar {...props}></Avatar>{" "}
      </Card>
      */}
      <RenderListas></RenderListas>
    </div>
  );
}

function ConvertHTML() {
  const image = "https://i.imgur.com/7vQD0fPs.jpg";
  const altText = "Hedy Lamarr";
  const nombre = "Hedy Lamarr";
  const persona = { name: "Carlos", edad: 23 };

  return (
    <>
      <h1>
        Tareas Pendientes de {nombre} {{ name: "Carlos", edad: 23 }.name}{" "}
        {persona.name}
      </h1>
      <img src={image} alt={altText} className="photo" />
      <ul>
        <li>Inventar nuevo semáforo</li>
        <li>Ensayar la escena de la película</li>
        <li>Mejorar la tecnología del espectro</li>
      </ul>
      <p>Hoy estamos a: {formatDate(new Date())}</p>
    </>
  );
}

function formatDate(date) {
  return new Intl.DateTimeFormat("es-ES", { weekday: "long" }).format(date);
}

function ProfileDos(props) {
  return <Avatar {...props} />;
}

function Card({ children }) {
  return <>{children}</>;
}

function Avatar(props) {
  return (
    <img
      src={props.imageId}
      alt={props.name}
      width={props.size}
      height={props.size}
    />
  );
}
