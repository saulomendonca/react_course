const Container = ({ children, myValue }) => {
  return (
    <div>
      <h1>Title</h1>
      {myValue}: { children }
    </div>
  )
}

export default Container
