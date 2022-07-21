function Book({ data }) {
  return (
    <div className="card">
      <h5 className="card-header">{data.title}</h5>
      <div className="card-body">
        <table className="table">
          <tbody>
            <tr>
              <td className="text-dark font-weight-bold">Title:</td>
              <td>{data.title}</td>
            </tr>
            <tr>
              <td className="text-dark font-weight-bold">Author:</td>
              <td>{data.author}</td>
            </tr>
            <tr>
              <td className="text-dark font-weight-bold">Rating:</td>
              <td>{data.rating}</td>
            </tr>
            <tr>
              <td className="text-dark font-weight-bold">Review:</td>
              <td>{data.review}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
