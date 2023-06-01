// import React, { useEffect, useState } from "react";

// function DataTable() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Fetch data from the API
//     fetch("https://api.example.com/data")
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   }, []);

//   const handleEdit = (itemId) => {
//     // Handle edit action for the item with itemId
//     console.log("Edit item with ID:", itemId);
//   };

//   const handleDelete = (itemId) => {
//     // Handle delete action for the item with itemId
//     console.log("Delete item with ID:", itemId);
//   };

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Asset</th>
//           <th>Balance</th>
//           <th>Flow Rate</th>
//           <th>Start Date</th>
//           <th>End Date</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((item) => (
//           <tr key={item.id}>
//             <td>{item.asset}</td>
//             <td>{item.balance}</td>
//             <td>{item.flowRate}</td>
//             <td>{item.startDate}</td>
//             <td>{item.endDate}</td>
//             <td>
//               <button onClick={() => handleEdit(item.id)}>Edit</button>
//               <button onClick={() => handleDelete(item.id)}>Delete</button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// export default DataTable;
import React, { useState } from "react";

function DataTable() {
  const [data, setData] = useState([
    {
      id: 1,
      asset: "Asset 1",
      balance: 1000,
      flowRate: 10,
      startDate: "2023-01-01",
      endDate: "2023-06-30",
    },
    {
      id: 2,
      asset: "Asset 2",
      balance: 500,
      flowRate: 5,
      startDate: "2023-02-15",
      endDate: "2023-08-31",
    },
    {
      id: 3,
      asset: "Asset 3",
      balance: 2000,
      flowRate: 15,
      startDate: "2023-03-10",
      endDate: "2023-09-30",
    },
  ]);

  const handleEdit = (itemId) => {
    // Find the item with the matching ID
    const selectedItem = data.find((item) => item.id === itemId);

    // Perform the edit action on the selected item
    console.log("Edit item:", selectedItem);
    // You can implement your custom logic for editing the item here
  };

  const handleDelete = (itemId) => {
    // Filter out the item with the matching ID
    const updatedData = data.filter((item) => item.id !== itemId);

    // Update the data state with the updated data
    setData(updatedData);

    // Perform the delete action on the selected item
    console.log("Delete item with ID:", itemId);
    // You can implement your custom logic for deleting the item here
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Asset</th>
          <th>Balance</th>
          <th>Flow Rate</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.asset}</td>
            <td>{item.balance}</td>
            <td>{item.flowRate}</td>
            <td>{item.startDate}</td>
            <td>{item.endDate}</td>
            <td>
              <button onClick={() => handleEdit(item.id)}>Edit</button>
            </td>
            <td>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
