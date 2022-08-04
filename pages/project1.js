const List = () => {
  return (
    <ul>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100k stars on Github</li>
      <li>Is maintaind by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  );
};

const Fun = () => {
  return (
    <div style={{ textAlign: 'center', color: 'black' }}>
      <h1 style={{ textSizeAdjust: 250 }}>Fun facts about React</h1>
      <h3>Michal op programista</h3>
      <List />
      <Img />
    </div>
  );
};
const Img = () => {
  return <img src="/reactLogo.png" />;
};
export default Fun;
