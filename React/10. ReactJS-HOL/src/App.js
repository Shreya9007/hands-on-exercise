import './App.css';
import officeImage from './office_pic.jpg';
function App() {

  const element = "Office Space";

  const office = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai"
  };

  const rentColor = office.Rent <= 60000 ? "textRed" : "textGreen";

  const offices = [
    { Name: "DBS", Rent: 50000, Address: "Chennai" },
    { Name: "TCS", Rent: 70000, Address: "Mumbai" },
    { Name: "Infosys", Rent: 90000, Address: "Bangalore" }
  ];

  return (
    <div>
      <h1>{element}, at Affordable Range</h1>

      <img 
      src={officeImage}
      width="25%"
      height="25%"
      alt="Office Space"
      />

      <h1>Name: {office.Name}</h1>

      <h3 className={rentColor}>
        Rent: Rs. {office.Rent}
      </h3>

      <h3>
        Address: {office.Address}
      </h3>


      <h2>Other Office Spaces</h2>

      {
        offices.map((item, index) => (
          <div key={index}>
            <h3>Name: {item.Name}</h3>
            <h3 className={item.Rent <= 60000 ? "textRed" : "textGreen"}>
              Rent: Rs. {item.Rent}
            </h3>
            <h3>Address: {item.Address}</h3>
            <hr />
          </div>
        ))
      }

    </div>
  );
}

export default App;