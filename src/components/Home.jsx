import React, {useState} from 'react';
import CompleteInformation from "./CompleteInformation";
import ChooseLocation from "./ChooseLocation";

const Home = () => {

  const [showForm, setShowForm] = useState(false)
  const [position, setPosition] = useState({
    lat: 35.70413838980219,
    lng: 51.41029715538025,
  })
  const props = {
    showForm,
    setShowForm, position, setPosition
  }
  return (<>
      {/*mobile size*/}
      <div className="md:hidden">
        {showForm ? <CompleteInformation {...props} /> : <ChooseLocation {...props} />}
      </div>

      {/*desktop size*/}
      <div className="hidden md:flex">
        <div className="w-full md:w-1/2">
          <CompleteInformation {...props} />
        </div>
        <div className="w-full md:w-1/2">
          <ChooseLocation {...props} />
        </div>

      </div>
    </>
  );
};

export default Home;
