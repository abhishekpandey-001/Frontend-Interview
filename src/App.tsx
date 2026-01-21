import Banner from './components/Banner';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {

  return (
    <>
      {/* This part contains header section */}
      <Header />

      {/* This part contains banner section using name CA monk and a little description */}
      <Banner />

      {/* This part contains left and right section, left section has blog list and the right section has blog details */}
      <Content />

      {/* This is the foooter part. Not much logic, just for styling and all */}
      <Footer />
    </>
  )
}

export default App
