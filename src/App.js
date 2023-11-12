import './App.css';
import SingaporePilt from  './pictures/singapore-pilt.jpg';
import NewYorkPilt from  './pictures/newyork-pilt.jpg';
import LondonPilt from  './pictures/london-pilt.jpg';
import City from './City';



function App() {
 const LINNAD = [
  {
    name: 'Singapore',
    picture: SingaporePilt,
    description: 'Singapore, city-state located at the southern tip of the Malay Peninsula, about 85 miles (137 kilometres) north of the Equator. It consists of the diamond-shaped Singapore Island and some 60 small islets; the main island occupies all but about 18 square miles of this combined area. The main island is separated from Peninsular Malaysia to the north by Johor Strait, a narrow channel crossed by a road and rail causeway that is more than half a mile long. The southern limits of the state run through Singapore Strait, where outliers of the Riau-Lingga Archipelago—which forms a part of Indonesia—extend to within 10 miles of the main island.'
 },
 {
  name: 'New York',
  picture: NewYorkPilt,
  description: 'New York City, city and port located at the mouth of the Hudson River, southeastern New York state, northeastern U.S. It is the largest and most influential American metropolis, encompassing Manhattan and Staten islands, the western sections of Long Island, and a small portion of the New York state mainland to the north of Manhattan. New York City is in reality a collection of many neighbourhoods scattered among the city’s five boroughs—Manhattan, Brooklyn, the Bronx, Queens, and Staten Island—each exhibiting its own lifestyle.'
},
{
  name: 'London',
  picture: LondonPilt,
  description: 'London, city, capital of the United Kingdom. It is among the oldest of the world’s great cities—its history spanning nearly two millennia—and one of the most cosmopolitan. By far Britain’s largest metropolis, it is also the country’s economic, transportation, and cultural centre.'
}
]

  return (
    <div className="App">

      {LINNAD.map(linn =>
        <div>
            <City data={linn}/>
            <br/>
        </div>

        )}


    </div>
  );
}

export default App;
