import React from "react";
import useFetch from "../../hooks/useFetch";
import "./featured.css";
const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=baku,madrid,imishli"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/540x270/696022.webp?k=4d4df7ecab58aee293032b6dafe7548afc27500b01f35b4d95658485b2d8cde6&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Baku</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/540x270/654609.webp?k=b139c472ad24c24a2b3721faba605951cd82921618b8b78824d0fb48acfbc2de&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Madrid</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/540x270/654657.webp?k=89856fe34d0c79585591dfb571c096931beeea442ef9175f86cd9960ffb242dd&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Imishli</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
