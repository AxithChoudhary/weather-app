window.addEventListener('load',()=>{
    let long;
    let lat;
    let tempratureDiscription=document.querySelector('.temprature-description')
    let tempratureDegree=document.querySelector('.temprature-degree')
    let locationTimezone=document.querySelector('.location-timezone')
    let icon=document.querySelector('.icon')
    // let tempratureSection=document.querySelector(".degree-section")
    let tempratureSection=document.querySelector(".temprature")
    const tempratureSpan=document.querySelector('.temprature span')




    navigator.geolocation.getCurrentPosition(position=>{
        long=position.coords.longitude;
        lat=position.coords.latitude;
        // const proxy="https://cors-anywhere.herokuapp.com/"
        const api=`http://api.weatherapi.com/v1/current.json?key=d4402f09c7fa4af28df93736222002&q=${lat},${long}&aqi=no`;

        console.log(position)
        fetch(api).then(response=>{
            return response.json();
            }).then(data=>{
                console.log(data)
                const {temp_c,temp_f,condition} =data.current;
                const {name,region} =data.location
                console.log(temp_c,condition)
                // console.timeLog(condition.text)
                //set doms element

                console.log(condition.text)
                tempratureDegree.textContent=temp_c;
                tempratureDiscription.textContent=condition.text;
                locationTimezone.textContent=`${name}, ${region}`
                icon.innerHTML=`<img src="https:${condition.icon}">`

                //change temp
                tempratureSection.addEventListener('click',()=>{
                    if(tempratureSpan.textContent==='F'){
                        tempratureDegree.textContent=temp_c;
                        tempratureSpan.textContent='C'
                    }else{
                        tempratureDegree.textContent=temp_f;
                        tempratureSpan.textContent='F'
                    }
                })

            
            })
            

    })
    
    // if(navigator.geolocation)
    // {
    //     navigator.geolocation.getCurrentPosition(position=>{
    //         long=position.coords.longitude;
    //         lat=position.coords.latitude;

            
    //         console.log(hello)
    //     })
    // }
    // else{
    //     h1.textContent="please allow location"
    // }
});