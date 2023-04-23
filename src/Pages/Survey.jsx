import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Survey = () => {
  const [answer, setAnswer] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    q9: "",
    q10: "",
  });

  let navigate = useNavigate();

  const handleChange = (e) => {
    setAnswer({ ...answer, [e.target.name]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/resources");
  }

  return (
    <div className="default-grid">
        <h1>Are You Contributing To Light Pollution?</h1>
      <div className="column-2 centered">

      <form onSubmit={(e) => handleSubmit(e)}>
        <p>Have You Ever Heard Of Light Pollution?</p>
        <input
          type="radio"
          id="q1y"
          name="q1"
          value="yes"
          onChange={(e) => handleChange(e)}
          required
        />
        <label for="q1y">Yes</label>
        <input
          type="radio"
          id="q1n"
          name="q1"
          value="no"
          onChange={(e) => handleChange(e)}
        />
        <label for="q1n">No</label>

        <p>Do You Believe Light Pollution Is A Problem In Your Area?</p>
        <input
          type="radio"
          id="q2y"
          name="q2"
          value="yes"
          onChange={(e) => handleChange(e)}
          required
        />
        <label for="q2y">Yes</label>
        <input
          type="radio"
          id="q2n"
          name="q2"
          value="no"
          onChange={(e) => handleChange(e)}
        />
        <label for="q2n">No</label>

        <p>
          Do You Think Light Pollution Affects The Natural Beauty Of The Night
          Sky?
        </p>
        <input
          type="radio"
          id="q3y"
          name="q3"
          value="yes"
          onChange={(e) => handleChange(e)}
          required
        />
        <label for="q3y">Yes</label>
        <input
          type="radio"
          id="q3n"
          name="q3"
          value="no"
          onChange={(e) => handleChange(e)}
        />
        <label for="q3n">No</label>

        <p>
          Do You Think The Lighting In Your Community Is Too Bright Or Poorly
          Directed, Leading To Light Pollution?
        </p>
        <input
          type="radio"
          id="q4y"
          name="q4"
          value="yes"
          onChange={(e) => handleChange(e)}
          required
        />
        <label for="q4y">Yes</label>
        <input
          type="radio"
          id="q4n"
          name="q4"
          value="no"
          onChange={(e) => handleChange(e)}
        />
        <label for="q4n">No</label>

        <p>Do You See Stars In Your Area?</p>
        <input
          type="radio"
          id="q5y"
          name="q5"
          value="yes"
          onChange={(e) => handleChange(e)}
          required
        />
        <label for="q5y">Yes</label>
        <input
          type="radio"
          id="q5n"
          name="q5"
          value="no"
          onChange={(e) => handleChange(e)}
        />
        <label for="q5n">No</label>

        <p>Do You Turn Off Lights When They Are Not In Use?</p>
        <input
          type="radio"
          id="q6y"
          name="q6"
          value="yes"
          onChange={(e) => handleChange(e)}
          required
        />
        <label for="q6y">Yes</label>
        <input
          type="radio"
          id="q6n"
          name="q6"
          value="no"
          onChange={(e) => handleChange(e)}
        />
        <label for="q6n">No</label>

        <p>Do You Use Motion Sensored Lights In Your Home?</p>
        <input
          type="radio"
          id="q7y"
          name="q7"
          value="yes"
          onChange={(e) => handleChange(e)}
          required
        />
        <label for="q7y">Yes</label>
        <input
          type="radio"
          id="q7n"
          name="q7"
          value="no"
          onChange={(e) => handleChange(e)}
        />
        <label for="q7n">No</label>

        <p>
          Do You Use Shielded Light Fixtures Or Fixtures With Lower Intensity?
        </p>
        <input
          type="radio"
          id="q8y"
          name="q8"
          value="yes"
          onChange={(e) => handleChange(e)}
          required
        />
        <label for="q8y">Yes</label>
        <input
          type="radio"
          id="q8n"
          name="q8"
          value="no"
          onChange={(e) => handleChange(e)}
        />
        <label for="q8n">No</label>

        <p>
          Would You Be Willing To Take Action To Reduce Light Pollution, Such As
          Adjusting Your Own Outdoor Lighting Practices?
        </p>
        <input
          type="radio"
          id="q9y"
          name="q9"
          value="yes"
          onChange={(e) => handleChange(e)}
          required
        />
        <label for="q9y">Yes</label>
        <input
          type="radio"
          id="q9n"
          name="q9"
          value="no"
          onChange={(e) => handleChange(e)}
        />
        <label for="q9n">No</label>

        <p>Do You Want To Learn More About Light Pollution?</p>
        <input
          type="radio"
          id="q10y"
          name="q10"
          value="yes"
          onChange={(e) => handleChange(e)}
          required
        />
        <label for="q10y">Yes</label>
        <input
          type="radio"
          id="q10n"
          name="q10"
          value="no"
          onChange={(e) => handleChange(e)}
        />
        <label for="q10n">Absolutely Yes</label>

        <div>
          <button type="submit" className="m-top">Submit</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Survey;
