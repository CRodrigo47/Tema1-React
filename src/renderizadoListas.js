const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'matemática',
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'químico',
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'físico',
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'químico',  
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrofísico',
  }];

export default function RenderListas(){

    const quimicos = people.filter(persona => persona.profession === "químico");
    const listItems = quimicos.map(persona => 
    <li key={persona.id}>
        <p>
            <b>{persona.name}</b>
            {" " + persona.name + "."}
        </p>
    </li>)
    

    return (<>
        <ul>
            {listItems}
        </ul>
     </>);
}