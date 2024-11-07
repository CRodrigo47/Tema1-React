export function Profile() {
  return <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="la piba"></img>;
}

function Gallery() {
  return (
    <div>
      <h1>Cienteficos</h1>
      <Profile></Profile>
      <Profile></Profile>
      <Profile></Profile>
      <Profile></Profile>
    </div>
  );
}

export default Gallery;