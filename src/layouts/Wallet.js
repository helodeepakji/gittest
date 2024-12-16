import React from 'react'
import "./Wallet.css"
import Cupy from "./images/Cupy.png";
import Search from "./images/search.jpeg";

const Wallet = () => {
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
          <div class="project-card-sec">
            <div class="project-details-sec">
              <img src={Cupy} alt="Project Image" class="project-img-sec" />
              <div>
                <p>Required companies design on a Cupy, Design should be...</p>
                <small>Uploaded on 24-10-2024</small>
                <div className="status-sec">
                  <p>
                    Status:{" "}
                    <span class="status completed">Project Complete</span>
                  </p>
                  <button class="view-post-btn-sec">View Post</button>
                </div>
              </div>
            </div>
            <p class="amount-sec">$400</p>
            <p class="status-1 success">Declined by the Server</p>
          </div>

          {/* <!-- Duplicate the Project Card for More Items --> */}
          <div class="project-card-sec">
            <div class="project-details-sec">
              <img src={Cupy} alt="Project Image" class="project-img-sec" />
              <div>
                <p>Required companies design on a Cupy, Design should be...</p>
                <small>Uploaded on 24-10-2024</small>
                <div className="status-sec">
                  <p>
                    Status:{" "}
                    <span class="status pending"> work pending</span>
                  </p>
                  <button class="view-post-btn-sec">View Post</button>
                </div>
              </div>
            </div>
            <p class="amount-sec">$400</p>
            <p class="status-1 pending">Pending</p>
          </div>
          <div class="project-card-sec">
            <div class="project-details-sec">
              <img src={Cupy} alt="Project Image" class="project-img-sec" />
              <div>
                <p>Required companies design on a Cupy, Design should be...</p>
                <small>Uploaded on 24-10-2024</small>
                <div className="status-sec">
                  <p>
                    Status:{" "}
                    <span class="status pending">Design  needed</span>
                  </p>
                  <button class="view-post-btn-sec">View Post</button>
                </div>
              </div>
            </div>
            <p class="amount-sec">$400</p>
            <p class="status-1 pending">Pending</p>
          </div>
        </div>

        {/* <!-- Right Sidebar --> */}
        <div class="sidebar-sec">
          <button class="withdraw-btn-sec">Withdraw money</button>
          <div class="balance-sec">
            <div>
              <p>$2000</p>
              <p>Total Money</p>
            </div>
            <div>
              <p>$1000</p>
              <p>Spend Money</p>
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
              <span>Status</span>
            </div>

            {/* Transaction Rows */}
            <div className="trans-row-sec">
              <div class="transaction-row-sec">
                <span>Deposit</span>
                <span>13/11/24</span>
                <span>**** **** **** 7878</span>
                <span class="status success">Success</span>
              </div>
              <div class="transaction-row-sec">
                <span>Deposit</span>
                <span>13/11/24</span>
                <span>**** **** **** 7878</span>
                <span class="status-sec success">Success</span>
              </div>
              <div class="transaction-row-sec">
                <span>Withdrawal</span>
                <span>13/11/24</span>
                <span>**** **** **** 7878</span>
                <span class="status cancel">Cancel</span>
              </div>
              <div class="transaction-row-sec">
                <span>Deposit</span>
                <span>13/11/24</span>
                <span>**** **** **** 7878</span>
                <span class="status success">Success</span>
              </div>
              <div class="transaction-row-sec">
                <span>Deposit</span>
                <span>13/11/24</span>
                <span>**** **** **** 7878</span>
                <span class="status success">Success</span>
              </div>
              <div class="transaction-row-sec">
                <span>Withdrawal</span>
                <span>13/11/24</span>
                <span>**** **** **** 7878</span>
                <span class="status cancel">Cancel</span>
              </div>
              <div class="transaction-row-sec">
                <span>Deposit</span>
                <span>13/11/24</span>
                <span>**** **** **** 7878</span>
                <span class="status success">Success</span>
              </div>
              <div class="transaction-row-sec">
                <span>Deposit</span>
                <span>13/11/24</span>
                <span>**** **** **** 7878</span>
                <span class="status success">Success</span>
              </div>
              <div class="transaction-row-sec">
                <span>Deposit</span>
                <span>13/11/24</span>
                <span>**** **** **** 7878</span>
                <span class="status success">Success</span>
              </div>
              <div class="transaction-row-sec">
                <span>Deposit</span>
                <span>13/11/24</span>
                <span>**** **** **** 7878</span>
                <span class="status success">Success</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Wallet
