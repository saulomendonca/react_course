const Challenge = () => {
  const number1 = 5;
  const number2 = 6;
  const handleSum = (e) => {
    console.log(number1 + number2);
  };
  return (
    <div>
      <h2>Numbers: {number1}, {number2}</h2>
      <button onClick={handleSum}>Sum</button>
    </div>
  )
}
export default Challenge;
