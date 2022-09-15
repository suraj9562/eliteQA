import DifButton from "../../Question/button/DifButton";
import Styles from "./newQuestionCodeScreenThree.module.css";
import plus from "./../../../assets/icons/plusIcon.svg";
import Select from "../../Tests/select/Select";

function NewQuestionCodeScreenThree() {
  const data = [
    {
      input: "Input 1",
      output: "Output 1",
      exp: "Your Explanation goes here explanation goes here read more...",
    },
    {
      input: "Input 2",
      output: "Output 2",
      exp: "Your Explanation goes here explanation goes here read more...",
    },
  ];

  return (
    <div className={Styles.container}>
      <div className={Styles.left}>
        <div className={Styles.title}>Test Cases</div>
        <div className={Styles.subtitle}>
          The input and output files are used to evaluate submissions. Assign
          scores to each of the input files and their corresponding output
          files.
        </div>
        <div style={{ marginTop: "3rem" }}>
          <DifButton
            data={"Add test cases"}
            icon={plus}
            styles={{
              border: "1px dashed #809FB8",
              background: "rgba(254, 233, 225, 0.54)",
              maxWidth: "25rem",
            }}
          />
        </div>
        <div className={Styles.table} style={{ marginTop: "4rem" }}>
          <table>
            <tr>
              <th>Input Files</th>
              <th>Output Files</th>
              <th>Explanation</th>
            </tr>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.input}</td>
                  <td>{val.output}</td>
                  <td>{val.exp}</td>
                </tr>
              );
            })}
          </table>
        </div>
        {/* <div className={Styles.inputContainer}>
          <div className={Styles.row}>
            <div className={Styles.input}>
              <label htmlFor="input">Input</label>
              <textarea name="text" id="input" cols="25" rows="10"></textarea>
            </div>
            <div className={Styles.input}>
              <label htmlFor="output">Output</label>
              <textarea name="text" id="output" cols="25" rows="10"></textarea>
            </div>
          </div>
          <div className={Styles.input}>
            <label htmlFor="exp">Explanation</label>
            <textarea name="text" id="exp" cols="30" rows="10"></textarea>
          </div>
        </div> */}
      </div>
      <div className={Styles.right}>
        <div className={Styles.title}>Allowed Languages</div>
        <div className={Styles.subtitle}>
          Allowed languages in which candidates can write code
        </div>

        <div className={Styles.selectContainer}>
          <div className={Styles.column}>
            <Select data={"language 1"} />
            <Select data={"language 2"} />
            <Select data={"language 3"} />
            <Select data={"language 4"} />
            <Select data={"language 5"} />
            <Select data={"language 6"} />
          </div>
          <div className={Styles.column}>
            <Select data={"language 1"} />
            <Select data={"language 2"} />
            <Select data={"language 3"} />
            <Select data={"language 4"} />
            <Select data={"language 5"} />
            <Select data={"language 6"} />
          </div>
          <div className={Styles.column}>
            <Select data={"language 1"} />
            <Select data={"language 2"} />
            <Select data={"language 3"} />
            <Select data={"language 4"} />
            <Select data={"language 5"} />
            <Select data={"language 6"} />
          </div>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <Select data={"Select All"} />
        </div>
      </div>
    </div>
  );
}

export default NewQuestionCodeScreenThree;
