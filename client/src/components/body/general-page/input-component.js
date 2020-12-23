import React from 'react'

const InputContainer = (props) =>{
    
  const userCode = React.createRef();
    return <div>
    <input
      type="field"
      placeholder="Введіть ваш код"
      onChange={() => {
        props.onChange(userCode.current.value);
      }}
      ref={userCode}
      value={props.code}
    />
    <button onClick={() => props.onClick()}>send!</button>
  </div>
}

export default InputContainer