import AppWrapper from "src/components/AppWrapper";
import _ from "lodash";

function rollD20() {
  return _.random(1, 20);
}

function doMath(nOfTests: number, tn: number) {
  const successes = [0, 0, 0, 0, 0];

  for (let i = 0; i < nOfTests; i++) {
    let successCount = 0;

    for (let j = 0; j < 4; j++) {
      if (rollD20() <= tn) {
        successCount++;
      }
    }

    successes[successCount]++;
  }

  return successes;
}

function percent(arr: number[]) {
  const sumary = arr.reduce((acc, curr) => acc + curr, 0);
  return arr.map((val) => val / sumary);
}

function computeSuccessRates(nOfTests: number) {
  const allSuccessRates = [];

  for (let tn = 1; tn <= 20; tn++) {
    const successes = doMath(nOfTests, tn);
    const successRates = percent(successes);
    allSuccessRates.push(successRates);
  }

  return allSuccessRates;
}

function computeProgressions(allSuccessRates: number[][]) {
  const progressions = [];

  for (let i = 1; i < allSuccessRates.length; i++) {
    const progression = allSuccessRates[i - 1][0] - allSuccessRates[i][0];
    progressions.push(progression);
  }

  // We'll push 0 for the last entry since there's no next TN to compare against
  progressions.push(0);

  return progressions;
}

function App() {
  const nOfTests = 10000;
  const allSuccessRates = computeSuccessRates(nOfTests);
  const progressions = computeProgressions(allSuccessRates);

  return (
    <AppWrapper>
      <h1 style={{ textAlign: "center" }}>Calculator</h1>
      <table style={{ margin: "0 auto" }}>
        <thead>
          <tr>
            <td>-</td>
            <td>Progression</td>
            <td>0s</td>
            <td>1s</td>
            <td>2s</td>
            <td>3s</td>
            <td>4s</td>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 20 }, (_, idx) => idx + 1).map((tn, idx) => (
            <tr key={tn}>
              <td>{tn}</td>
              <td style={{ textAlign: "center" }}>
                {isNaN(
                  Math.round((progressions[idx - 1] + Number.EPSILON) * 100)
                )
                  ? "-"
                  : Math.round((progressions[idx - 1] + Number.EPSILON) * 100)}
                %
              </td>
              {allSuccessRates[idx].map((prob, index2) => (
                <td key={index2} style={{ textAlign: "center" }}>
                  {Math.round((prob + Number.EPSILON) * 100)}%
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </AppWrapper>
  );
}

export default App;
