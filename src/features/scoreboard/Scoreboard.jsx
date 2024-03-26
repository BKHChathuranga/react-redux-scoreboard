import { useSelector, useDispatch } from "react-redux";
import { runScored, wicketTaken, overFinished } from "./scoreboardSlice";

const Scoreboard = () => {
  const runs = useSelector((state) => state.scoreboard.runs);
  const wickets = useSelector((state) => state.scoreboard.wickets);
  const oversBowled = useSelector((state) => state.scoreboard.oversBowled);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Cricket Scoreboard</h1>
      <div>
        <h3>Runs: {runs}</h3>
        <button onClick={() => dispatch(runScored())}>Run Scored</button>
      </div>
      <div>
        <h3>Wickets: {wickets}</h3>
        <button onClick={() => dispatch(wicketTaken())}>Wicket Taken</button>
      </div>
      <div>
        <h3>Overs Bowled: {oversBowled}</h3>
        <button onClick={() => dispatch(overFinished())}>Over Completed</button>
      </div>
    </div>
  );
};

export default Scoreboard;
