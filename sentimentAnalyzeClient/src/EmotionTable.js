import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
      //Returns the emotions as an HTML table
      return (  
        <div>
          <table className="table table-bordered">
            <tbody>
            {
              /*Write code to use the .map method that you worked on in the 
              Hands-on React lab to extract the emotions. If you are stuck,
              please click the instructions to see how to implement a map*/
            Object.entries(this.props.emotions).map(function(mapentry) {
            return (
                <tr>
                <td style={{color: "blue",border: "1px solid black"}}>{mapentry[sadness][joy][fear][disgust][anger]}</td>
                <td style={{color: "blue",border: "1px solid black"}}>{mapentry[0.250524][0.722962][0.009157][0.003132][0.016098]}</td>
                </tr>
            )
            })
            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;