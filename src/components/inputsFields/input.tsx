import styles from './input.module.css';
interface Props {
  labelName: string;
  labelHtmlFor: string;
  inputType: string;
  refName: React.MutableRefObject<HTMLInputElement>;
  error?: string;
}

const Input: React.FC<Props> = ({
  labelName,
  labelHtmlFor,
  inputType,
  refName,
  error,
}) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={labelHtmlFor}>{labelName}:</label>
      <input
        type={inputType}
        id={labelHtmlFor}
        ref={refName}
        placeholder={`*Enter ${labelName}`}
        className={styles.inputField}
      />
      <p
        className={
          error
            ? styles.errorMassage
            : styles.noErrorPadding
        }
      >
        {error}
      </p>
    </div>
  );
};

export default Input;
