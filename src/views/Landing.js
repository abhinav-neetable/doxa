import React, { useEffect, useState } from "react";
import { FaHotjar, FaComments, FaUserAlt } from "react-icons/fa";
import { AiOutlineToTop, AiOutlineFieldTime, AiOutlineUpSquare, AiOutlineDownSquare } from "react-icons/ai";
import { MdFiberNew, MdSearch, MdSubtitles } from "react-icons/md";
import axios from "axios";
import Moment from 'react-moment';
import Loader from '../components/Loader'
import {Link} from 'react-router-dom'
import {base_url} from '../utils/url'

function Landing() {
  const [data, setData] = useState([]);
  const [loading, setLoading] =useState(false)
  const [search, setSearch] = useState('subreddit')
  const [type , setType] = useState('')

  const getData =()=>{
    setLoading(true)
    axios
      .get(`${base_url}/r/${search}/${type}.json?limit=100`)
      .then((response) => {
        setData(response.data.data.children);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
        alert('Unable to find result for your search ')
        setLoading(false)
      });
  }
  useEffect(() => {
    getData()
  }, 
  // eslint-disable-next-line
  [type]);

  return (
    <div>
        {loading===false?<div className="container-fluid bg-soft">
        <div className="row">
          <div className="col-12">
            <main className="content">
              <div className="d-lg-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
              <div className="col-12 col-lg-6 px-0">
                  <div className="form-group mb-0">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" onClick={getData} >
                          <MdSearch />
                        </span>
                      </div>
                      <input
                        onChange={(e)=>{setSearch(e.target.value)}}
                        className="form-control"
                        placeholder=" e.x Programming"
                        type="text"
                        value={search}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-auto d-flex justify-content-between pl-0 mb-4 mb-lg-0">
                  <div className="btn-group">
                    <button
                      className="btn btn-primary text-white"
                      onClick={()=>{setType('hot')}}
                    >
                      <FaHotjar />
                      &nbsp;Hot
                    </button>
                    <button
                      className="btn btn-primary text-white"
                      onClick={()=>{setType('new')}}
                    >
                       
                      <MdFiberNew />
                      &nbsp;New
                    </button>
                    <button
                      className="btn btn-primary text-white"
                      onClick={()=>{setType('')}}
                    >
                      <AiOutlineToTop />
                      &nbsp;Top
                    </button>
                  </div>
                </div>
               
              </div>
              <div className="border bg-white border-light shadow-sm py-1 rounded">
              {data.map((post)=>{
                        return(
                <div className="card hover-state border-bottom rounded-0 py-3">
                  <div className="card-body d-sm-flex align-items-center flex-wrap flex-lg-nowrap py-0 pl-sm-0">
                    <div className="col-auto col-lg-1 text-left text-sm-center pl-0 pl-sm-4 mb-2 mb-sm-0">
                      {" "}<AiOutlineUpSquare className='mb-2'/><span className="badge super-badge badge-xs badge-purple">{post.data.ups}</span>
                      <AiOutlineDownSquare className='mb-2'/>
                    </div>
                  
                            <div className="col-12 col-lg-8 d-block px-0 mb-4 mb-md-0">
                            <div className="mb-2">
                                <Link to ={{
                                     pathname: `/threads/${post.data.id}`,
                                     state: post.data
 
                                }}
                                 >
                              <h3 className="h5"><MdSubtitles/> &nbsp;
                               {post.data.title}
                              </h3>
                              </Link>
                              <div className="d-block d-sm-flex">
                                <div>
                                  <h4 className="h6 font-weight-normal text-gray mb-3 mb-sm-0">
                                    <AiOutlineFieldTime />
                                    &nbsp;
                                    <Moment unix format="DD-MM-YYYY hh:mm">{post.data.created_utc}</Moment>
                                  </h4>
                                </div>
                                <div className="ml-sm-3">
                                  <span className="badge super-badge badge-lg badge-purple">
                                    <FaComments /> {post.data.num_comments}
                                  </span>
                                </div>
                              </div>
                              <div>
                                <h4 className="h6 font-weight-normal text-gray mb-3 mb-sm-0">
                                  <FaUserAlt />
                                  &nbsp; {post.data.author}
                                </h4>
                              </div>
                            </div>
                          </div>
                          
                  </div>
                </div>
                   )
                })}
              </div>
            </main>
          </div>
        </div>
      </div>:<Loader/>}
      
    </div>
  );
}

export default Landing;
