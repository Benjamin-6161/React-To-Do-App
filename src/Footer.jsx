function Footer(){
  
  const date = new Date()
  
  return (
    <footer>
      &copy;{date.getFullYear()} Benjamin's React App 
    </footer>
    );
}

export default Footer