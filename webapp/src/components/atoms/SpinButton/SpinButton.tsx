import React from 'react';
import './SpinButton.css';

// *Notes: When destructuring a prop and using TS you have to write is :
// ({thePropName}: {typescriptTypeDefinition: string})
// **

export default function SpinButton({
  name: label,
}: {
  name: string | undefined;
}) {
  return (
    <div className="spin-button__box">
      <div className="spin-button btn">
        <span className="spin-button__content">Name: {label}</span>
      </div>
    </div>
  );
}

// const SpinButton: React.FC<{ name: string | undefined }> = ({ name }) => {
//   return (
//     <div className="spin-button__box">
//       <div className="spin-button btn">
//         <span className="spin-button__content">Name: {name}</span>
//       </div>
//     </div>
//   );
// };

// export default SpinButton;
