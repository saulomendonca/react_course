const Event = () => {
  const handleMyEvent = (e) => {
    console.log('Clicked')
  };
  const renderSomething = (x) => {
    if(x) {
        return <h1>true</h1>
    } else {
        return <h1>false</h1>
    }
  }
  return (
    <div>
      <button onClick={handleMyEvent}>Click here</button>
      <button onClick={() => {console.log('clicked too')} }>Click here too</button>
      { renderSomething(true) }
      { renderSomething(false) }
    </div>
  )
}
export default Event;
