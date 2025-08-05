import { useState } from "react";
import Card from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";

function App() {
  const [data, setData] = useState(["goku", "vegeta", "trunks"]);
  // const [isLoding, setIsLonding] = useState(false);
  //const handleClick = () => setIsLonding(!isLoding);

  // const list: string[] = ["goku", "vegeta", "trunks"];
  //const handleSelect = (elemento: string) => {
  //console.log("Elemento seleccionado:", elemento);
  //};

  //return (
  // <Card>
  //  <CardBody title="Hola mundo" text="este el texto" />
  // {list.length !== 0 ? (
  //   <List data={list} onSelect={handleSelect} />
  //) : (
  //  "No hay elementos en la lista"
  //)}
  // <Button isLoding={isLoding} ondClick={handleClick}>
  //  hola mundo
  //  </Button>
  //</Card>
  //);
  const addMinion = () => setData([...data, "Minion"]);
  const delMinion = () => setData(data.slice(0, -1));
  return (
    <Card>
      <Button isLoading={true} ondClick={addMinion}>
        {" "}
        Agregar{" "}
      </Button>
      <Button isLoading={false} ondClick={delMinion}>
        {" "}
        Eliminar{" "}
      </Button>
      <List data={data} />
    </Card>
  );
}

export default App;
