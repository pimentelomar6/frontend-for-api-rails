import { useEffect, useState } from "react";
import { Table } from "./components/Table";
import { Select } from "./components/Select";

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = `http://localhost:3000/api/features?page=${currentPage}&per_page=${perPage}`;
      const response = await fetch(url);
      const data = await response.json();

      setData(data[0].data);
      setTotalPages(data[0].pagination?.total_pages);
    };

    fetchData();
  }, [currentPage, perPage]);

  const handlePerPage = (value) => {
    setPerPage(value);
  };

  return (
    <>
      <div className="container">
        <h1 className="mt-4 mb-5">Features</h1>
        <Table data={data} />

        {totalPages && (
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a
                  className="page-link"
                  onClick={() => {
                    if (currentPage > 1) {
                      setCurrentPage(currentPage - 1);
                    }
                  }}
                >
                  Previous
                </a>
              </li>

              <li className="page-item">
                <a className="page-link">
                  {currentPage} / {totalPages}
                </a>
              </li>

              <li className="page-item">
                <a
                  className="page-link"
                  onClick={() => {
                    if (currentPage < totalPages) {
                      setCurrentPage(currentPage + 1);
                    }
                  }}
                >
                  Next
                </a>
              </li>

              <li>
                <Select handlePerPage={handlePerPage} />
              </li>
            </ul>
          </nav>
        )}
      </div>
    </>
  );
}

export default App;
