import React from "react";
import {Link} from 'react-router-dom'
import {base_url} from '../utils/url'
import Moment from 'react-moment';
import { FaUserAlt, FaComments } from "react-icons/fa";
import {  AiOutlineFieldTime, AiOutlineUpSquare } from "react-icons/ai";

function Threads(props) {
  const data = (props.location.state);
  console.log(data)
  return (
    <div className="container-fluid p-5">
      <div className='text-right'>
      <Link to ='/'><button className='btn btn-outline-secondary'>Back to Search</button></Link>
      </div>
      <div className="row">
      <a href={ base_url + data.permalink } target="_blank" rel="noreferrer noopener"> <h2>Thread id-{data.id}</h2> </a>
        <div className="col-12 px-0 mb-4">
          <div className="card border-light shadow-sm">
            <div className="card-body">
              <h2 className="h5">{data.title}</h2>
              <p>
              {data.selftext}
              </p>
              <div className="d-block">
                <div className="d-flex align-items-center pt-3 mr-5">
                  <div className="icon icon-shape icon-sm icon-shape-primary rounded mr-3">
                   <FaUserAlt/>
                  </div>
                  <div className="d-block">
                    <label className="mb-0">Posted by:</label>
                    <h5 className="mb-0">{data.author}</h5>
                  </div>
                </div>
                <div className="d-flex align-items-center pt-3">
                  <div className="icon icon-shape icon-sm icon-shape-secondary rounded mr-3">
                   <AiOutlineFieldTime/>
                  </div>
                  <div className="d-block">
                    <label className="mb-0">Time of Post:</label>
                    <h5 className="mb-0"> <Moment unix format="DD-MM-YYYY hh:mm">{data.created_utc}</Moment></h5>
                  </div>
                </div>
                <div className="d-flex align-items-center pt-3">
                  <div className="icon icon-shape icon-sm icon-shape-success rounded mr-3">
                   <AiOutlineUpSquare/>
                  </div>
                  <div className="d-block">
                    <label className="mb-0">Upvotes:</label>
                    <h5 className="mb-0"> {data.ups}</h5>
                  </div>
                </div>
                <div className="d-flex align-items-center pt-3">
                  <div className="icon icon-shape icon-sm icon-shape-warning rounded mr-3">
                   <FaComments/>
                  </div>
                  <div className="d-block">
                    <label className="mb-0">Comments:</label>
                    <h5 className="mb-0"> {data.num_comments}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Threads;
