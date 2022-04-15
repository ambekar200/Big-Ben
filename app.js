
        // let date = new Date();
        // let minute = date.getMinutes();
        // let hour = date.getHours();
        // let sec = date.getSeconds();

        // document.getElementById("hour").innerHTML = hour;
        // document.getElementById("minute").innerHTML = minute;
        // document.getElementById("sec").innerHTML = sec;

        // let date = new Date(2020, 04, 15, 24, 59, 55);
        // lest sec = date.getSeconds();
        setInterval(() => {
            let date = new Date();
            let minute = date.getMinutes();
            let hour = date.getHours();
            let sec = date.getSeconds();
            // sec+=1;
            // if(sec>=60){~
            //     sec=0;
            //     minute+=1;
            // }
            // if(minute>=60){
            //     minute=0;
            //     hour+=1;
            // }
            document.getElementById("hour").innerHTML = hour-12;
            document.getElementById("minute").innerHTML = minute;
            document.getElementById("sec").innerHTML = sec;
            if(hour>=12){
                document.getElementById("AMPM").innerHTML = "PM";
            }else{
                document.getElementById("AMPM").innerHTML = "AM";
            }
        }, 1000)