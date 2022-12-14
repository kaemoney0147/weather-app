import { useEffect, useState } from "react";
import { Container, Row, Col, Form,Card } from "react-bootstrap";
import { format } from "date-fns";
import { addSeconds } from "date-fns/esm";

const WeatherSearch = () => {
  const [query, setQuery] = useState("");
 const [weathers,setWeather]=useState({})


  const fetchData= async(e)=>{
    e.preventDefault();
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=450012164dc0af029847cca85c8d17c1`)
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        setWeather(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  }
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  useEffect(()=>{
    console.log('hurry')
  },[weathers])
  const currentTime = addSeconds(new Date(), weathers.timezone - 3600);
  return (
    <Container className="search-input">
     <Row >
        <Col xs={10} mb={6} className="mx-auto my-3">
          <h1 className="search-name">Weather Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
        <Form onSubmit={fetchData}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="Enter Location,City,Country" className="input"
            />
          </Form>
        </Col>
        </Row>
        {weathers&&weathers.main&&   
        <Container className="displayweather mt-3"> 
     <Card  className='wearthdisplay-card mt-0'>
      <div className="center" xs={10} mb={6}>
          <h3 className="text-white mt-4">
                {format(currentTime, "h:mm aa")}
              </h3>
              <h6 className='bold'>
                {format(new Date(), "do MMMM yyyy")}
              </h6>
              <div>
          <h4>
          {weathers.name},{weathers.sys.country}
            </h4></div>
            <div>
          </div>
          <div className="center-card">
            Mostly {weathers.weather?<p>{weathers.weather[0].main}</p>:null}
            </div>
            <div className="temp d-flex">
            Temp:{weathers.main.temp.toFixed()}??C
          <span>L:{weathers.coord.lat.toFixed()}??C</span>
            </div>
            <div >
            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
            {weathers.weather?<p>{weathers.weather[0].icon.png}</p>:null}
            </div>
          </div>
      <div className="bottom-card fix-bottom mb-0" xs={10} mb={6} >
            <div className="feels">
              <p className="bold">{weathers.main.feels_like}??C</p>
              <p>Feels like</p>
            </div>
            <div className="humidity">
              <p className="bold">{weathers.main.humidity}%</p>
              <p>Humility</p>
            </div>
            <div className="win">
              <p className="bold">{weathers.wind.speed}MPH</p>
              <p>Win Speed</p>
            </div>
          </div>
    </Card>
        </Container>}
    </Container>

  );
};

export default WeatherSearch;
