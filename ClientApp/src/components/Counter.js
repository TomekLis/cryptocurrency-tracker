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

          <div class="input-group">
            <span class="input-group-addon">$</span>
            <input type="number" name="count" class="form-control" aria-label="Amount (to the nearest dollar)" value={count} onChange={e => setCount(e.target.value)} />
            <span class="input-group-addon">.00</span>
          </div>
        </div>
        <div className="col-md-8">

          <div class="panel panel-default">
            <div class="panel-body">
              Basing on current price you earned {parseFloat(count * 0.0005 * 7907.42).toFixed(2)}
            </div>
            <div class="panel-footer">Investment revenue</div>
          </div>
        </div>

      </div>
    </Fragment>
  );
};

export default Counter;
