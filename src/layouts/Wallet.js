import React, { useState, useEffect } from 'react'
import "./Wallet.css";
import Search from "./images/search.jpeg";
import axios from "axios";

const Wallet = () => {
  const [transaction, setTransaction] = useState([]);
  const [withdral, setWithdral] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalWithdral, setTotalWithdral] = useState(0);
  const [avaBalance, setAvaBalance] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch orders on component mount
    const fetchTransaction = async () => {
      try {
        const response = await axios.get("/api/getAllTansaction", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setTransaction(response.data.orders);

        const setithdral = await axios.get("/api/getAllWithdrawl", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setWithdral(setithdral.data.orders);


        const totalWithdral = await axios.get("/api/totalWithdral", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setTotalWithdral(totalWithdral.data.total_withral ?? 0);

        const avaBalance = await axios.get("/api/avaBalance", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setAvaBalance(avaBalance.data ?? 0);


      } catch (err) {
        setError(
          err.response ? err.response.data.message : "Error fetching Transactions"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchTransaction();
  }, []);

  if (loading) {
    return <div>Loading orders...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div class="wallet-management-sec-0">
        <div class="wallet-management-sec">
          <div class="project-container-sec">
            {/* <!-- Search and Filters --> */}
            <div class="top-bar-sec">
              <div class="top-in-bar-sec">
                <h5>
                  Wallet Management <h6>Budget History</h6>
                </h5>
                <span>
                  <button class="filter-btn-sec">Filter</button>
                  <button class="statement-btn-sec">Statement</button>
                </span>
              </div>
              <div class="wallet-search-bar-sec">
                <img src={Search} alt="Search Icon" />
                <input type="text" placeholder="Search Project" />
              </div>
            </div>

            {/* 
    <!-- Project Section --> */}

            <div class="project-header-sec">
              <span>Project</span>
              <span>Amount</span>
              <span>Status</span>
            </div>

            {/* <!-- Project Card --> */}
            {transaction && transaction.length !== 0 ? (
              transaction.map((item, index) => (
                <div class="project-card-sec">
                  <div class="project-details-sec">
                    <img src={item.image[0]} alt="Project Image" class="project-img-sec" />
                    <div>
                      <p>Required companies {item.caption}</p>
                      <small>Date {new Date(item.created_at).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                        ,
                        {new Date(item.created_at).toLocaleTimeString('en-US', {
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: true
                        })}</small>
                      <div className="status-sec">
                        <p>
                          Status:
                          <span class="status completed">Project Complete</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <p class="amount-sec">Rs.{item.amount}</p>
                  <p class="status-1 success">Design is Accepted.</p>
                </div>
              ))
            ) : (
              <p className="no-orders">No transactions found.</p>
            )}

          </div>

          {/* <!-- Right Sidebar --> */}
          <div class="sidebar-sec">
            <button class="withdraw-btn-sec">Withdraw money</button>
            <div class="balance-sec">
              <div>
                <p>Rs. {avaBalance}</p>
                <p>Total Money</p>
              </div>
              <div>
                <p>Rs. {totalWithdral}</p>
                <p>Withdraw Money</p>
              </div>
            </div>
            <h3>Transaction History</h3>
            <div class="transaction-history-sec">
              <input
                type="text"
                placeholder="Search for Type, Date, Details or status"
              />
              <div class="transaction-header-sec">
                <span>Type</span>
                <span>Date</span>
                <span>Details</span>
                <span>Remarks</span>
                <span>Status</span>
              </div>

              {/* Transaction Rows */}
              <div className="trans-row-sec">
                {withdral && withdral.length !== 0 ? (
                  withdral.map((item, index) => (
                    <div class="transaction-row-sec">
                      <span>Withdraw</span>
                      <span>{new Date(item.created_at).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                        ,
                        {new Date(item.created_at).toLocaleTimeString('en-US', {
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: true
                        })}</span>
                      <span> Rs. {item.amount}</span>
                      <span>{item.remark}</span>
                      <span class="status success">Success</span>
                    </div>
                  ))
                ) : (
                  <p className="no-orders">No transactions found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wallet
