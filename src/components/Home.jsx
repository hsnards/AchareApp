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
              {showForm ? <CompleteInformation {...props} /> : <ChooseLocation {...props} />}
          </>
    );
};

export default Home;
