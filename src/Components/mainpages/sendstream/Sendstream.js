// import React from "react";
// import Header from "../../Header";
// import Mainpage from "../../Mainpage";
// import "../../../Style/sendstream.css";

// export default function Sendstream() {
//   // var currentDate = new Date().toISOString().split("T")[0];
//   // document.getElementById("date").setAttribute("min", currentDate);

//   return (
//     <div>
//       <div className="sendstream-page">
//         <div className="heading">
//           <h1>Create Stream</h1>
//         </div>
//         <div className="form">
//           <div className="createstream-form">
//             <label>Reciever Wallet Address</label>
//             <br />
//             <input className="value-wallet" />
//             <div className="sub-form-i">
//               <div className="sub-form-i-i">
//                 <label>Super Token</label>
//                 <br />
//                 <input className="sub-form-value"></input>
//               </div>
//               <div className="sub-form-i-i">
//                 <label>Flow Rate</label>
//                 <br />
//                 <input className="sub-form-value"></input>
//               </div>
//               <div className="sub-form-i-i">
//                 <label>/Month</label>
//                 <br />
//                 {/* <input className="sub-form-value"></input> */}
//                 <input
//                   type="month"
//                   id="start"
//                   name="start"
//                   className="sub-form-value"
//                 ></input>
//               </div>
//             </div>
//             {/* <div className="sub-form-ii"></div> */}
//           </div>
//           <div className="createstream-form">
//             <div className="">
//               <h1 className="schedule-stream">Schedule Stream</h1>
//             </div>
//             <div className="sub-form-i">
//               <div className="sub-form-i-i">
//                 <label>Start Date</label>
//                 <br />
//                 {/* <input className="sub-form-value"></input> */}
//                 <input
//                   min="2023-05-30"
//                   type="date"
//                   id="birthday"
//                   name="birthday"
//                   className="sub-form-value"
//                 ></input>
//               </div>
//               <div className="sub-form-i-i">
//                 <label>End Date</label>
//                 <br />
//                 {/* <input className="sub-form-value"></input> */}
//                 <input
//                   type="date"
//                   id="date"
//                   name="date"
//                   className="sub-form-value"
//                 ></input>
//               </div>
//               <div className="sub-form-i-i">
//                 <label>Total Stream</label>
//                 <br />
//                 <input className="sub-form-value"></input>
//               </div>
//             </div>

//             <div className="sub-form-ii"></div>
//           </div>
//           <div className="submit-stream">
//             <button className="submit-stream-btn">
//               <b>Send Stream</b>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import Header from "../../Header";
import Mainpage from "../../Mainpage";
import "../../../Style/sendstream.css";

export default function Sendstream() {
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const isValidInput = /^[0-9]*\.?[0-9]*$/.test(inputValue); // Regular expression to validate float and integer values

    if (!isValidInput) {
      event.target.value = ""; // Clear the input field if the entered value is not valid
    }
  };

  return (
    <div>
      <div className="sendstream-page">
        <div className="form-stream">
          <div className="heading-stream">
            <h1>Create Stream</h1>
          </div>
          <div className="form">
            <div className="createstream-form">
              <label>Reciever Wallet Address</label>
              <br />
              <input className="value-wallet" />
              <div className="sub-form-i">
                <div className="sub-form-i-i">
                  <label>Super Token</label>
                  <br />
                  <input
                    className="sub-form-value"
                    type="text"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="sub-form-i-i">
                  <label>Flow Rate</label>
                  <br />
                  <input
                    className="sub-form-value"
                    type="text"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="sub-form-i-i">
                  <label>/Month</label>
                  <br />
                  <input
                    type="month"
                    id="start"
                    name="start"
                    className="sub-form-value"
                  />
                </div>
              </div>
            </div>
            <div className="createstream-form">
              <div className="">
                <h1 className="schedule-stream">Schedule Stream</h1>
              </div>
              <div className="sub-form-i">
                <div className="sub-form-i-i">
                  <label>Start Date</label>
                  <br />
                  <input
                    type="date"
                    id="birthday"
                    name="birthday"
                    className="sub-form-value"
                  />
                </div>
                <div className="sub-form-i-i">
                  <label>End Date</label>
                  <br />
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="sub-form-value"
                  />
                </div>
                <div className="sub-form-i-i">
                  <label>Total Stream</label>
                  <br />
                  <input className="sub-form-value" />
                </div>
              </div>
            </div>
            <div className="submit-stream">
              <button className="submit-stream-btn">
                <b>Send Stream</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
