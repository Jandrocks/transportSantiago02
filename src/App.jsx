import { useState, useEffect, Suspense, lazy } from "react";
import Cards from "./components/card/Cards";
import SearchTransport from "./components/searchTransport/SearchTransport";
const OperatingLines = lazy(() => import("./components/subway/OperatingLines"));
import { TransportAPI } from "./api/transport";
import "./App.css";
const titleFirst = "TU PARADERO";

function App() {
  const [currentTransport, setCurrentTransport] = useState([]);
  const [currentTransportTitle, setCurrentTransportTitle] =
    useState(titleFirst);
  const [currentSubWay, setCurrentSubway] = useState([]);

  async function fetchTransport(title) {
    const transportList = await TransportAPI.fetchTransport(title);
    if (transportList.length > 0) {
      setCurrentTransport(transportList);
    }
  }
  async function fetchTransportTitle(title) {
    const transportListTitle = await TransportAPI.fetchTransportTitle(title);
    if (transportListTitle.length > 0) {
      setCurrentTransportTitle(transportListTitle);
    }
  }

  async function fetchSubway() {
    const subWayList = await TransportAPI.fetchSubway();
    if (subWayList && subWayList.length > 0) {
      setCurrentSubway(subWayList);
    }
  }
  useEffect(() => {
    fetchSubway();
  }, []);

  return (
    <div className="App">
      <div className="search">
        <SearchTransport
          onSubmit={fetchTransport}
          onSubmitTitle={fetchTransportTitle}
          titleStation={currentTransportTitle}
        />
        <div className="subway_search">
          <h1>Líneas de Metro</h1>
          <Suspense fallback={<h1>cargado...</h1>}>
            <OperatingLines transportLines={currentSubWay} />
          </Suspense>
        </div>
      </div>
      <Cards transportLists={currentTransport} />
    </div>
  );
}

export default App;
