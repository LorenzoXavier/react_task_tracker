import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'


const App = () => { 
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Laundry shopping',
      day: 'Feb 12th at 2.30pm',
      reminder: false,
    },
    {
      id: 2,
      text: 'Outside shopping',
      day: 'Feb 10th at 2.30pm',
      reminder: false,
    },
    {
      id: 3,
      text: 'Food shopping',
      day: 'Feb 5th at 2.30pm',
      reminder: false,
    },
  ])

  return (
    <div className="container">
      <Header title={ 'Title entered in app' }/>
      <Tasks tasks={tasks}/>
    </div>
  );
};


export default App;
















// import 'antd/dist/antd.css';
// import { Button, Alert, Carousel } from 'antd';
// import 'antd/dist/antd.css';

// const App: React.FC = () => (
//   <>
//     <Button type="primary">Primary Button</Button>
//     <Button>Default Button</Button>
//     <Button type="dashed">Dashed Button</Button>
//     <br />
//     <Button type="text">Text Button</Button>
//     <Button type="link">Link Button</Button>
//     <Alert showIcon message="Success Text" type="success" closable description="" />
    



//   <Carousel autoplay>
//     <div>
//       <h3 style={contentStyle}>1</h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}>2</h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}>3</h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}>4</h3>
//     </div>
//   </Carousel>
    
//   </>
// );

// const contentStyle = {
//   height: '600px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };