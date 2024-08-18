interface Props {
    labelName: string,
    labelHtmlFor: string,
    inputType: string,
    refName: React.MutableRefObject<HTMLInputElement>,
    error?: string
}

const Input: React.FC<Props> = ({labelName,labelHtmlFor,inputType,refName,error}) =>{
    return (
         <div>
        <label htmlFor={labelHtmlFor}>{labelName}:</label>
        <input type={inputType} id={labelHtmlFor} ref={refName} placeholder={`*Enter ${labelName}`}/>
        <p>{error}</p>
      </div>

    )
}

export default Input