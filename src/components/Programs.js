import React, { useEffect, useState } from 'react';

function Programs() {
    let[allprogram,setAllprogram]=useState([])
    let[filterprogram,setFilterprogram]=useState([])
    let [showtoggle,setShowtoggle]=useState(true)
    useEffect(()=>{
     fetch("https://api.spaceXdata.com/v3/launches?limit=100")
        .then((response)=>response.json())
        .then(data=>{
            console.log(data)
            setAllprogram(data)
        } )
        .catch(err=> console.log(err))

        return ()=>{
            // cleanup code
            
            
        }
    },[])
    // year wise program filter functionality---------------------/
    function showProgram(yr){
        let programYear = allprogram.filter((ele)=>{
            return ele.launch_year ===yr;
        })
        console.log(programYear)
        setFilterprogram(programYear)
        setShowtoggle(true)
    }
    // launch program  filter functionality--------------/
    function showLaunch(lnch){
        let launchProgram=allprogram.filter(ele=>{
            return String(ele.launch_success).toUpperCase() === lnch.toUpperCase();
        })
        console.log(launchProgram)
        setFilterprogram(launchProgram)
        setShowtoggle(true)
    }
    // landing program filter functionality-----------/
    function showLanding(landing){
        let landingProgram=allprogram.filter(ele=>{
            return String(ele.rocket.first_stage.cores[0].landing_intent).toUpperCase() === landing.toUpperCase();
        })
        console.log(landingProgram)
        setFilterprogram(landingProgram)
        setShowtoggle(true)
    }
    
    
   



    /*********************************************************************** */
  return (
    <div className='program-page'>
        <h1>SpaceX Launch Programs</h1>
        <div className='prgram-container'>
            <div className='program-filter'>
               <h2>Filters</h2>
               <div className='program-filter-launchyr-cont'> <p>Launch Year </p></div>
                 {/*launch year container */} 
               <div className='launchyr-cont'>
                  <button onClick={()=>{
                      showProgram("2006")
                      setShowtoggle(false)
                  }}>2006</button>
                  <button onClick={()=>{
                      showProgram("2007")
                      setShowtoggle(false)
                  }}>2007</button>
                  <button onClick={()=>{
                      showProgram("2008")
                      setShowtoggle(false)
                  }}>2008</button>
                  <button  onClick={()=>{
                      showProgram("2009")
                      setShowtoggle(false)
                  }}>2009</button>
                  <button  onClick={()=>{
                      showProgram("2010")
                      setShowtoggle(false)
                  }}>2010</button>
                  <button onClick={()=>{
                      showProgram("2011")
                      setShowtoggle(false)
                  }}>2011</button>
                  <button onClick={()=>{
                      showProgram("2012")
                      setShowtoggle(false)
                  }}>2012</button>
                  <button onClick={()=>{
                      showProgram("2013")
                      setShowtoggle(false)
                  }}>2013</button>
                  <button onClick={()=>{
                      showProgram("2014")
                      setShowtoggle(false)
                  }}>2014</button>
                  <button onClick={()=>{
                      showProgram("2015")
                      setShowtoggle(false)
                  }}>2015</button> 
                  <button onClick={()=>{
                      showProgram("2016")
                      setShowtoggle(false)
                  }}>2016</button>
                  <button onClick={()=>{
                      showProgram("2017")
                      setShowtoggle(false)
                  }}>2017</button>
                  <button onClick={()=>{
                      showProgram("2018")
                      setShowtoggle(false)
                  }}>2018</button>
                  <button onClick={()=>{
                      showProgram("2019")
                      setShowtoggle(false)
                  }}>2019</button>
                  <button onClick={()=>{
                      showProgram("2020")
                      setShowtoggle(false)
                  }}>2020</button>
               </div>
               {/*launch launch container */}
               <div className="successful-lnch-cont">
                   <p className='lnch-title'>Successful Launch</p>
                   <div className='lnch-scs'>
                       <button onClick={()=>{
                      showLanding("true")
                      setShowtoggle(false)
                  }}>TRUE</button>
                       <button onClick={()=>{
                      showLanding("false")
                      setShowtoggle(false)
                  }}>FALSE</button>
                   </div>
               </div>
               {/* successful landing container */}
               <div className='scs-landing-cont'>
                   <p>Successful Landing</p>
                   <div className='landing-scs'>
                       <button onClick={()=>{
                      showLaunch("false")
                      setShowtoggle(false)
                  }}>TRUE</button>
                       <button >FALSE</button>
                   </div>
               </div>
                
            </div>
            <div className='program-data'>
            {
                showtoggle? 
            allprogram.map((ele,ind)=>{
                return(
                    <div className='program-card' key={ind}>
                        
                        <div className='img-back'><img className='program-img' src={ele.links.mission_patch_small} 
                         /> </div>
                          <div className='program-card-body'> 
                             <p> <span className='program-card-body-mission'>{ele.mission_name} # {ele.flight_number} </span></p>
                             <p>mission_ids: </p>
                            <ul>
                                <li> <span>{ele.mission_id[0]} </span></li>
                            </ul>
                         <p>launch year :<span>{ele.launch_year} </span> </p>   
                         <p>successful launch :<span>{String(ele.launch_success) } </span> </p>   
                         <p>successful landing :<span> {String(ele.rocket.first_stage.cores[0].landing_intent)} </span> </p> 
                        </div> 
                         </div>
                )
            })
            :
            filterprogram.map((ele,ind)=>{
                return(
                    <div className='program-card' key={ind}>
                        
                        <div className='img-back'><img className='program-img' src={ele.links.mission_patch_small} 
                         /> </div>
                          <div className='program-card-body'> 
                             <p> <span className='program-card-body-mission'>{ele.mission_name} # {ele.flight_number} </span></p>
                             <p>mission_ids: </p>
                            <ul>
                                <li> <span>{ele.mission_id[0]} </span></li>
                            </ul>
                         <p>launch year :<span>{ele.launch_year} </span> </p>   
                         <p>successful launch :<span>{ele.launch_success} </span>  </p>   
                         <p>successful landing :<span> {ele.rocket.first_stage.cores[0].landing_intent} </span> </p> 
                        </div> 
                         </div>
                )
            })
        }
            </div>

        </div>
      <p> Developed by : Naresh Valvi</p>
        
       
    </div>
  )
}

export default Programs
