import s from "./style.module.css";

const Cards = ({ transportLists }) => (
  <>
    <h1 className={s.title}>Detalle de Buses</h1>

    <div className={s.card_List}>
      <div className={s.container}>
        {transportLists.map((list) => {
          return (
            <>
              <ul className={s.card}>
                <div className={s.head_title}>
                  <li className={s.title_Bus}>Micro: {list.id}</li>
                  <li className={s.title_status}>{list.status_description}</li>
                </div>
                <ul>
                  {list.buses.map((buses) =>
                    <>
                      <div className={s.buses_distance}>
                        <li>Patente: {buses.id}</li>
                        <li>Tiempo máximo de llegada: {buses.max_arrival_time} Min.</li>
                        <li>Metros de distancia: {buses.meters_distance} Mts. </li>
                        <li>Tiempo mínimo de llegada: {buses.min_arrival_time} Min. </li>
                      </div>
                    </>
                  )}
                </ul>
              </ul>
            </>
          );
        })}
      </div>
    </div>
  </>
);
export default Cards;




//      console.log(list.buses[0]);