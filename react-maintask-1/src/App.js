
import React from 'react';
import Header from './Header';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
const App = () => {
  
  const cardData = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg',
      title: 'Burrito',
      description: 'burrito, a common cylindrical food item of Mexican and American origin consisting of a tortilla wrapped around a mixed filling of such ingredients as meat, cheese, beans, and vegetables. The burrito differs from the taco in that the circular tortilla in the latter case is simply folded, not wrapped.',
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Pasta',
      description: 'Pasta is made from grain, one of the basic food groups in a healthy diet that also can include vegetables, fruits, fish, and poultry. It is s a good source of energy and can give you fiber, too, if it is made from whole grain. That can help with stomach problems and may help lower cholesterol.',
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Dosa',
      description: 'Dosas are both light and nutritious, containing a good mix of carbs, fat, proteins, vitamins, sodium, and potassium. Not only are dosas highly nutritious, but they also aid in promoting gut health and are rich in vitamins A and C, iron, and calcium',
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/7656553/pexels-photo-7656553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Soup',
      description: 'Thick soups are classified by the type of thickening agent used. Purées are vegetable soups thickened with starch. Bisques are made from puréed shellfish or vegetables thickened with cream. Cream soups may be thickened with béchamel sauce; and veloutés are thickened with eggs, butter, and cream',
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Cake',
      description: 'A cake is a sweetened baked food, usually made with flour, eggs, sugar, and a leavening agent. Shortening may or may not be used. Shortening is a fat or oil of animal or vegetable origin, such as butter, lard, vegetable oils, processed shortenings, and margarine.',
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/10580198/pexels-photo-10580198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Non-Veg Meal Items',
      description: 'A non-vegetarian diet includes chicken, meat, eggs and fish. A non-vegetarian diet also has several health benefits because this type of food is rich in protein and vitamin B. Non-vegetarian food strengthens our muscles and helps them grow faster. It also helps to maintain body stamina and hemoglobin.',
    },
  
  ];

  return (
    <div className="App">
      <Header />
      <div className="container mt-4">
        <div className="row">
          {cardData.map((card) => (
            <div key={card.id} className="col-md-6 col-lg-4 mb-4">
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
