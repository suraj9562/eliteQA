import Styles from "./select.module.css";

function Select({data}) {
  return (
    <>
      <label className={Styles.select} htmlFor="select">
        <select name="Created by" id="">
          <option value="" disabled="disabled" selected="selected">
            {data}
          </option>
          <option value="#">One</option>
          <option value="#">Two</option>
          <option value="#">Three</option>
          <option value="#">Four</option>
          <option value="#">Five</option>
          <option value="#">Six</option>
          <option value="#">Seven</option>
        </select>
        <svg>
          <use href="#select-arrow-down"></use>
        </svg>
      </label>
      <svg className={Styles.sprites}>
        <symbol id="select-arrow-down" viewbox="0 0 10 6">
          <polyline points="1 1 5 5 9 1"></polyline>
        </symbol>
      </svg>
    </>
  );
}

export default Select;
