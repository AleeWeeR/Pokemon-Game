import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Layout from "./components/Layoutss/Layout";

import Image from "./components/Layoutss/bg1.jpg";
import Image2 from "./components/Layoutss/bg2.jpg";




const App = () => {
  return (
    <>
      <Header
        title = "this is title"
        descr = "this is descrition"
      />

      <Layout
        title = "this is layout Title"
        descr = "this is layout Description"
        urlBg = {Image}
      />
      <Layout
        title = "this is layout Title"
        descr = "this is layout Description"
    
      />
      <Layout
        title = "this is layout Title"
        descr = "this is layout Description"
        urlBg = {Image2}
      />

      <Footer
      
      />
    </>
  )
}


export default App;