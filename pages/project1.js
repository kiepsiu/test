import { useEffect, useState } from 'react';

const Img = () => {
  return <img src="/reactLogo.png" style={{ blockSize: '150px' }} />;
};

const List = () => {
  return (
    <ul style={{ fontSize: '35px', color: 'black' }}>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100k stars on Github</li>
      <li>Is maintaind by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  );
};

const Clock = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setNow(new Date());
    }, 1000);
  }, []);

  return <h2>{now.toLocaleString()}</h2>;
};

const Fun = () => {
  return (
    <div style={{ width: '1500px', padding: '30px 200px 30px 200px' }}>
      <Img style={{ textAlign: 'left' }} />
      <Clock />
      <h1 style={{ fontSize: '100px', textAlign: 'center', color: 'black' }}>Fun facts about React</h1>
      <List />
    </div>
  );
};

export default Fun;
