import { useState } from "react";
import faqData from "./data";
import "./data.css";
function Index() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };
  const handleMultiSelection = (getCurrentId) => {
    let copyMultiple = [...multiple];
    const indexOfCurrentItem = copyMultiple.indexOf(getCurrentId);
    if (indexOfCurrentItem === -1) {
      copyMultiple.push(getCurrentId);
    } else {
      copyMultiple.splice(indexOfCurrentItem, 1);
    }
    setMultiple(copyMultiple);
  };
  return (
    <>
      <div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
          Enable multi selection
        </button>
        <div className="accordian">
          {faqData && faqData.length > 0 ? (
            faqData.map((dataItem, id) => (
              <div className="item" key={id}>
                <div
                  className="title"
                  onClick={() =>
                    enableMultiSelection
                      ? handleMultiSelection(dataItem.id)
                      : handleSingleSelection(dataItem.id)
                  }
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {enableMultiSelection ? (
                  multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.answer}</div>
                  )
                ) : selected === dataItem.id ? (
                  <div className="content">{dataItem.answer}</div>
                ) : null}
                {/* {selected === dataItem.id ? (
                  <div className="content">{dataItem.answer}</div>
                ) : null} */}
              </div>
            ))
          ) : (
            <div>No data found!</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Index;
