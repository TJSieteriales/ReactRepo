function Sample({ age, JobDescription }) {
  return (
    <div>
      <h1 className="mb-3">Dashboard</h1>


      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="card-title">Student Information</h3>


          <hr />


          <p>
            <strong>Age:</strong> {age}
          </p>


          <p>
            <strong>Job Description:</strong> {JobDescription}
          </p>
        </div>
      </div>
    </div>
  );
}


export default Sample;
