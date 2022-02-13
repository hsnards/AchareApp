
import Map from "./Map";
const ChooseLocation = ({setShowForm , position ,setPosition}) => {
    const props = {
        setShowForm,position,setPosition
    }
    return (
              <Map {...props} />
     );
}
 
export default ChooseLocation;



