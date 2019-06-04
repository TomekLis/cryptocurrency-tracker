import React, { Fragment, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-3">
          <h3>Investment value</h3>

          <p>
            Enter investment value: <strong>{count}</strong>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="input-group">
            <span className="input-group-addon">$</span>
            <input
              type="number"
              name="count"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
              value={count}
              onChange={e => setCount(e.target.value)}
            />
            <span className="input-group-addon">.00</span>
          </div>
        </div>
        <div className="col-md-8">
          <div className="panel panel-default">
            <div className="panel-body">
              Basing on current price you earned{" "}
              {parseFloat(count * 0.0005 * 7907.42).toFixed(2)}
            </div>
            <div className="panel-footer">Investment revenue</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Counter;
