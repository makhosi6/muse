import React from "react";

type Props = {};

const MoneyCharts = (props: Props) => {
  return (
    <div className="muse-money-charts">
      <div className="chart"></div>
      <div className="stocks">
        <div className="stock">
          <div className="stock-data">
            <div className="price"></div>
            <div className="change"></div>
          </div>
          <span className="stocks-divider"></span>
        </div>
      </div>
    </div>
  );
};

function DataItem({}: Props) {
  return <div>DataItem</div>;
}

export default MoneyCharts;
