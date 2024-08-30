import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderFrom from './pages/ReservationMain/ReservationMain.jsx'
import Loader from './components/Loader/Loader.jsx'
import variables from './assets/variables.json'
import { useEffect, useState } from 'react';
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";

function App() {
  let [data, setData] = useState(undefined);
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState(undefined);
  const getData = async () => {
    try {
      let locals = (await fetch(`${variables.apiUrl}/api/getlocals`));
      locals = await locals.json();
      setData({locals: locals.message});
    } catch (error) {
      setData({error: error});
    }
  }

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (data!==undefined) {
      setIsLoading(false);
    }
    if (data!==undefined && data.error!==undefined) {
      setIsLoading(false);
      setError(data.error);
    }
  }, [data]);
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    
    return <ErrorPage />;
  }

  return (
    <>
      <SliderFrom data={data} />
    </>
  )
}

export default App
