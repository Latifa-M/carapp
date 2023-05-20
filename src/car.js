import  { useState } from 'react';

const CarSellForm = () => {
  const [carMake, setCarMake] = useState('');
  const [carModel, setCarModel] = useState('');
  const [year, setYear] = useState('');
  const [mileage, setMileage] = useState('');
  const [condition, setCondition] = useState('');
  const [features, setFeatures] = useState([]);
  const [transmission, setTransmission] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      carMake,
      carModel,
      year,
      mileage,
      condition,
      features,
      transmission,
      priceRange,
      contactNumber,
    });
  };

  return (
    <form onSubmit={handleSubmit} className='car-sell-form' >
      <label>
        Car Make:
        <input
          type="text"
          value={carMake}
          onChange={(e) => setCarMake(e.target.value)}
        />
      </label>
      <br />

      <label>
        Car Model:
        <input
          type="text"
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
        />
      </label>
      <br />

      <label>
        Year:
        <input
          type="date"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </label>
      <br />

      <label>
        Mileage:
        <input
          type="number"
          value={mileage}
          onChange={(e) => setMileage(e.target.value)}
        />
      </label>
      <br />

      <label>
        Condition:
        <select value={condition} onChange={(e) => setCondition(e.target.value)}>
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="Fair">Fair</option>
          <option value="Poor">Poor</option>
        </select>
      </label>
      <br />

      <label>
        Features:
        <br />
        <input
          type="checkbox"
          value="Air Conditioning"
          checked={features.includes('Air Conditioning')}
          onChange={(e) => {
            if (e.target.checked) {
              setFeatures([...features, e.target.value]);
            } else {
              setFeatures(features.filter((feature) => feature !== e.target.value));
            }
          }}
        />
        Air Conditioning
        <br />
        <input
          type="checkbox"
          value="Power Steering"
          checked={features.includes('Power Steering')}
          onChange={(e) => {
            if (e.target.checked) {
              setFeatures([...features, e.target.value]);
            } else {
              setFeatures(features.filter((feature) => feature !== e.target.value));
            }
          }}
        />
        Power Steering
        <br />
        {/* Repeat the pattern for other feature checkboxes */}
      </label>
      <br />

      <label>
        Transmission:
        <select value={transmission} onChange={(e) => setTransmission(e.target.value)}>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
        </select>
      </label>
      <br />

      <label>
        Price Range:
        <input
          type="range"
          min="0"
          max="100000"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        />
      </label>
      <br />

      <label>
        Contact Number:
        <input
          type="text"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
        />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default CarSellForm;
