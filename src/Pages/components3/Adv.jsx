import React from 'react';
import './adv.css'; 


const Adv = () => {
    return (
        <div className="container mt-5 w-2/3 text-white">
          {/* Header Section */}
          <div className="row mb-4 text-center">
            <div className="col-md-4 mb-3">
              <div className="p-3 scard border round">
                <div className='d-flex justify-content-between'>
                <h3>Wallet</h3>
                <img src='image 10.png'/>
                </div>
                <div className='d-flex justify-content-start text-left scard-line'>
                  A detailed overview of the budget allocation and transaction history.
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="p-3 scard border round">
              <div className='d-flex justify-content-between'>
                <h3>Design Selection</h3>
                <img src='imagea.png'/>
              </div>
              <div className='d-flex justify-content-start text-left scard-line'>
                  A gallery to view and select designs submitted by designers.
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="p-3 scard border round">
              <div className='d-flex justify-content-between'>
                <h3>Post Management</h3>
                <img src='imagep.png'/>
              </div>
              <div className='d-flex justify-content-start text-left scard-line'>
                  Tools to create, edit, and delete posts.
                </div>
              </div>
            </div>
          </div>
    
          <div className="row mb-5">
            <div className="col-md-8 text-center">
              <div className='head text-dark text-left mt-4'>
              Post your <span className="text-info">advertisement</span> requirements
              </div>
              <p className="lead text-left text-dark">
              Unlock access to 10,000+ designers for hire with Dribbble, the largest platform of designers online. Simplify your hiring process today and never have to worry about where to hire top design talent again
              </p>
              <div className='text-left '>
              <button className="btn btn-info text-white mt-4 ">Upload Post</button>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <img src="Objects.png" alt="Cup Design" className="img-fluid" />
            </div>
          </div>
    
      
          <div className="row">
            <div className="col">
              <h4 className='text-dark order mb-4'>Recent Orders</h4>
              <table className="table table-bordered-none table-hover">
                <tbody>
                  <tr >
                    <td>#968659684</td>
                    <td>Cup Design</td>
                    <td>Aug 30, 2023</td>
                    <td>$4345</td>
                    <td><a href="#">Delivered</a></td>
                  </tr>
                  <tr>
                    <td>#968659684</td>
                    <td>Cup Design</td>
                    <td>Aug 30, 2023</td>
                    <td>$4345</td>
                    <td><a href="#">Delivered</a></td>
                  </tr>
                </tbody>
              </table>
              <a href="#" className="float-end text-info">See All</a>
            </div>
          </div>
        </div>
      );
};

export default Adv;

