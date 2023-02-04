import './App.css';
import MyObj from './MyObj';

function App() {
  //let = เปลี่ยนค่าได้ตลอด
  //const = ไม่สามารถเปลี่ยนค่าได้/ค่าคงที่
  //variance = เปลี่ยนได้ตลอด
  let name = "Narongsak";
  let age = 19;
  let province = "Nakhonpaton";
  age = "20";

  //array
  let students = ["Ta","Su","Thi","Cha","Jan"];
  //destructure 
  const[ t, s ] = students.slice(0);
  
  return (
   <>
   <p>{t}</p>
   <p>{s}</p>

   <hr />
    <h1>Hello {name}</h1>
    <h2>I am {age} years old.</h2>
    <h2>I am from {province}</h2>
    <hr />
    {/* {
      students.map((std, index) => (
        <p>No. {index+1} {std}</p>
      ))
    } */}
    <MyObj/>
   </>
  );
}

export default App;
