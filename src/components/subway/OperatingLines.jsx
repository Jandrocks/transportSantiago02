import { ContainerSubway, LineSubway, CardsSubway, StatusSubway } from "./StyledCardSubway";

const OperatingLines = ({ transportLines }) => (
    <ContainerSubway>
        {transportLines.map((list) => {
            return (
                <CardsSubway style={{ backgroundColor: list.stations_closed_by_schedule === 0 ? 'rgba(145, 145, 253, 0.301)' : 'red' }}>
                    <LineSubway>{list.name}</LineSubway>
                    <StatusSubway>{list.stations_closed_by_schedule === 0 ? <span>Operativa</span> : <span>Cerrada</span>}</StatusSubway>
                </CardsSubway>
            );
        })}
    </ContainerSubway>
)
export default OperatingLines

