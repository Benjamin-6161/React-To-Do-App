function Footer(){
  
  const date = new Date()
  
  return (
    <footer>
      &copy;{date.getFullYear()} Benjamin React App 
    </footer>
    );
}

export default Footer