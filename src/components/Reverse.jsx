import React, { useState } from 'react'

const Reverse = () => {
    const [name, setName] = useState('Pawan Yadav');
    const [reversedName, setReversedName] = useState('');
    const handleInputChange = (e) => {
        setName(e.target.value);
        
    }
    const handleReversed= (e) => {
        const reversed = reversedString(name);
        setReversedName(reversed);
    }
    const reversedString = (name) => {
        var reversed = "";
        for (let i = name.length - 1; i >= 0; i--) {
          const char = name[i];
          reversed +=
            char === char.toUpperCase()
              ? char.toLowerCase()
              : char.toUpperCase();
        }
        return reversed;
    }
  return (
    <div>
      <input type="text" value={name} onChange={handleInputChange} />
      <button onClick={handleReversed}>Reverse</button>
      <p>Reversed Name: {reversedName}</p>
    </div>
  );
}

export default Reverse;